import { CommonTypes } from "../Common/CommonTypes";
export type basketType = {
  id: string;
  name: string;
  imageInfo: Array<{ name: String; Key: String; path: String; date: Date }>;
  description: string;
  price: number;
  quantityCount?: number | undefined;
};
export type CartTypes = {
  handleBackButton: () => void;
  productInfo: CommonTypes["productInfo"];
  handleNavigateShopPage: () => void;
  handleRemoveCart: (index: number, prodId: string) => void;
  handleIncrementProduct: (index: number, basket: basketType) => void;
  handleDecrementProduct: (index: number, basket: basketType) => void;
  handleNavigateAddressPage: () => void;
};
