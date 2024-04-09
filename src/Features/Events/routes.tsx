import EventCardsHome from "./EventCardsHome";
import EventDetails from "./EventDetails";

export const eventRoutes = [
  {
    index: true,
    element: <EventCardsHome />,
  },
  {
    path: "/details/:id",
    element: <EventDetails />,
  },
];
