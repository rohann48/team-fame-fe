import { CommonTypes } from "../../Common/CommonTypes";

export type ShoppingCartTypes = {
  handleAddToCartIncrement: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
    product: CommonTypes["product"]
  ) => void;
  handleNavigateProduct: () => void;
};
