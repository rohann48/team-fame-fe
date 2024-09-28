export type EventData = {
  _id: string;
  name: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: string;
  imageInfo: {
    name: string;
    Key: string;
    path: string;
    date: string;
    _id: string;
  }[];
};

export type EventContainerProps = {
  eventForms: {
    name: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
  };
  events: EventData[];
};

export type EventComponentProps = {
  handleChangeInputs: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string
  ) => void;
  handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
  handleCancel: () => void;
  eventForms: EventContainerProps["eventForms"];
  events: EventData[];
  uploadedFile: File[];
  confirmDeleteEvent: (eventId: string, fileKey: string, index: number) => void;
};
