import React, { useEffect } from "react";
import SchemeUserPage from "../Components/SchemeUserPage";
import { useParams } from "react-router-dom";
import { ApiHandler } from "../../constants/ApiHandler";

function SchemeUserPageContainer() {
  const { userId } = useParams() as { userId: string | null };
  useEffect(() => {
    const fetchUserInfo = async () => {
      // Fetch user info from API using userId
      const response = await ApiHandler.fetchUserInfo(userId);
      console.log(response);
    };
    fetchUserInfo();
  }, [userId]);

  return <SchemeUserPage />;
}

export default SchemeUserPageContainer;
