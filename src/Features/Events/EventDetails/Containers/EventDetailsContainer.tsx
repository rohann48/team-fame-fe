import React, { useEffect } from "react";
import EventDetails from "../Components/EventDetails";
import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { EventsDetailsContainerTypes } from "../EventsDetailsTypes";

function EventDetailsContainer() {
  const { id } = useParams() as { id: string | null };
  //state maintained for event and news info
  const [eventAndNewsDetails, setEventsAndNewsDetails] = useImmer(
    {} as EventsDetailsContainerTypes["eventAndNewsDetails"]
  );
  //get events and news
  useEffect(() => {
    const fetchEventsAndNews = async () => {
      const response = await ApiHandler.getEventAndNewsDetails(id);
      console.log(response);
      // setEventsAndNewsDetails({ ...response.results });
    };
    if (id) {
      fetchEventsAndNews();
    }
  }, [id]);

  return <EventDetails eventAndNewsDetails={eventAndNewsDetails} />;
}

export default EventDetailsContainer;
