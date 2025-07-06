import { EventRegistrationComponentsProps } from "../EventRegistrationTypes";
import "../SCSS/styles.scss";

function EventRegistration({
  registrations,
  events,
  loading,
  error,
  onRefresh,
}: EventRegistrationComponentsProps) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading event registrations...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
        <button onClick={onRefresh} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="event-registration">
      <div className="header">
        <h1 className="title">Event Registrations</h1>
        <button onClick={onRefresh} className="refresh-button">
          Refresh
        </button>
      </div>

      {registrations.length === 0 ? (
        <div className="empty-state">
          <p className="empty-message">No event registrations found.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="registrations-table">
            <thead className="table-header">
              <tr>
                <th className="table-cell table-cell--header">Client</th>
                <th className="table-cell table-cell--header">Contact</th>
                <th className="table-cell table-cell--header">Event</th>
                <th className="table-cell table-cell--header">Date & Time</th>
                <th className="table-cell table-cell--header">Location</th>
                <th className="table-cell table-cell--header">Status</th>
                <th className="table-cell table-cell--header">Registered</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {registrations.map((registration, index) => (
                <tr
                  key={`${registration.clientId}-${registration.eventId}-${index}`}
                  className="table-row"
                >
                  <td className="table-cell">
                    <div className="client-info">
                      <div className="client-name">
                        {registration.clientName} {registration.clientLastName}
                      </div>
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className="contact-info">
                      <div className="contact-email">
                        {registration.clientEmail}
                      </div>
                      <div className="contact-phone">
                        {registration.clientPhone}
                      </div>
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className="event-info">
                      <div className="event-title">
                        {registration.eventTitle}
                      </div>
                      <div className="event-name">{registration.eventName}</div>
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className="datetime-info">
                      <div className="event-date">
                        {new Date(registration.eventDate).toLocaleDateString()}
                      </div>
                      <div className="event-time">{registration.eventTime}</div>
                    </div>
                  </td>
                  <td className="table-cell event-location">
                    {registration.eventLocation}
                  </td>
                  <td className="table-cell">
                    <span
                      className={`status-badge status-badge--${registration.eventStatus}`}
                    >
                      {registration.eventStatus}
                    </span>
                  </td>
                  <td className="table-cell registration-date">
                    {new Date(
                      registration.registrationDate
                    ).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="footer">Total registrations: {registrations.length}</div>
    </div>
  );
}

export default EventRegistration;
