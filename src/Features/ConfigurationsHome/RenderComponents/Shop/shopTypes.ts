export type ShopContainerProps = {
  productDetails: {
    name: string;
    category: string;
    details: string;
    imageURI?: string;
    price: string;
    cashback: string;
  };
  products: Array<{
    _id: string;
    category: string;
    name: string;
    details: string;
    price: number;
    offers: { cashback: string };
    imageInfo: Array<{
      name: string;
      Key: string;
      path: string;
      date: string;
      _id: string;
    }>;
  }>;
};
export type ShopComponentProps = {
  handleChangeInputs: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    type: string
  ) => void;
} & {
  productDetails: ShopContainerProps["productDetails"];
  handleSave: () => void;
  eventData: Array<object>;
  products: Array<{
    _id: string;
    category: string;
    name: string;
    details: string;
    price: number;
    offers: { cashback: string };
    imageInfo: Array<{
      name: string;
      Key: string;
      path: string;
      date: string;
      _id: string;
    }>;
  }>;
  confirmDeleteThreadFile: (
    docId: string,
    fileKey: string,
    index: number
  ) => void;
};
