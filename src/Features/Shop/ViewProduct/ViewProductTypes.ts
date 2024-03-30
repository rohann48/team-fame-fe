import { CommonTypes } from "../../Common/CommonTypes";

export type ViewProductTypes = {
  productInfo: CommonTypes["productInfo"];
  handleIncrementProduct: CommonTypes["handleIncrementProduct"];
  handleDecrementProduct: CommonTypes["handleDecrementProduct"];
  handleBackButton: CommonTypes["handleBackButton"];
  handleAddToCart: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  viewedProduct: CommonTypes["product"];
};
