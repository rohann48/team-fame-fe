import React, { useContext, useEffect, useState } from "react";
import OrderDetails from "../Components/OrderDetails";
import { LoginContext } from "../../../../context/LoginContext";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { OrderDetailsTypes } from "../OrderDetailsTypes";
import { useImmer } from "use-immer";
import images from "../../../../ImageVariables";
import ConfirmAlertHome from "../../../../Common/CommonComponent/ConfirmAlert/Component/ConfirmAlertHome";
import { NotificationManager } from "react-notifications";
import { useParams } from "react-router-dom";

function OrderDetailsContainer() {
  const [schemeDetails, setSchemeDetails] = useImmer<
    OrderDetailsTypes["schemeDetails"]
  >([]);
  const { userInfo } = useContext(LoginContext);
  const { userId } = useParams();
  useEffect(() => {
    // Fetch all order details
    const fetchOrderLists = async () => {
      const response = await ApiHandler.getOrderLists(userId);
      setSchemeDetails(response.results);
    };
    if (userInfo._id) {
      fetchOrderLists();
    }
  }, [userInfo._id]);

  const confirmDeleteEvent = (
    val: string,
    orderId: string
    // index: number
  ) => {
    const confirmParameters = {
      title: {
        images: images.confirmAlert,
        titleName: "STATUS CONFIRM",
      },
      descriptions: {
        first: `Are you sure you want to update the status?`,
        second: "",
      },
      buttons: {
        Yes: "Confirm",
        No: "Cancel",
      },
      onClick: () => {
        onChangeOrderStatus(val, orderId);
      },
      buttonClassName: {
        yes: "button-delete-yes",
        no: "button-delete-no",
      },
    };
    return ConfirmAlertHome({ confirmParameters });
  };

  const onChangeOrderStatus = async (val: string, orderId: string) => {
    try {
      const response = await ApiHandler.updateOrderStatus(orderId, val);
      if (response.status) {
        const updatedSchemeDetails = schemeDetails.map((item) => {
          if (item._id === orderId) {
            return { ...item, status: val };
          }
          return item;
        });
        setSchemeDetails(updatedSchemeDetails);
        NotificationManager.success("status updated successfully", "", 2000);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <OrderDetails
      schemeDetails={schemeDetails}
      confirmDeleteEvent={confirmDeleteEvent}
      userInfo={userInfo}
    />
  );
}

export default OrderDetailsContainer;
