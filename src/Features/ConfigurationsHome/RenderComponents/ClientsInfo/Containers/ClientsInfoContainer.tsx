import React, { useContext, useEffect, useState } from "react";
import ClientsInfo from "../Components/ClientsInfo";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { LoginContext } from "../../../../context/LoginContext";

function ClientsInfoContainer() {
  const [clientDetails, setClientDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userInfo } = useContext(LoginContext);

  useEffect(() => {
    const fetchClientDetails = async () => {
      setLoading(true);
      try {
        const response = await ApiHandler.getClientDetails();
        setClientDetails(response.results);
      } catch (error) {
        console.error("Error fetching client details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userInfo?._id) {
      fetchClientDetails();
    }
  }, [userInfo?._id]);

  console.log("Client Details:", clientDetails);

  return (
    <ClientsInfo
      clientDetails={clientDetails}
      currentUserId={userInfo?._id}
      loading={loading}
    />
  );
}

export default ClientsInfoContainer;
