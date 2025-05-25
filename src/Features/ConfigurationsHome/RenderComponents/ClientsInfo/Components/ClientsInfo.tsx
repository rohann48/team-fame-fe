import "../SCSS/styles.scss";
import { ClientsInfoTypes } from "../ClientsInfoTypes";

function ClientsInfo({
  clientDetails = [],
  currentUserId,
  loading,
}: ClientsInfoTypes) {
  const formatPhoneNumber = (phone: any) => {
    return phone?.toString().replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  };

  const isCurrentUser = (clientId: any) => {
    return clientId === currentUserId;
  };

  if (loading) {
    return (
      <div className="clients-loading">
        <div className="spinner"></div>
        <p>Loading clients...</p>
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
            </tr>
          </thead>
          <tbody>
            {clientDetails.map((client) => (
              <tr
                key={client._id}
                className={isCurrentUser(client._id) ? "current-user-row" : ""}
              >
                <td className="name-cell">
                  <div className="name-container">
                    <div className="name-text">
                      {client.name} {client.lastName}
                    </div>
                    {isCurrentUser(client._id) && (
                      <span className="current-user-indicator">
                        <i className="fas fa-user-circle"></i>
                        You
                      </span>
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
                      <span className="gold-scheme-indicator">
                        <i className="fas fa-coins"></i>
                        Gold Plan
                      </span>
                    )}
                    <span className="active-status">
                      <i className="fas fa-circle"></i>
                      Active
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {clientDetails.length === 0 && !loading && (
          <div className="no-clients">
            <i className="fas fa-users"></i>
            <p>No clients found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientsInfo;
