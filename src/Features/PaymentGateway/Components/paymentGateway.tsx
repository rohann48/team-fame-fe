import { useRazorpay } from "react-razorpay";
import { NotificationManager } from "react-notifications";

export default function PaymentButton({ paymentModel, handlePayment }: any) {
  return (
    <div className="btn-cover">
      <div className="place-order-btn" onClick={handlePayment}>
        {paymentModel === "shop" ? "PLACE ORDER" : "PAY"}
      </div>
    </div>
  );
}
