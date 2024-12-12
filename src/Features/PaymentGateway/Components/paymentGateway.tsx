import { useRazorpay } from "react-razorpay";
import { NotificationManager } from "react-notifications";

export default function PaymentButton({
  paymentModel,
  userInfo,
  amount,
  errorLog,
  postInvestment,
}: any) {
  const { Razorpay } = useRazorpay();

  const RAZORPAY_KEY_ID = process.env.REACT_APP_RAZORPAY_KEY_ID;

  const handlePayment = async () => {
    try {
      if (!errorLog) {
        // Make the API call to backend
        console.log("vv");

        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}create-order`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: amount }),
          }
        );

        const order = await response.json();
        console.log("order", order);

        // add option for the payment gateway it can be dynamic if you want
        // we can use prop drilling to make it dynamic

        const options: any = {
          key: RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: order.currency,
          name: "Team Fame", // Add company details
          description: "Payment for your order", // Add order details
          order_id: order.id,
          // this is make function which will verify the payment
          // after making the payment
          handler: async (response: any) => {
            try {
              await fetch(`${process.env.REACT_APP_BASE_URL}verify-payment`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },

                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });
              // Add onPaymentSuccessfull function here
              postInvestment();
              alert("Payment successful!");
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
      } else {
        NotificationManager.warning("Error creating payment", "", 2000);
      }
    } catch (err: any) {
      NotificationManager.warning("Error creating payment", "", 2000);
      // alert("Error creating payment: " + err.message);
    }
  };

  return (
    <div className="btn-cover">
      <div className="place-order-btn" onClick={handlePayment}>
        {paymentModel === "shop" ? "PLACE ORDER" : "PAY"}
      </div>
    </div>
  );
}
