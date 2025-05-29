import React from "react";
import { AddressTypes } from "../AddressTypes";
import icons from "../../Assets/Icons/icons";
import "../SCSS/styles.css";
import PaymentButton from "../../PaymentGateway";

function Address({
  handleFormDataChange,
  handleSubmitForm,
  productInfo,
  validateForm,
  userInfo,
  formData,
}: Readonly<AddressTypes>) {
  const offerAppliedCalc = () => {
    let offerPrice = productInfo.catTotalAmount;
    productInfo.cartBasket.forEach((prod) => {
      if (prod?.offers?.cashback > 1) {
        offerPrice -= productInfo.catTotalAmount * (prod.offers.cashback / 100);
      }
    });
    return offerPrice;
  };
  const orderOfferCalc = () => {
    let offerPrice = 0;
    productInfo.cartBasket.forEach((prod) => {
      if (prod?.offers?.cashback > 1) {
        offerPrice += prod.offers.cashback;
      }
    });
    return offerPrice;
  };
  return (
    <div className="address-container">
      <div className="address-back-btn-cover">
        <div className="address-back-btn">{icons.backBtn}</div>
        <div className="address-back-text">Back</div>
      </div>
      <div className="payment-text">PAYMENT</div>
      <div className="address-card-cover">
        <div className="address-left-cover">
          <div className="address-left-text-cover">
            <h3>1.</h3>
            <h3>Delivery address</h3>
          </div>
          <div className="address-name-cover">
            <div className="address-name-text">
              Full name (First and last name)
            </div>
            <div className="address-name-input-cover">
              <input
                type="text"
                className="address-input-name"
                placeholder="Enter your full name"
                name="name"
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
          </div>
          <div className="address-mob-number-cover">
            <div className="address-mob-number-text">Mobile number</div>
            <div className="address-mob-number-input-cover">
              <input
                type="text"
                className="address-input-mob-number"
                placeholder="Enter your mobile number"
                name="mobile"
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
          </div>
          <div className="address-pin-code-cover">
            <div className="address-pin-code-text">Pincode</div>
            <div className="address-pin-code-input-cover">
              <input
                type="text"
                className="address-input-pin-code"
                placeholder="Enter your mobile number"
                name="pincode"
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
          </div>
          <div className="address-delivery-cover">
            <div className="address-delivery-text">Delivery address</div>
            <div className="address-delivery-input-cover">
              <input
                className="address-input-delivery"
                placeholder="Enter your Address line 1"
                name="addressLine1"
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="address-delivery-input-cover">
              <input
                className="address-input-delivery"
                placeholder="Enter your Address line 2"
                name="addressLine2"
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="address-delivery-input-cover">
              <input
                className="address-input-delivery"
                placeholder="Enter your Address line 3"
                name="addressLine3"
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            {/* <div className="address-delivery-input-cover">
              <input
                className="address-input-delivery"
                placeholder="Enter your Address landmark"
                name="landmark"
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="address-delivery-input-cover">
              <input
                className="address-input-delivery"
                placeholder="Enter your state"
                name="state"
                onChange={(e) => handleFormDataChange(e)}
              />
            </div> */}
          </div>
          <div className="address-payment-method-cover">
            <div className="address-payment-method-text-cover">
              <h3>2.</h3>
              <h3>Select a payment method</h3>
            </div>
            <div className="payment-mode-cover">
              <label>Cash On Delivery</label>
              <input
                type="radio"
                name="paymentMode"
                value="cod"
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="payment-mode-cover">
              <label>Online Payment</label>
              <input
                type="radio"
                name="paymentMode"
                value="online"
                onChange={(e) => handleFormDataChange(e)}
                checked={formData.paymentMode === "online" ? true : false}
              />
            </div>
          </div>
        </div>
        <div className="address-right-cover">
          <div className="address-right-summery-cover">
            <div className="summery-text">YOUR ORDER SUMMARY</div>
            <div className="sub-total-text">
              <span>Subtotal (inclusive of all taxes):</span>
              <span>{productInfo.catTotalAmount}</span>
            </div>
            <div className="shipping-text">
              <span>Shipping:</span>
              <span>0</span>
            </div>
            <div className="shipping-text">
              <span>Offer applied:</span>
              <span>
                {orderOfferCalc()}
                {"%"}
              </span>
            </div>
            <div className="order-text">
              <span>Order Total:</span>
              <span>{offerAppliedCalc()}</span>
            </div>
          </div>
          <div className="product-offer-cover ">
            <div className="product-offer-text">
              <div className="offer-text">
                <span>Product offer info</span>
              </div>
              <input
                type="text"
                placeholder="Enter refferal code here"
                className="offer-input"
                value={userInfo?.shopVoucher?.invitedRefferal || null}
                // onChange={(e) => handleChange(e.target.value)}
                disabled={true}
              />
            </div>
            <button
              className="offer-btn"
              // onClick={() => refferalCodeCheck()}
              disabled={true}
            >
              Offer Applied
            </button>
          </div>
          <div className="place-order-btn-cover">
            {formData.paymentMode === "cod" ? (
              <button
                className="place-order-btn"
                onClick={() => handleSubmitForm()}
                style={{
                  all: "unset",
                  width: "279px",
                  height: "50px",
                  backgroundColor: "#eaa837",
                  borderRadius: "4px",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  textAlign: "center",
                  display: "block",
                }}
              >
                PLACE ORDER
              </button>
            ) : (
              <PaymentButton
                paymentModel={"shop"}
                userInfo={userInfo}
                amount={productInfo.catTotalAmount}
                validateForm={validateForm}
                handleSubmit={handleSubmitForm}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
