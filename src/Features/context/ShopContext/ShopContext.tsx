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
  //handle incrementing product count
  const handleIncrement = () => {
    setProductCount((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  //handle decrementing product count
  const handleDecrement = () => {
    setProductCount((prev) => ({
      ...prev,
      count: prev.count - 1,
    }));
  };

  const contextValue = useMemo(
    () => ({
      productCount,
      handleIncrement,
      handleDecrement,
    }),
    [productCount, handleIncrement, handleDecrement]
  );
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
