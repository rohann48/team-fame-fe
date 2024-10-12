import React, { useContext, useEffect, useState } from "react";
import OrderDetails from "../Components/OrderDetails";
import { LoginContext } from "../../../../context/LoginContext";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { OrderDetailsTypes } from "../OrderDetailsTypes";
import { useImmer } from "use-immer";

function OrderDetailsContainer() {
  const [schemeDetails, setSchemeDetails] = useImmer<
    OrderDetailsTypes["schemeDetails"]
  >([]);
  const { userInfo } = useContext(LoginContext);

  useEffect(() => {
    // Fetch all order details
    const fetchOrderLists = async () => {
      const response = await ApiHandler.getOrderLists();
      setSchemeDetails(response.results);
    };
    if (userInfo._id) {
      fetchOrderLists();
    }
  }, [userInfo._id]);
  return <OrderDetails schemeDetails={schemeDetails} />;
}

export default OrderDetailsContainer;
