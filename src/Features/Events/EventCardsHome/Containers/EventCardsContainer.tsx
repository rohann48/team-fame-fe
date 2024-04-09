import React, { useContext } from "react";
import EventCardsHome from "../Components/EventCardsHome";
import { GlobalDataContext } from "../../../context/GlobalDataContext";

function EventCardsContainer() {
  const { eventData } = useContext(GlobalDataContext);
  console.log(eventData);

  return <EventCardsHome eventData={eventData} />;
}

export default EventCardsContainer;
