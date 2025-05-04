import { useRazorpay } from "react-razorpay";
import { NotificationManager } from "react-notifications";

export default function PaymentButton({ paymentModel, handlePayment }: any) {
  return (
    <div className="btn-cover" onClick={() => handlePayment(paymentModel)}>
      <div className="place-order-btn">
        {paymentModel === "shop" ? "PLACE ORDER" : "PAY"}
      </div>
    </div>
  );
}
