import { CommonTypes } from "../../Common/CommonTypes";

export type ShoppingCartTypes = {
  handleAddToCartIncrement: (
    index: number,
    product: CommonTypes["product"]
  ) => void;
  handleNavigateProduct: (prod: CommonTypes["product"]) => void;
  products: Array<{
    _id: string;
    name: string;
    category: string;
    details: string;
    price: number;
    imageInfo: Array<object>;
    quantiity?: number;
    offers: { cashback: number };
  }>;
  categoryData: Array<string>;
  onSelectChange(category: string): void;
  userInfo?: {
    _id: string;
    name: string;
    role?: string;
    lastName: string;
    emailId: string;
    contactNo: string;
    password: "";
    confirmPassword: "";
    goldSchemeId: string;
    membership: boolean;
  };
  selectedCategory: string;
  // filterVal: string;
};
