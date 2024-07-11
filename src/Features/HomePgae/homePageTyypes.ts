import { IEventData, allVideos } from "../context/GlobalDataContextTypes";

export interface homePageTypes {
  aboutUsData: {
    content: string | null;
  };
  eventData: IEventData;
  testimonialData: {
    about: string;
    achievement: string;
    name: string;
    updatedAt: string;
    _id: string;
  }[];
  handleNavigateEventCard: (_id: string) => void;
  handleNavigateVideoCard: (_id: string) => void;
  allVideos: allVideos;
  goToPreviousTestimonial: () => void;
  goToNextTestimonial: () => void;
  currentIndex: number;
}
