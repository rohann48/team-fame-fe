import {
  ShopContextTypes,
  ShoppingContextInitialState,
} from "../context/ShopContext/ShopContextTypes";

export type CommonTypes = {
  product: {
    _id: string;
    details: string;
    price: number;
    name: string;
    imageInfo: Array<{
      _id: string;
      name: string;
      path: string;
      Key: string;
      date: Date;
    }>;
  };
  productInfo: ShoppingContextInitialState["productInfo"];
  setProductInfo: ShoppingContextInitialState["setProductInfo"];
  handleIncrementProduct: () => void;
  handleDecrementProduct: () => void;
  handleBackButton: () => void;
};
