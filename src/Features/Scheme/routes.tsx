import SchemeUserPage from "./SchemeUserPage";
import SchemeJoinPage from "./SchemeJoinPage";

export const schemeRoutes = [
  {
    index: true,
    element: <SchemeJoinPage />,
  },
  {
    path: "/users/:userId",
    element: <SchemeUserPage />,
  },
];
