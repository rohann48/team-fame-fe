import { createContext, useMemo } from "react";
import {
  ShopContextTypes,
  ShoppingContextInitialState,
} from "./ShopContextTypes";
import { useImmer } from "use-immer";
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
  console.log("context", productInfo);

  const contextValue = useMemo(
    () => ({
      productInfo,
      setProductInfo,
    }),
    [productInfo, setProductInfo]
  );
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
