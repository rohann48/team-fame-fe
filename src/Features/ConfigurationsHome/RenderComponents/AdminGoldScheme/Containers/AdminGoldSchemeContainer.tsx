import React, { useContext, useEffect, useState } from "react";
import AdminGoldScheme from "../Components/AdminGoldScheme";
import { LoginContext } from "../../../../context/LoginContext";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { AdminGoldSchemeTypes } from "../AdminGoldSchemeTypes";
import { useImmer } from "use-immer";

function AdminGoldSchemeContainer() {
  const [schemeDetails, setSchemeDetails] = useImmer<
    AdminGoldSchemeTypes["schemeDetails"]
  >([]);
  const { userInfo } = useContext(LoginContext);

  useEffect(() => {
    // Fetch client details using the client ID
    const fetchClientDetails = async () => {
      const response = await ApiHandler.getSchemeDetails(userInfo._id);
      setSchemeDetails(response.results);
    };
    if (userInfo._id) {
      fetchClientDetails();
    }
  }, [userInfo._id]);
  return <AdminGoldScheme schemeDetails={schemeDetails} />;
}

export default AdminGoldSchemeContainer;
