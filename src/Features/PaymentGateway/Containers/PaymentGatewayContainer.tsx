import axios from "axios";
import { useState } from "react";
import PaymentGateway from "../Components/paymentGateway";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../Common/Notify/NotificationMessages";
import { ApiHandler } from "../../Constants/ApiHandler";

function PaymentGatewayContainer({
  paymentModel,
  userInfo,
  amount,
  selectedMonth,
  schemeUserData,
  setSchemeUserData,
}: any) {
  const [errorLog, setErrorLog] = useState(false);
  const postInvestment = async () => {
    if (Number(selectedMonth) !== 0 && amount !== null) {
      try {
        setErrorLog(false);
        const modifiedData = {
          clientId: userInfo._id,
          year: schemeUserData.period,
          month: Number(selectedMonth),
          date: new Date(),
          amount: amount,
        };
        const response = await ApiHandler.postInvestment(
          userInfo.goldSchemeId,
          modifiedData
        );
        setSchemeUserData(response.results);
        NotificationManager.success(Notify.ADD, "", 2000);
      } catch (err) {}
    } else {
      setErrorLog(true);
      NotificationManager.warning("Please fill all the fields", "", 2000);
    }
  };
  // const [displayRazorpay, setDisplayRazorpay] = useState(false);
  // const [orderDetails, setOrderDetails] = useState({
  //   orderId: null,
  //   currency: null,
  //   amount: null,
  // });
  // let serverBaseUrl = "http://localhost:9001/";
  // const handleCreateOrder = async (amount: number, currency: string) => {
  //   const data: any = await axios.post(serverBaseUrl + "/order", {
  //     amount: amount * 100, //convert amount into lowest unit. here, Dollar->Cents
  //     currency,
  //     keyId: process.env.REACT_APP_RAZORPAY_KEY_ID,
  //     KeySecret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
  //   });

  //   if (data && data.order_id) {
  //     setOrderDetails({
  //       orderId: data.order_id,
  //       currency: data.currency,
  //       amount: data.amount,
  //     });
  //     setDisplayRazorpay(true);
  //   }

  return (
    <PaymentGateway
      paymentModel={paymentModel}
      userInfo={userInfo}
      amount={amount}
      errorLog={errorLog}
      postInvestment={postInvestment}
      // orderDetails={orderDetails}
    />
  );
  // };
}
export default PaymentGatewayContainer;
