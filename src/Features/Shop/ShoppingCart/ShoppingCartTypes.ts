import { CommonTypes } from "../../Common/CommonTypes";

export type ShoppingCartTypes = {
  handleAddToCartIncrement: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
    product: CommonTypes["product"]
  ) => void;
  handleNavigateProduct: (prod: CommonTypes["product"], index: number) => void;
  products: Array<{
    _id: string;
    name: string;
    category: string;
    details: string;
    price: number;
    imageInfo: Array<object>;
    quantiity?: number;
  }>;
};
