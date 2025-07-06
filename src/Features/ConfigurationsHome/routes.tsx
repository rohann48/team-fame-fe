import AboutUs from "./RenderComponents/AboutUs";
import Events from "./RenderComponents/Events";
import Testimonial from "./RenderComponents/Testimonial";
import Shop from "./RenderComponents/Shop";
import AdminVideos from "./RenderComponents/AdminVideos";
import AdminGoldScheme from "./RenderComponents/AdminGoldScheme";
import OrderDetails from "./RenderComponents/OrderDetails";
import ClientsInfo from "./RenderComponents/ClientsInfo";
import AdminRoute from "../Common/ProtectedRoutes/admin";
import EventRegistration from "./RenderComponents/EventRegistration";

interface MainRoutesProps {
  isUserAdmin: boolean;
}

export const configRoutes = ({ isUserAdmin }: MainRoutesProps) => [
  {
    path: "/about-us",
    element: (
      <AdminRoute>
        <AboutUs />
      </AdminRoute>
    ),
  },
  {
    path: "/events",
    element: (
      <AdminRoute>
        <Events />
      </AdminRoute>
    ),
  },
  {
    path: "/testimonial",
    element: (
      <AdminRoute>
        <Testimonial />
      </AdminRoute>
    ),
  },
  {
    path: "/gold-scheme",
    element: (
      <AdminRoute>
        <AdminGoldScheme />
      </AdminRoute>
    ),
  },
  {
    path: "/shop",
    element: (
      <AdminRoute>
        <Shop />
      </AdminRoute>
    ),
  },
  {
    path: "/order-details",
    element: (
      <AdminRoute>
        <OrderDetails />
      </AdminRoute>
    ),
  },
  {
    path: "/order-details/:userId",
    element: (
      <AdminRoute>
        <OrderDetails />
      </AdminRoute>
    ),
  },
  {
    path: "/clients-info",
    element: (
      <AdminRoute>
        <ClientsInfo />
      </AdminRoute>
    ),
  },
  {
    path: "/event-registration",
    element: (
      <AdminRoute>
        <EventRegistration />
      </AdminRoute>
    ),
  },
];
