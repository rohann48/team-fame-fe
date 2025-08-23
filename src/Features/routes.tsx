// import PageNotFound from "./PageNotFound";
// import HomePage from "./HomePgae";
// import Configuration from "./ConfigurationsHome/Configurations";
// import SchemeHomePage from "./Scheme/SchemeHomePage";
// import ShopHomePage from "./Shop/ShopHomePage";
// import EventsHomePage from "./Events/EventsHomepage";
// import VideoHomePage from "./Videos/VideosHomePage";
// import Cart from "./Cart";
// import Address from "./Address";
// import OrderedSuccessfully from "./OrderedSuccessfully";

import { lazy } from "react";

// Lazy imports
const PageNotFound = lazy(() => import("./PageNotFound"));
const HomePage = lazy(() => import("./HomePgae"));
const Configuration = lazy(() => import("./ConfigurationsHome/Configurations"));
const SchemeHomePage = lazy(() => import("./Scheme/SchemeHomePage"));
const ShopHomePage = lazy(() => import("./Shop/ShopHomePage"));
const EventsHomePage = lazy(() => import("./Events/EventsHomepage"));
const VideoHomePage = lazy(() => import("./Videos/VideosHomePage"));
const Cart = lazy(() => import("./Cart"));
const Address = lazy(() => import("./Address"));
const OrderedSuccessfully = lazy(() => import("./OrderedSuccessfully"));

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
    path: "/cart/*",
    element: <Cart />,
  },
  { path: "cart/address/*", element: <Address /> },
  { path: "/address/:id", element: <Address /> },
  {
    path: "/thankyou",
    element: <OrderedSuccessfully />,
  },
  {
    path: "/config/*",
    element: <Configuration />,
  },
];
