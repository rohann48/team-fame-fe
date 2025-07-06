import React, { useContext, useEffect } from "react";
import EventDetails from "../Components/EventDetails";
import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { EventsDetailsContainerTypes } from "../EventsDetailsTypes";
import { LoginContext } from "../../../context/LoginContext";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../Common/Notify/NotificationMessages";

function EventDetailsContainer() {
  const { id } = useParams() as { id: string | null };
  const { userInfo } = useContext(LoginContext);
  //state maintained for event and news info
  const [eventAndNewsDetails, setEventsAndNewsDetails] = useImmer(
    {} as EventsDetailsContainerTypes["eventAndNewsDetails"]
  );
  //get events and news
  useEffect(() => {
    const fetchEventsAndNews = async () => {
      const response = await ApiHandler.getEventAndNewsDetails(id);
      setEventsAndNewsDetails({ ...response.results });
    };
    if (id) {
      fetchEventsAndNews();
    }
  }, [id]);
  const handleRegsiterEvent = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    try {
      const response = await ApiHandler.registerEvent(id, userInfo?._id);
      NotificationManager.success(`Event ${Notify.ADD}`, "", 2000);
      console.log(response);
    } catch (err: any) {
      console.log(err);
      NotificationManager.warning(
        err?.response?.data?.error?.error?.error || Notify.DEFAULT,
        "",
        2000
      );
    }
  };

  return (
    <EventDetails
      eventAndNewsDetails={eventAndNewsDetails}
      handleRegsiterEvent={handleRegsiterEvent}
    />
  );
}

export default EventDetailsContainer;
