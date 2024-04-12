import { CommonTypes } from "../Common/CommonTypes";

export type CartTypes = {
  handleBackButton: () => void;
  productInfo: CommonTypes["productInfo"];
  handleNavigateShopPage: () => void;
  handleRemoveCart: (index: number) => void;
  handleIncrementProduct: (index: number) => void;
  handleDecrementProduct: (index: number) => void;
};
