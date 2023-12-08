export type ConfirmAlerHometTypes = {
  confirmParameters: {
    title: {
      images: any;
      titleName: string;
    };
    descriptions: {
      first: string;
      second: string;
      third: string;
    };
    note: string;
    buttons: {
      Yes: string;
      No: string;
    };
    onClick: () => void;
    buttonClassName: {
      yes: string;
      no: string;
    };
    isMobile?: boolean;
    enableOnClose: boolean;
    enableDescription?: boolean;
  };
};
