export interface ShopContextTypes {
  children: React.ReactNode;
}

export interface ShoppingContextInitialState {
  countInfo: {
    productCount: number;
    addToCartCount: number;
  };
  setCountInfo: React.Dispatch<
    React.SetStateAction<ShoppingContextInitialState["countInfo"]>
  >;
}
