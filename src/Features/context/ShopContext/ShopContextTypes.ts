export interface ShopContextTypes {
  children: React.ReactNode;
}

export interface ShoppingContextInitialState {
  productCount: {
    count: number;
  };
  setProductCount: React.Dispatch<
    React.SetStateAction<{
      count: number;
    }>
  >;
}
