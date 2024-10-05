const confirmParameters = ({
  titleImage,
  titleName,
  description,
  buttonText,
  onClickFunction,
  buttonClassName,
}: {
  titleImage: string;
  titleName: string;
  description: string;
  buttonText: string;
  onClickFunction: () => void;
  buttonClassName: string;
}) => {
  return {
    title: {
      images: titleImage,
      titleName: titleName,
    },
    descriptions: {
      first: description,
    },
    buttons: {
      Yes: buttonText,
    },
    onClick: onClickFunction,
    buttonClassName: {
      yes: buttonClassName,
    },
    enableOnClose: false,
  };
};

export default confirmParameters;
