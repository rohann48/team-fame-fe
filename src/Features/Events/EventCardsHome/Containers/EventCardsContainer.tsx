import React, { useContext } from "react";
import EventCardsHome from "../Components/EventCardsHome";
import { GlobalDataContext } from "../../../context/GlobalDataContext";
import { useNavigate } from "react-router-dom";

function EventCardsContainer() {
  const { eventData } = useContext(GlobalDataContext);
  const navigate = useNavigate();

  console.log("eventData", eventData);

  //navigate event cards into card
  const handleEvnetNavigate = () => {
    navigate(`/events-and-news/details/${1}`);
  };
  return (
    <EventCardsHome
      eventData={eventData}
      handleEvnetNavigate={handleEvnetNavigate}
    />
  );
}

export default EventCardsContainer;
