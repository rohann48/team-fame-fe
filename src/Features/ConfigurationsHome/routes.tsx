import AboutUs from "./RenderComponents/AboutUs";
import Events from "./RenderComponents/Events";
import Testimonial from "./RenderComponents/Testimonial";
import Shop from "./RenderComponents/Shop";

export const configRoutes = [
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];
