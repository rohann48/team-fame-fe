import { Updater } from "use-immer";

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
      quantityCount?: number;
    }[];
    cartTotalQuantity: number;
    catTotalAmount: number;
  };

  setProductInfo: Updater<ShoppingContextInitialState["productInfo"]>;
}
