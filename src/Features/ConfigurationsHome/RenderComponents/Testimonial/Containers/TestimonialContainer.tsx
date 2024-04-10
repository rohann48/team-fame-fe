import React, { useContext, useState } from "react";
import Testimonial from "../Components/Testimonial";
import { TestimonialContainerProps } from "../TestimonialTypes";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../../Common/Notify/NotificationMessages";
import { GlobalDataContext } from "../../../../context/GlobalDataContext";

let initialState = {
  name: "",
  about: "",
  achievement: "",
  image: "",
};
function TestimonialContainer() {
  const { eventData } = useContext(GlobalDataContext);
  const [testimonialForms, setTestimonialForms] = useState<
    TestimonialContainerProps["testimonialForms"]
  >({ ...initialState });

  //handle change form inputs
  const handleChangeInputs = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    type: string
  ) => {
    const { value } = e.target;
    setTestimonialForms((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  //save
  const handleSave = async () => {
    let modifiedData = {
      name: testimonialForms.name,
      about: testimonialForms.about,
      achievement: testimonialForms.achievement,
      ...(testimonialForms.image && { image: testimonialForms.image }),
    };
    try {
      const response = await ApiHandler.postTestimonial(modifiedData);
      NotificationManager.success(Notify.ADD, "", 2000);
    } catch (err) {
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
  };

  return (
    <Testimonial
      handleChangeInputs={handleChangeInputs}
      testimonialForms={testimonialForms}
      handleSave={handleSave}
      eventData={eventData}
    />
  );
}

export default TestimonialContainer;
