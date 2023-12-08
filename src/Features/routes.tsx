import PageNotFound from "./PageNotFound";
import Login from "./Login";
export const mainRoutes = [
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/login",
    element: <Login isLogin={true} />,
  },
  {
    path: "/forgot/password",
    element: <Login isForgotPassword={true} />,
  },
];
