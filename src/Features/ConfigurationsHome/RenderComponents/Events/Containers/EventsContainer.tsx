import React, { useState } from "react";
import Events from "../Components/Events";
import { EventContainerProps } from "../EventsTypes";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../../Common/Notify/NotificationMessages";

let initialState = {
  eventName: "",
  title: "",
  date: "",
  time: "",
  location: "",
  description: "",
  image: "",
};
function EventsContainer() {
  const [eventForms, setEventForms] = useState<
    EventContainerProps["eventForms"]
  >({ ...initialState });

  //handle change form inputs
  const handleChangeInputs = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    type: string
  ) => {
    const { value } = e.target;
    setEventForms((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  //save
  const handleSave = async () => {
    let modifiedData1 = {
      name: eventForms.eventName,
      details: eventForms.description,
      status: "completed",
      image: "",
    };
    let modifiedData = {
      eventName: "",
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      image: "",
    };
    try {
      const response = await ApiHandler.postEvents(modifiedData);
      console.log(response.results);
      NotificationManager.success(Notify.ADD, "", 2000);
    } catch (err) {
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
  };

  return (
    <Events
      handleChangeInputs={handleChangeInputs}
      eventForms={eventForms}
      handleSave={handleSave}
    />
  );
}

export default EventsContainer;
