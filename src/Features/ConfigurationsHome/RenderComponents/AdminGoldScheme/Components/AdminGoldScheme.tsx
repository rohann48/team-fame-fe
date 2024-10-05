import React from "react";
import { AdminGoldSchemeTypes } from "../AdminGoldSchemeTypes";
import "../SCSS/styles.scss";

function AdminGoldScheme({ schemeDetails }: AdminGoldSchemeTypes) {
  return (
    <div className="admin-gold-scheme-container">
      <h2>Admin Gold Scheme Details</h2>
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Contact </th>
            <th>Period (Months)</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Investments</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {schemeDetails.length > 0 ? (
            schemeDetails.map((scheme) => (
              <tr key={scheme._id}>
                <td>{scheme.clientId.name}</td>
                <td>{scheme.clientId.contactNo}</td>
                <td>{scheme.period}</td>
                <td>{new Date(scheme.startDate).toLocaleDateString()}</td>
                <td>{new Date(scheme.endDate).toLocaleDateString()}</td>
                <td>
                  {scheme.investments.length > 0
                    ? scheme.investments.map((investment, index) => (
                        <span key={index}>
                          {investment}
                          {index < scheme.investments.length - 1 ? ", " : ""}
                        </span>
                      ))
                    : "No Investments"}
                </td>
                <td>{new Date(scheme.createdAt).toLocaleString()}</td>
                <td>{new Date(scheme.updatedAt).toLocaleString()}</td>
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
