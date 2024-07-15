import { ShoppingContextInitialState } from "../context/ShopContext/ShopContextTypes";

export type AddressTypes = {
  refferalCodeCheck: () => void;
  handleChange: (code: string) => void;
  handleFormDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: () => Promise<void>;
  productInfo: ShoppingContextInitialState["productInfo"];
};
export type AddressContainerType = {
  formData: {
    name: string;
    mobile: number;
    pincode: number;
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    amount: number;
    paymentMode: string;
    code?: string;
  };
  error: {
    name: string;
    mobile: string;
    pincode: string;
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    amount: string;
    paymentMode: string;
    code?: string;
  };
};
