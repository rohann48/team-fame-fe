import { Updater } from "use-immer";

export interface ShopContextTypes {
  children: React.ReactNode;
}

interface productInfo {
  product: Array<{
    _id: string;
    name: string;
    category: string;
    details: string;
    price: number;
    imageInfo: Array<{ name: String; Key: String; path: String; date: Date }>;
  }>;
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
  products: productInfo["product"];
  setProductInfo: Updater<ShoppingContextInitialState["productInfo"]>;
  categoryData: Array<string>;
  setProducts: any;
  tempProducts: productInfo["product"];
  setTempProducts: any;
  setCategoryData: React.Dispatch<React.SetStateAction<Array<string>>>;
}
