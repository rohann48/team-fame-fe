import { createContext, useState, useMemo, useCallback } from "react";
import {
  ShopContextTypes,
  ShoppingContextInitialState,
} from "./ShopContextTypes";
let initialState = {
  count: 0,
};
export const ShopContext = createContext<ShoppingContextInitialState>(
  {} as ShoppingContextInitialState
);
const ShopContextProvider = ({ children }: ShopContextTypes) => {
  const [productCount, setProductCount] = useState({ ...initialState });
  console.log("count-context", productCount.count);
  const contextValue = useMemo(
    () => ({
      productCount,
      setProductCount,
    }),
    [productCount, setProductCount]
  );
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
