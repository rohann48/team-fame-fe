import PageNotFound from "./PageNotFound";
import Login from "./Login";
import HomePage from "./HomePgae";
import Configuration from "./Configurations";
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
];
