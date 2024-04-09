import React from "react";
import { EventsHomePageTypes } from "../EventsHomePageTypes";

function EventsHomePage({ renderRoutes }: Readonly<EventsHomePageTypes>) {
  return <>{renderRoutes}</>;
}

export default EventsHomePage;
