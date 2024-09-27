import AboutUs from "./RenderComponents/AboutUs";
import Events from "./RenderComponents/Events";
import Testimonial from "./RenderComponents/Testimonial";
import Shop from "./RenderComponents/Shop";
import AdminVideos from "./RenderComponents/AdminVideos";
import AdminGoldScheme from "./RenderComponents/AdminGoldScheme";

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
    path: "/gold-scheme",
    element: <AdminGoldScheme />,
  },
  // {
  //   path: "/videos",
  //   element: <AdminVideos />,
  // },
  {
    path: "/shop",
    element: <Shop />,
  },
];
