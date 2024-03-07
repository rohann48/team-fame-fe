export type aboutUsType = {
  aboutUsData: {
    content: string | null;
  };
  postAboutData: () => void;
  handleOnChange: (data: string) => void;
};
