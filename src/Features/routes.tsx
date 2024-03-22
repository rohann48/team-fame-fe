import PageNotFound from "./PageNotFound";
import Login from "./Login";
import HomePage from "./HomePgae";
import Configuration from "./ConfigurationsHome/Configurations";
import Scheme from "./Scheme";
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
    path: "/config/*",
    element: <Configuration />,
  },
  {
    path: "/scheme",
    element: <Scheme />,
  },
];
