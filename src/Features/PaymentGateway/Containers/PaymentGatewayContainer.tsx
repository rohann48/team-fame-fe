import axios from "axios";
import { useState } from "react";
import PaymentGateway from "../Components/paymentGateway";

function PaymentGatewayContainer({ userInfo, productInfo }: any) {
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
      userInfo={userInfo}
      productInfo={productInfo}
      // orderDetails={orderDetails}
    />
  );
  // };
}
export default PaymentGatewayContainer;
