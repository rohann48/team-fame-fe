import {
  ShopContextTypes,
  ShoppingContextInitialState,
} from "../context/ShopContext/ShopContextTypes";

export type CommonTypes = {
  product: {
    id: number;
    imageUrl: string;
    description: string;
    price: number;
    quantity: number;
  };
  productInfo: ShoppingContextInitialState["productInfo"];
  setProductInfo: ShoppingContextInitialState["setProductInfo"];
  handleIncrementProduct: () => void;
  handleDecrementProduct: () => void;
  handleBackButton: () => void;
};
