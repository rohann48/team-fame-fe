import React from "react";
import { AdminGoldSchemeTypes } from "../AdminGoldSchemeTypes";
import "../SCSS/styles.scss";

function AdminGoldScheme({ schemeDetails, toggleModal }: AdminGoldSchemeTypes) {
  return (
    <div className="admin-gold-scheme-container">
      <h2>Admin Gold Scheme Details</h2>
      <span>
        <button className="add-deposit-btn" onClick={() => toggleModal()}>
          ADD SAVINGS / FD
        </button>
      </span>
      {/* <div>
        <button>Add Non Refundable Deposits</button>
      </div> */}
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Contact </th>
            <th>Period (Months)</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Investments</th>

            {/* <th>Created At</th> */}
            {/* <th>Updated At</th> */}
          </tr>
        </thead>
        <tbody style={{ maxHeight: "560px" }}>
          {schemeDetails?.length > 0 ? (
            schemeDetails.map((scheme) => (
              <tr key={scheme._id}>
                <td>{scheme.clientId?.name ?? ""}</td>
                <td>{scheme.clientId?.contactNo ?? ""}</td>
                <td>{scheme?.period ?? ""}</td>
                <td>{new Date(scheme?.startDate).toLocaleDateString()}</td>
                <td>{new Date(scheme?.endDate).toLocaleDateString()}</td>
                <td>
                  {scheme.investments.length > 0 ? (
                    <>
                      {scheme.investments.map((investment: any, index) => (
                        <div key={index} className="investment-item">
                          <div className="investment-details">
                            <span className="investment-amount">
                              ₹{investment.amount.toLocaleString()}
                            </span>
                            <span className="investment-date">
                              {investment.date
                                ? new Date(investment.date).toLocaleDateString(
                                    "en-IN",
                                    {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                    }
                                  )
                                : investment.year &&
                                  investment.month &&
                                  investment.day
                                ? `${investment.day}/${investment.month}/${investment.year}`
                                : "Date N/A"}
                            </span>
                          </div>
                          <span
                            className={`investment-type ${
                              investment.type === "NonRefundable"
                                ? "savings-type"
                                : "fd-type"
                            }`}
                          >
                            {investment.type === "NonRefundable"
                              ? "💰 Savings"
                              : "🏦 FD"}
                          </span>
                        </div>
                      ))}

                      {/* Investment Totals */}
                      <div className="investment-totals">
                        {(() => {
                          const fdTotal = scheme.investments
                            .filter((inv: any) => inv.type === "FD")
                            .reduce(
                              (sum: number, inv: any) =>
                                sum + (inv.amount || 0),
                              0
                            );

                          const savingsTotal = scheme.investments
                            .filter((inv: any) => inv.type === "NonRefundable")
                            .reduce(
                              (sum: number, inv: any) =>
                                sum + (inv.amount || 0),
                              0
                            );

                          return (
                            <>
                              {fdTotal > 0 && (
                                <div className="total-item fd-total">
                                  <span className="total-label">
                                    🏦 Total FD:
                                  </span>
                                  <span className="total-amount">
                                    ₹{fdTotal.toLocaleString()}
                                  </span>
                                </div>
                              )}
                              {savingsTotal > 0 && (
                                <div className="total-item savings-total">
                                  <span className="total-label">
                                    💰 Total Savings:
                                  </span>
                                  <span className="total-amount">
                                    ₹{savingsTotal.toLocaleString()}
                                  </span>
                                </div>
                              )}
                              {(fdTotal > 0 || savingsTotal > 0) && (
                                <div className="total-item grand-total">
                                  <span className="total-label">
                                    📊 Grand Total:
                                  </span>
                                  <span className="total-amount">
                                    ₹{(fdTotal + savingsTotal).toLocaleString()}
                                  </span>
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </>
                  ) : (
                    <span className="no-investments">No Investments</span>
                  )}
                </td>
                {/* <td>{new Date(scheme.createdAt).toLocaleString()}</td> */}
                {/* <td>{new Date(scheme.updatedAt).toLocaleString()}</td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No scheme details available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminGoldScheme;
