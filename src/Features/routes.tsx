import PageNotFound from "./PageNotFound";
import Login from "./Login";
import HomePage from "./HomePgae";
import Configuration from "./ConfigurationsHome/Configurations";
import SchemeHomePage from "./Scheme/SchemeHomePage";
import ShopHomePage from "./Shop/ShopHomePage";
import ShopContextProvider from "./context/ShopContext/ShopContext";
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
    path: "/shop/*",
    element: (
      <ShopContextProvider>
        <ShopHomePage />
      </ShopContextProvider>
    ),
  },
  {
    path: "/config/*",
    element: <Configuration />,
  },
  {
    path: "/scheme/*",
    element: <SchemeHomePage />,
  },
];
