export interface ShopContextTypes {
  children: React.ReactNode;
}

export interface ShoppingContextInitialState {
  productCount: {
    count: number;
  };
  handleIncrement: () => void;
  handleDecrement: () => void;
}
