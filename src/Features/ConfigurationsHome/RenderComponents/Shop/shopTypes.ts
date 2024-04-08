export type ShopContainerProps = {
  productDetails: {
    name: string;
    category: string;
    details: string;
    imageURI?: string;
    price: string;
  };
  products: Array<object>;
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
  products: Array<object>;
};
