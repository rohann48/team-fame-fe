export interface IAboutUs {
  content: string | null;
}
export type IEventData = Array<object>;
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
}
