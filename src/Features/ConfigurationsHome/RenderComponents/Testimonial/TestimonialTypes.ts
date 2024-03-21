export type TestimonialContainerProps = {
  testimonialForms: {
    name: string;
    about: string;
    achievement: string;
    image?: string;
  };
};
export type TestimonialComponentProps = {
  handleChangeInputs: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    type: string
  ) => void;
} & {
  testimonialForms: TestimonialContainerProps["testimonialForms"];
  handleSave: () => void;
  eventData: Array<object>;
};
