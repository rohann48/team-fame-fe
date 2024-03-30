export interface ShopContextTypes {
  children: React.ReactNode;
}

export interface ShoppingContextInitialState {
  productInfo: {
    productCount: number;
    cartBasket: {
      id: number;
      imageUrl: string;
      description: string;
      price: number;
    }[];
  };
  setProductInfo: React.Dispatch<
    React.SetStateAction<ShoppingContextInitialState["productInfo"]>
  >;
}
