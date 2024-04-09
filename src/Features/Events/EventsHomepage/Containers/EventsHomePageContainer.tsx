import React from "react";
import EventsHomePage from "../Components/EventsHomePage";
import { useRoutes } from "react-router-dom";
import { eventRoutes } from "../../routes";

function EventsHomePageContainer() {
  const renderRoutes = useRoutes(eventRoutes);
  return <EventsHomePage renderRoutes={renderRoutes} />;
}

export default EventsHomePageContainer;
