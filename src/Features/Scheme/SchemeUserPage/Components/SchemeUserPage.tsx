import "../SCSS/styles.css";
import Footer from "../../../Common/CommonComponent/Footer/Components/footer";
import { SchemeUserPageTypes } from "../SchemeUserPageTypes";
import { format, parseISO } from "date-fns";

const data = [
  { name: "20 Jan 2023", quantity: 5000 },
  { name: "23 Jan 2025", quantity: 3000 },
  { name: "20 Jan 2025", quantity: 2000 },
];
function SchemeUserPage({
  schemeUserData,
  userInfo,
  postInvestment,
  handleInvestments,
  handleSelectMonth,
  selectedMonth,
}: SchemeUserPageTypes) {
  // Calculate total
  const total = schemeUserData?.investments?.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (
    <div className="user-scheme-container">
      <div className="user-gold-scheme-img-one-cover"></div>
      <div className="user-gold-scheme-img-two-cover">
        <div className="user-gold-scheme-img-two-text-cover">
          <div className="user-text-one-cover">
            <h3 className="user-header-one">WELCOME TO SHREE RAKSHA GOLD</h3>
          </div>
          <div className="user-text-two-cover">
            <h3 className="user-header-two">GOLD SAVINGS </h3>
            <h3 className="user-header-three">SCHEME</h3>{" "}
            <h3 className="user-header-four">AT YOUR FINGER TIP</h3>
          </div>
        </div>
        <div className="user-gold-scheme-user-details-cover">
          <div className="info">
            <div>Payee Name:</div>
            <div className="info-data">
              {userInfo.name}&nbsp;
              {userInfo.lastName}
            </div>
          </div>
          {/* <div className="info">
            <div>User Id:</div>
            <div className="info-data">satvik</div>
          </div> */}
          <div className="info">
            <div>Mobile Number:</div>
            <div className="info-data">{userInfo.contactNo}</div>
          </div>
          <div className="info">
            <div>Start Date:</div>
            <div className="info-data">
              {schemeUserData.startDate &&
                format(
                  parseISO(schemeUserData.startDate?.toString()),
                  "dd-MMM-yyyy"
                )}
            </div>
          </div>
          <div className="info">
            <div>End Date:</div>
            <div className="info-data">
              {schemeUserData.endDate &&
                format(
                  parseISO(schemeUserData.endDate?.toString()),
                  "dd-MMM-yyyy"
                )}{" "}
            </div>
          </div>
          {/* <div className="info">
            <button className="edit-user-btn">Edit User Details</button>
          </div> */}
        </div>
      </div>
      <div className="user-scheme-plan-info-cover">
        <div className="user-scheme-plan-info-wrapper">
          <h3> Plan Details: </h3>
          <p>
            •Shree Raksha Gold purchase plan starts from Rs.500/month. It can
            increase to any fixed amount in multiples of 500.
          </p>
          <p>
            •You have to pay a fixed monthly installment for a period of 12 or
            24 months only.
          </p>
          <p>
            •On the maturity of the plan,a customer can purchase the jewelry at
            the existing gold rate with minimum wastage charges. All kinds of
            taxes, making and stone charges are applicable.
          </p>
          <p>
            •You can buy hallmarked 916 gold coins, jewellery,silver
            ornaments,any gemstone and diamond jewellery from the Jewellers
            collection only after the completion of the plan period.
          </p>
          <p>
            •There will not be any transfer/refund available on any of the plan
            in case of discontinuity of the same •When you buy gold jewellery
            from SHREE RAKSHA JEWELLERS, you are assured of quality, purity and
            a sound investment that you can enjoy for generations to come.
          </p>
          <p> Thank you</p>
        </div>
      </div>
      <div className="user-scheme-details-cover">
        <div className="user-scheme-header">Scheme</div>
        <div className="user-scheme-table-cover">
          <div className="user-scheme-table-wrapper">
            <h4 className="table-header">
              Payment History{" "}
              <span className="header-period">
                Period :{schemeUserData.period}
              </span>
            </h4>
            {schemeUserData.investments?.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Payment Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {schemeUserData.investments.map((item, index) => (
                    <tr key={item._id}>
                      <td>
                        {item.date &&
                          format(
                            parseISO(item.date?.toString()),
                            "dd-MMM-yyyy"
                          )}
                      </td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>Total</td>
                    <td>{total}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="table-no-data">
                <tbody>No investment found</tbody>
              </table>
            )}
          </div>
          <div className="user-scheme-form-cover">
            <div className="user-scheme-form">
              {/* <label className="scheme-payee-label-cover">
                <div className="scheme-payee-text">Payee Name:</div>
                <input
                  className="scheme-payee-input"
                  type="text"
                  placeholder="Enter name"
                />
              </label> */}
              <label className="scheme-payee-contact-label-cover">
                <div className="scheme-payee-contact-number-text">Month:</div>
                <select
                  className="scheme-payee-contact-number-input"
                  onChange={(e) => handleSelectMonth(e)}
                  defaultValue={1}
                  value={selectedMonth}
                >
                  <option value="" disabled>
                    select month
                  </option>
                  {Array.from(
                    { length: schemeUserData.period },
                    (_, i) => i + 1
                  ).map((month) => (
                    <>
                      <option key={month}>{month}</option>
                    </>
                  ))}
                </select>
              </label>

              <label className="scheme-payee-period-label-cover">
                <div className="scheme-payee-period-text"> Amount:</div>
                <input
                  className="scheme-payee-period-select"
                  placeholder="Please select period"
                  type="number"
                  onWheel={(e: any) => e.target.blur()}
                  onChange={(e) => handleInvestments(e)}
                />
              </label>
              <div className="payment-method-cover">
                <div className="payment-text">Payment Type</div>
                <div className="btn-cover">
                  <label className="pay-label">
                    <input type="radio" />
                    <span className="pay-text"> Google Pay</span>
                  </label>
                  <label className="pay-label">
                    <input type="radio" />{" "}
                    <span className="pay-text">Phone Pay</span>
                  </label>
                </div>
              </div>
              <div className="user-scheme-btn-cover">
                <button className="join-scheme-btn cancel">Cancel</button>
                <button
                  className="join-scheme-btn pay"
                  onClick={() => postInvestment()}
                >
                  Pay
                </button>
              </div>
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

export default SchemeUserPage;
