import React, { useContext } from "react";
import EventCardsHome from "../Components/EventCardsHome";
import { GlobalDataContext } from "../../../context/GlobalDataContext";
import { useNavigate } from "react-router-dom";

function EventCardsContainer() {
  const { eventData, setEventData } = useContext(GlobalDataContext);
  const navigate = useNavigate();

  //navigate event cards into card
  const handleEventNavigate = (_id: string) => {
    navigate(`/events-and-news/details/${_id}`);
  };
  return (
    <EventCardsHome
      eventData={eventData}
      handleEventNavigate={handleEventNavigate}
    />
  );
}

export default EventCardsContainer;
