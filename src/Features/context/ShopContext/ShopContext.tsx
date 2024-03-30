import { createContext, useState, useMemo, useCallback } from "react";
import {
  ShopContextTypes,
  ShoppingContextInitialState,
} from "./ShopContextTypes";
let initialState = {
  productCount: 0,
  addToCartCount: 0,
};
export const ShopContext = createContext<ShoppingContextInitialState>(
  {} as ShoppingContextInitialState
);
const ShopContextProvider = ({ children }: ShopContextTypes) => {
  const [countInfo, setCountInfo] = useState({ ...initialState });
  const contextValue = useMemo(
    () => ({
      countInfo,
      setCountInfo,
    }),
    [countInfo, setCountInfo]
  );
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
