import PageNotFound from "./PageNotFound";
import Login from "./Login";
import HomePage from "./HomePgae";
import Configuration from "./ConfigurationsHome/Configurations";
import SchemeHomePage from "./Scheme/SchemeHomePage";
import ShopHomePage from "./Shop/ShopHomePage";
import ShopContextProvider from "./context/ShopContext/ShopContext";
import EventsHomePage from "./Events/EventsHomepage";
import VideoHomePage from "./Videos/VideosHomePage";
export const mainRoutes = [
  {
    path: "*",
    element: <PageNotFound />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/forgot/password",
  //   element: <Login />,
  // },
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/events-and-news/*",
    element: <EventsHomePage />,
  },
  {
    path: "/videos/*",
    element: <VideoHomePage />,
  },
  {
    path: "/shop/*",
    element: <ShopHomePage />,
  },
  {
    path: "/scheme/*",
    element: <SchemeHomePage />,
  },
  {
    path: "/config/*",
    element: <Configuration />,
  },
];
