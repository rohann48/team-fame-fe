import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const AdminRoute = ({ children }: any) => {
  const { userInfo, isLoadingUserInfo } = useContext(LoginContext);

  // Show loading spinner while user info is being fetched
  if (isLoadingUserInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        <span className="ml-4">Loading...</span>
      </div>
    );
  }

  // Check if user is admin after loading is complete
  const isAdmin = userInfo?.role === "admin";

  return isAdmin ? children : <Navigate to="/" replace />;
};

export default AdminRoute;
