import React, { useContext, useEffect, useState } from "react";
import SchemeUserPage from "../Components/SchemeUserPage";
import { useParams } from "react-router-dom";
import { ApiHandler } from "../../constants/ApiHandler";
import { SchemeUserPageTypes } from "../SchemeUserPageTypes";
import { LoginContext } from "../../../context/LoginContext";

function SchemeUserPageContainer() {
  const { userId } = useParams() as { userId: string | null };
  const { userInfo } = useContext(LoginContext);

  const [schemeUserData, setSchemeUserData] = useState(
    {} as SchemeUserPageTypes["schemeUserData"]
  );
  useEffect(() => {
    const fetchUserInfo = async () => {
      // Fetch user info from API using userId
      const response = await ApiHandler.fetchGoldSchemeUserInfo(userId);
      console.log(response);
      setSchemeUserData(response.results);
    };
    if (userId) {
      fetchUserInfo();
    }
  }, [userId]);
  console.log(userInfo, "sdsds");
  const postInvestment = async () => {
    try {
      const modifiedData = {};
      // const response = await ApiHandler.postInvestment(modifiedData);
    } catch (err) {}
  };

  return (
    <SchemeUserPage
      schemeUserData={schemeUserData}
      userInfo={userInfo}
      postInvestment={postInvestment}
    />
  );
}

export default SchemeUserPageContainer;
