import { IEventData } from "../context/GlobalDataContextTypes";

export interface homePageTypes {
  aboutUsData: {
    content: string | null;
  };
  eventData: IEventData;
  testimonialLoop: Array<object>;
  handleNavigateEventCard: (_id: string) => void;
}
