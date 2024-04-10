import { IEventData } from "../../context/GlobalDataContextTypes";

export type EventsDetailsTypes = {
  eventAndNewsDetails: {
    createdAt: string;
    date: string;
    description: string;
    id: string;
    location: string;
    name: string;
    status: string;
    time: string;
    title: string;
    updatedAt: string;
    _id: string;
  };
};
export type EventsDetailsContainerTypes = {
  eventAndNewsDetails: EventsDetailsTypes["eventAndNewsDetails"];
};
