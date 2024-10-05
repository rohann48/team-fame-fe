export type ConfirmAlertHomeTypes = {
  confirmParameters: {
    title: {
      images: any;
      titleName: string;
    };
    descriptions: {
      first?: string;
      second?: string;
      third?: string;
    };
    note?: string;
    buttons: {
      Yes: string;
      No?: string;
      YesWithoutSave?: string;
      other?: string;
    };
    onClickWithoutSave?: () => void;
    onClickForNoButton?: () => void;
    onClick: () => void;
    buttonClassName: {
      yes: string;
      no?: string;
      other?: string;
    };
    isMobile?: boolean;
    enableOnClose?: boolean;
    closeOnClickOutside?: boolean;
    enableDescription?: boolean;
    isNotify?: boolean;
    isReview?: boolean;
  };
};
