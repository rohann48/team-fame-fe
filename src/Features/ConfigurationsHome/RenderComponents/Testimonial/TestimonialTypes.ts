import { ChangeEvent } from "react";

export type TestimonialContainerProps = {
  testimonialDetails: {
    name: string;
    about: string;
    achievement: string;
  };
  testiMonials: {
    about: string;
    achievement: string;
    createdAt: string;
    imageInfo: {
      name: string;
      Key: string;
      path: string;
      date: string;
      _id: string;
    }[];
    name: string;
    updatedAt: string;
    _id: string;
  }[];
};

export type TestimonialComponentProps = {
  handleChangeInputs: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string
  ) => void;
  testimonialForms: TestimonialContainerProps["testimonialDetails"];
  handleSave: () => void;
  testiMonials: {
    about: string;
    achievement: string;
    createdAt: string;
    imageInfo: {
      name: string;
      Key: string;
      path: string;
      date: string;
      _id: string;
    }[];
    name: string;
    updatedAt: string;
    _id: string;
  }[];
  handleChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
  uploadedFile: File[];
  handleCancel: () => void;
  confirmDeleteTestimonial: (
    docId: string,
    fileKey: string,
    index: number
  ) => JSX.Element;
};

export type EventData = {
  title: string;
  date: string;
  time: string;
  location: string;
};

export type Testimonial = {
  _id: string;
  name: string;
  about: string;
  achievement: string;
  imageUrl?: string;
};

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  results: T;
};

export type TestimonialApiHandlers = {
  postTestimonial: (formData: FormData) => Promise<ApiResponse<Testimonial>>;
};

export type GlobalDataContextType = {
  eventData: EventData[];
};

export type LoginContextType = {
  userInfo: {
    _id: string;
  };
};
