import { IEventData } from "../../context/GlobalDataContextTypes";

export type EventsCardsHomeTypes = {
  eventData: IEventData;
  handleEventNavigate: (_id: string) => void;
};
