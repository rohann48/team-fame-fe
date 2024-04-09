import EventCardsHome from "./EventCardsHome";
import EventDetails from "./EventDetails";

export const eventRoutes = [
  {
    index: true,
    element: <EventCardsHome />,
  },
  {
    path: "/events-and-news/*",
    element: <EventDetails />,
  },
];
