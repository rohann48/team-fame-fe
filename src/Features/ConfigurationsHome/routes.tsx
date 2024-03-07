import AboutUs from "./RenderComponents/AboutUs";
import Events from "./RenderComponents/Events";

export const configRoutes = [
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/events",
    element: <Events />,
  },
];
