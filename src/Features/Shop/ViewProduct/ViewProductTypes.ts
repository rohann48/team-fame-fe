import { CommonTypes } from "../../Common/CommonTypes";

export type ViewProductTypes = {
  countInfo: CommonTypes["countInfo"];
  handleIncrementProduct: CommonTypes["handleIncrementProduct"];
  handleDecrementProduct: CommonTypes["handleDecrementProduct"];
  handleBackButton: CommonTypes["handleBackButton"];
  handleAddToCart: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};
