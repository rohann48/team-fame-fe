import { createContext, useState, useMemo, useEffect } from "react";
import {
  ShopContextTypes,
  ShoppingContextInitialState,
} from "./ShopContextTypes";
let initialState: ShoppingContextInitialState["productInfo"] = {
  productCount: 0,
  cartBasket: [],
};
export const ShopContext = createContext<ShoppingContextInitialState>(
  {} as ShoppingContextInitialState
);
const ShopContextProvider = ({ children }: ShopContextTypes) => {
  const [productInfo, setProductInfo] = useState({ ...initialState });
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
