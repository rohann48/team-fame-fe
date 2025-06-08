import { Navigate } from "react-router-dom";

const AdminRoute = ({ children, isLoggedIn, isAdmin }: any) => {
  return isAdmin ? children : <Navigate to="/" />;
};

export default AdminRoute;
