import { Updater } from "use-immer";

export interface ShopContextTypes {
  children: React.ReactNode;
}

export interface ShoppingContextInitialState {
  productInfo: {
    productCount: number;
    cartBasket: {
      id: string;
      name: string;
      imageInfo: Array<object>;
      description: string;
      price: number;
      quantityCount?: number;
    }[];
    cartTotalQuantity: number;
    catTotalAmount: number;
  };
  products: Array<{
    _id: string;
    name: string;
    category: string;
    details: string;
    price: number;
    imageInfo: Array<object>;
  }>;
  setProductInfo: Updater<ShoppingContextInitialState["productInfo"]>;
}
