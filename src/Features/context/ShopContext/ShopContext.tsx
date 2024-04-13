import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  ShopContextTypes,
  ShoppingContextInitialState,
} from "./ShopContextTypes";
import { useImmer } from "use-immer";
import { ApiHandler } from "../../Constants/ApiHandler";
import { LoginContext } from "../LoginContext";

let initialState: ShoppingContextInitialState["productInfo"] = {
  cartBasket: [],
  catTotalAmount: 0,
};
export const ShopContext = createContext<ShoppingContextInitialState>(
  {} as ShoppingContextInitialState
);
const ShopContextProvider = ({ children }: ShopContextTypes) => {
  const [productInfo, setProductInfo] = useImmer({ ...initialState });
  const [products, setProducts] = useState<
    ShoppingContextInitialState["products"]
  >([]);
  const { userInfo } = useContext(LoginContext);
  const getProductData = async () => {
    const response = await ApiHandler.getProductDetails();
    setProducts([...response?.results]);
  };

  const getCartDataByClientId = async () => {
    const response = await ApiHandler.getCartDataByClientId(userInfo._id);
    setProductInfo((draft) => {
      response?.results?.products?.forEach((product: any) => {
        draft.cartBasket.push({
          id: product.productId._id,
          name: product.productId.name,
          description: product.productId.details,
          imageInfo: product.productId.imageInfo,
          price: product.productId.price,
          quantityCount: product.quantity,
        });
        draft.catTotalAmount += product.productId.price * product.quantity || 0;
      });
    });
  };
  useEffect(() => {
    getProductData();
  }, []);
  useEffect(() => {
    if (userInfo._id) {
      getCartDataByClientId();
    }
  }, [userInfo._id]);

  console.log(productInfo, "lloooo");

  const contextValue = useMemo(
    () => ({
      productInfo,
      setProductInfo,
      products,
    }),
    [productInfo, setProductInfo, products]
  );

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
