import { createContext, useEffect, useMemo, useState } from "react";
import {
  ShopContextTypes,
  ShoppingContextInitialState,
} from "./ShopContextTypes";
import { useImmer } from "use-immer";
import { ApiHandler } from "../../Constants/ApiHandler";

let initialState: ShoppingContextInitialState["productInfo"] = {
  productCount: 0,
  cartBasket: [],
  cartTotalQuantity: 0,
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

  const getProductData = async () => {
    const response = await ApiHandler.getProductDetails();
    console.log("response", response?.results);
    setProducts([...response?.results]);
  };
  useEffect(() => {
    getProductData();
  }, []);
  const contextValue = useMemo(
    () => ({
      productInfo,
      setProductInfo,
      products,
    }),
    [productInfo, setProductInfo, products]
  );
  console.log("productInfo", productInfo);

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
