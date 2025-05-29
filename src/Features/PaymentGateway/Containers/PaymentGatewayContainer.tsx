// import axios from "axios";
import { useContext, useState } from "react";
import PaymentGateway from "../Components/paymentGateway";
import { NotificationManager } from "react-notifications";
// import { Notify } from "../../Common/Notify/NotificationMessages";
import { ApiHandler } from "../../Constants/ApiHandler";
import { useRazorpay } from "react-razorpay";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

function PaymentGatewayContainer({
  paymentModel,
  userInfo,
  amount,
  validateForm,
  handleSubmit,
}: any) {
  const navigate = useNavigate();

  const { handleSignUpModalToggle } = useContext(LoginContext);

  const { Razorpay } = useRazorpay();

  const RAZORPAY_KEY_ID = process.env.REACT_APP_RAZORPAY_KEY_ID;
  // const [errorLog, setErrorLog] = useState(false);
  // const postInvestment = async () => {
  //   if (Number(selectedMonth) !== 0 && amount !== null) {
  //     try {
  //       setErrorLog(false);
  //       const modifiedData = {
  //         clientId: userInfo._id,
  //         year: schemeUserData.period,
  //         month: Number(selectedMonth),
  //         date: new Date(),
  //         amount: amount,
  //       };
  // const response = await ApiHandler.postInvestment(
  //   userInfo.goldSchemeId,
  //   modifiedData
  // );
  //       setSchemeUserData(response.results);
  //       NotificationManager.success(Notify.ADD, "", 2000);
  //     } catch (err) {}
  //   } else {
  //     setErrorLog(true);
  //     NotificationManager.warning("Please fill all the fields", "", 2000);
  //   }
  // };
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

  const handlePayment = async (type: string) => {
    try {
      if (!userInfo?._id) {
        return handleSignUpModalToggle();
      }
      const validate = validateForm();
      if (validate) {
        // Make the API call to backend
        // const response = await fetch(
        //   `${process.env.REACT_APP_BASE_URL}create-order`,
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ amount: amount }),
        //   }
        // );
        const data = { amount: amount };
        const order = await ApiHandler.postPaymentDetails(data);
        if (order?.results) {
          // add option for the payment gateway it can be dynamic if you want
          // we can use prop drilling to make it dynamic

          const options: any = {
            key: RAZORPAY_KEY_ID,
            amount: order.results.amount,
            currency: order.results.currency,
            name: "Team Fame", // Add company details
            description: "Payment for your order", // Add order details
            order_id: order.results.id,
            // this is make function which will verify the payment
            // after making the payment
            handler: async (response: any) => {
              try {
                const data = await handleSubmit(order.results.id);
                await fetch(
                  `${process.env.REACT_APP_BASE_URL}tf/payments/verify-payment`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                      razorpay_order_id: response.razorpay_order_id,
                      razorpay_payment_id: response.razorpay_payment_id,
                      razorpay_signature: response.razorpay_signature,
                      amount: order.results.amount,
                      orderType: type,
                      ...(type !== "shop" && { schemeId: data._id }),
                    }),
                  }
                );
                // Add onPaymentSuccessfull function here
                // postInvestment();
                // handleSubmit(response);

                alert("Payment successful!");
                if (type === "shop") {
                  navigate("/thankyou");
                } else window.location.reload();
              } catch (err: any) {
                // Add onPaymentUnSuccessfull function here
                alert("Payment failed: " + err.message);
              }
            },
            config: {
              display: {
                hide: [{ method: "paylater" }, { method: "emi" }],
                blocks: [{ method: "upi" }, { method: "card" }],
                preferences: { show_default_blocks: true },
              },
            },
            prefill: {
              name: userInfo.name, // add customer details
              email: userInfo.emailId, // add customer details
              contact: userInfo?.contactNo, // add customer details
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              // you can change the gateway color from here according to your
              // application theme
              color: "#3399cc",
            },
          };
          const rzpay = new Razorpay(options);
          // this will open razorpay window for take the payment in the frontend
          // under the hood it use inbuild javascript windows api
          rzpay.open();
        }
      }
    } catch (err: any) {
      console.log("err", err);

      NotificationManager.warning(err.message, "", 2000);
      // alert("Error creating payment: " + err.message);
    }
  };

  return (
    <PaymentGateway paymentModel={paymentModel} handlePayment={handlePayment} />
  );
  // };
}
export default PaymentGatewayContainer;
