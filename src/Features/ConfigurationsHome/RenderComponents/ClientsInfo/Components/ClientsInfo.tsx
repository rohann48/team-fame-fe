import "../SCSS/styles.scss";
import { ClientsInfoTypes } from "../ClientsInfoTypes";
import { useMemo } from "react";

function ClientsInfo({
  clientDetails,
  currentUserId,
  loading,
}: ClientsInfoTypes) {
  const formatPhoneNumber = (phone: any) => {
    return phone?.toString().replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  };

  const isCurrentUser = (clientId: any) => {
    return clientId === currentUserId;
  };

  // Get who referred this client
  const getReferredBy = (client: any) => {
    const inviterCode = client.shopVoucher?.invitedRefferal;

    if (!inviterCode || inviterCode.trim() === "") return null;

    // Find the user who owns this referral code
    const referrer = clientDetails.find(
      (c: any) => c.referralCode === inviterCode
    );

    return referrer || null;
  };

  if (loading) {
    return (
      <div className="clients-info">
        <div className="clients-loading">
          <div className="spinner"></div>
          <p>Loading clients...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="clients-info">
      <div className="clients-header">
        <h2>Clients Information</h2>
        <div className="clients-count">
          Total Clients: <span>{clientDetails.length}</span>
        </div>
      </div>

      <div className="clients-table-container">
        <table className="clients-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact Info</th>
              <th>Status</th>
              <th>Referred By</th>
              <th>Referral Code</th>
            </tr>
          </thead>
          <tbody>
            {clientDetails.map((client) => {
              const referredBy = getReferredBy(client);
              return (
                <tr
                  key={client._id}
                  className={
                    isCurrentUser(client._id) ? "current-user-row" : ""
                  }
                >
                  <td className="name-cell">
                    <div className="name-container">
                      <span className="name-text">
                        {client.name} {client.lastName}
                      </span>
                      {isCurrentUser(client._id) && (
                        <div className="current-user-indicator">
                          <i className="fas fa-user"></i>
                          You
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="contact-cell">
                    <div className="contact-info">
                      <div className="phone">
                        <i className="fas fa-phone"></i>
                        {formatPhoneNumber(client.contactNo)}
                      </div>
                      <div className="email">
                        <i className="fas fa-envelope"></i>
                        {client.emailId}
                      </div>
                    </div>
                  </td>

                  <td className="status-cell">
                    <div className="status-indicators">
                      {client.goldSchemeId && (
                        <div className="gold-scheme-indicator">
                          <i className="fas fa-star"></i>
                          Gold Plan
                        </div>
                      )}
                      <div className="active-status">
                        <i className="fas fa-circle"></i>
                        Active
                      </div>
                    </div>
                  </td>

                  <td className="referral-cell">
                    <div className="referral-info">
                      {referredBy ? (
                        <div className="referred-by-container">
                          <div className="referrer-header">
                            <div className="referrer-name">
                              <i className="fas fa-user-friends"></i>
                              <span className="name">
                                {referredBy.name} {referredBy.lastName}
                              </span>
                              {isCurrentUser(referredBy._id) && (
                                <span className="you-indicator">(You)</span>
                              )}
                            </div>
                          </div>
                          <div className="referrer-contact">
                            <div className="referrer-phone">
                              <i className="fas fa-phone"></i>
                              <span>
                                {formatPhoneNumber(referredBy.contactNo)}
                              </span>
                            </div>
                            <div className="referrer-email">
                              <i className="fas fa-envelope"></i>
                              <span>{referredBy.emailId}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="direct-signup">
                          <i className="fas fa-user-plus"></i>
                          <span>Direct signup</span>
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="referral-code-cell">
                    <div className="referral-code-info">
                      <div className="code-display">
                        <i className="fas fa-tag"></i>
                        <span className="code">
                          {client.referralCode || "N/A"}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {clientDetails.length === 0 && !loading && (
        <div className="no-clients">
          <i className="fas fa-users"></i>
          <p>No clients found</p>
        </div>
      )}
    </div>
  );
}

export default ClientsInfo;
