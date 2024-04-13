import { Updater } from "use-immer";

export interface ShopContextTypes {
  children: React.ReactNode;
}

export interface ShoppingContextInitialState {
  productInfo: {
    cartBasket: {
      id: string;
      name: string;
      imageInfo: Array<{ name: String; Key: String; path: any; date: Date }>;
      description: string;
      price: number;
      quantityCount?: number;
    }[];
    catTotalAmount: number;
  };
  products: Array<{
    _id: string;
    name: string;
    category: string;
    details: string;
    price: number;
    imageInfo: Array<{ name: String; Key: String; path: String; date: Date }>;
  }>;
  setProductInfo: Updater<ShoppingContextInitialState["productInfo"]>;
}
