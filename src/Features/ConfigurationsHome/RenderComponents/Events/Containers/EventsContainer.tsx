import React, { useContext, useState } from "react";
import Events from "../Components/Events";
import { EventContainerProps } from "../EventsTypes";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../../Common/Notify/NotificationMessages";
import { GlobalDataContext } from "../../../../context/GlobalDataContext";

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
  const { eventData } = useContext(GlobalDataContext);
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
    let modifiedData = {
      name: eventForms.eventName,
      title: eventForms.title,
      date: eventForms.date,
      time: eventForms.time,
      location: eventForms.location,
      description: eventForms.description,
      status: "completed",
      ...(eventForms.image && { image: eventForms.image }),
    };
    try {
      const response = await ApiHandler.postEvents(modifiedData);
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
      eventData={eventData}
    />
  );
}

export default EventsContainer;
