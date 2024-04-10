import Footer from "../../../Common/CommonComponent/Footer";
import images from "../../../ImageVariables";
import "../SCSS/styles.css";

function SchemeJoinPage() {
  return (
    <div className="scheme-container">
      <div className="gold-scheme-img-one-cover"></div>
      <div className="gold-scheme-img-two-cover">
        <div className="gold-scheme-img-two-text-cover">
          <div className="text-one-cover">
            <h3 className="header-one">WELCOME TO SHREE RAKSHA GOLD</h3>
          </div>
          <div className="text-two-cover">
            <h3 className="header-two">GOLD SAVINGS </h3>
            <h3 className="header-three">SCHEME</h3>{" "}
            <h3 className="header-four">AT YOUR FINGER TIP</h3>
          </div>
        </div>
        <div className="gold-scheme-img-two-locket-cover">
          <img className="locket" src={images.locket} alt="locket" />
        </div>
      </div>
      <div className="scheme-details-cover">
        <div className="scheme-welcome-header">WELCOME</div>
        <div className="scheme-description-and-form-cover">
          <div className="scheme-description-cover">
            <p className="description">
              Your favourite Jeweller has made owning your most favourite
              jewellery easier,more secure and convenient. With the SHREE RAKSHA
              gold purchase jewellery scheme,you can plan for and make a
              stunning impression on every occasion from wedding to birthdays
              and any festivals.
            </p>
            <h4 className="description-header">Plan Details:</h4>
            <p className="description">
              •Shree Raksha Gold purchase plan starts from Rs.500/month. It can
              increase to any fixed amount in multiples of 500.
            </p>
            <p className="description">
              •You have to pay a fixed monthly installment for a period of 12 or
              24 months only.
            </p>
            <p className="description">
              •On the maturity of the plan,a customer can purchase the jewelry
              at the existing gold rate with minimum wastage charges. All kinds
              of taxes, making and stone charges are applicable.
            </p>
            <p className="description">
              •You can buy hallmarked 916 gold coins, jewellery,silver
              ornaments,any gemstone and diamond jewellery from the Jewellers
              collection only after the completion of the plan period.
            </p>
            <p className="description">
              •There will not be any transfer/refund available on any of the
              plan in case of discontinuity of the same
            </p>
            <p className="description">
              •When you buy gold jewellery from SHREE RAKSHA JEWELLERS, you are
              assured of quality, purity and a sound investment that you can
              enjoy for generations to come.
            </p>
            <p className="description">Thank you</p>
          </div>
          <div className="scheme-form-cover">
            <div className="scheme-rate-header">Today's Gold Rate</div>
            <div className="scheme-rate-cards-cover">
              <div className="scheme-rate-card">
                <div className="scheme-rate-text">24 Carat Gold</div>
                <div className="scheme-rate">6443 /gm</div>
              </div>
              <div className="scheme-rate-card">
                <div className="scheme-rate-text">22 Carat Gold</div>
                <div className="scheme-rate">5493 /gm</div>
              </div>
            </div>
            <div className="scheme-join-text">Join Our Scheme Now.</div>
            <div className="scheme-form">
              <label className="scheme-payee-label-cover">
                <div className="scheme-payee-text">Payee Name:</div>
                <input
                  className="scheme-payee-input"
                  type="text"
                  placeholder="Enter name"
                />
              </label>
              <div className="scheme-email-contact-cover">
                <label className="scheme-payee-email-label-cover">
                  <div className="scheme-payee-email-text">Email:</div>
                  <input
                    className="scheme-payee-email-input"
                    type="email"
                    placeholder="Enter email"
                  />
                </label>
                <label className="scheme-payee-contact-label-cover">
                  <div className="scheme-payee-contact-number-text">
                    Mobile Number:
                  </div>
                  <input
                    className="scheme-payee-contact-number-input"
                    type="contact"
                    placeholder="Enter mobile number"
                  />
                </label>
              </div>
              <label className="scheme-payee-period-label-cover">
                <div className="scheme-payee-period-text"> Period:</div>
                <input
                  className="scheme-payee-period-select"
                  placeholder="Please select period"
                  type="number"
                />
              </label>
            </div>
            <div className="scheme-btn-cover">
              <button className="join-scheme-btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SchemeJoinPage;
