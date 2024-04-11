import { Updater } from "use-immer";

export interface IAboutUs {
  content: string | null;
}
export type IEventData = {
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
}[];
export type IVideoInfo = {
  Key: string;
  date: string;
  name: string;
  path: string;
};
export type IVideo = {
  createdAt: string;
  description: string;
  id: string;
  title: string;
  updatedAt: string;
  videoInfo: IVideoInfo[];
  _id: string;
  __v: number;
};
export type allVideos = {
  createdAt: string;
  description: string;
  id: string;
  title: string;
  updatedAt: string;
  videoInfo: IVideoInfo[];
  _id: string;
  __v: number;
}[];

export type ITestimonialData = Array<object>;
type setAboutUsData = React.Dispatch<React.SetStateAction<IAboutUs>>;
type setEventData = React.Dispatch<React.SetStateAction<IEventData>>;
type setTestimonialData = React.Dispatch<
  React.SetStateAction<ITestimonialData>
>;

export interface GlobalDataContextTypes {
  aboutUsData: IAboutUs;
  setAboutUsData: setAboutUsData;
  eventData: IEventData;
  setEventData: setEventData;
  testimonialData: ITestimonialData;
  setTestimonialData: setTestimonialData;
  allVideos: allVideos;
  setAllVideos: Updater<allVideos>;
}
