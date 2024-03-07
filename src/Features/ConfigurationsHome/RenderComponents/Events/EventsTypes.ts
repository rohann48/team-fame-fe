export type EventContainerProps = {
  eventForms: {
    eventName: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
  };
};
export type EventComponentProps = {
  handleChangeInputs: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    type: string
  ) => void;
} & {
  eventForms: EventContainerProps["eventForms"];
  handleSave: () => void;
};
