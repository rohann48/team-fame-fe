import React, { useState } from "react";
import icons from "../../../../Assets/Icons/icons";
import images from "../../../../ImageVariables";
import { EventComponentProps } from "../EventsTypes";
import "../SCSS/styles.css";
import Tippy from "@tippyjs/react";
import { format, parseISO } from "date-fns";

function Events({
  handleChangeInputs,
  eventForms,
  handleSave,
  events,
  handleChangeFile,
  uploadedFile,
  handleCancel,
  confirmDeleteEvent,
}: EventComponentProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 5;

  const pageCount = Math.ceil(events.length / eventsPerPage);

  const displayedEvents = events.slice(
    currentPage * eventsPerPage,
    (currentPage + 1) * eventsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount - 1));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="events-container">
      <div className="add-event-cover">
        <div className="add-event-inner-cover">
          <div className="event-header">EVENTS</div>
          <div className="add-event-header">Add Event</div>
          <div className="event-input-field-cover">
            <div className="event-input-field-img-cover">
              <div className="event-logo-upload-img">
                <Tippy
                  content={`Uploaded files: ${uploadedFile?.length ?? 0}`}
                  theme="light"
                  placement="right"
                >
                  <input
                    type="file"
                    className="file"
                    onChange={(e) => handleChangeFile(e)}
                  />
                </Tippy>
                <div className="plus-img-cover">
                  <img src={images.userProfile} alt="add profile" />
                </div>
              </div>
              <div className="event-btn-cover">
                <button className="cancel" onClick={() => handleCancel()}>
                  Cancel
                </button>
                <button className="save" onClick={() => handleSave()}>
                  SAVE
                </button>
              </div>
            </div>
            <div className="event-input-filed-cover">
              <div className="event-name-cover">
                <label className="event-label-cover">
                  <div className="event-text">Event Name</div>
                  <input
                    className="event-name-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "name")}
                    value={eventForms.name}
                  />
                </label>
                <label className="event-title-cover">
                  <div className="event-text">Title</div>
                  <input
                    className="event-title-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "title")}
                    value={eventForms.title}
                  />
                </label>
              </div>
              <div className="event-details-cover">
                <label className="event-date-cover">
                  <div className="event-text">Date</div>
                  <input
                    className="event-date-input"
                    type="date"
                    onChange={(e) => handleChangeInputs(e, "date")}
                    value={eventForms.date}
                  />
                </label>
                <label className="event-time-cover">
                  <div className="event-text">Time</div>
                  <input
                    className="event-time-input"
                    type="time"
                    onChange={(e) => handleChangeInputs(e, "time")}
                    value={eventForms.time}
                  />
                </label>
                <label className="event-location-cover">
                  <div className="event-text">Location</div>
                  <input
                    className="event-location-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "location")}
                    value={eventForms.location}
                  />
                </label>
              </div>
              <div className="event-description-cover">
                <label>
                  <div className="event-description">Description</div>
                  <textarea
                    className="event-description-text-area"
                    onChange={(e) => handleChangeInputs(e, "description")}
                    value={eventForms.description}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-table-cover">
        <div className="table-event-header">All Events</div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.length === 0 ? (
                <tr>
                  <td colSpan={8} className="no-data-event">
                    No events available
                  </td>
                </tr>
              ) : (
                displayedEvents.map((event, index) => (
                  <tr key={index}>
                    <td>{event.name}</td>
                    <td>{event.title}</td>
                    <td>
                      {event.date &&
                        format(parseISO(event.date), "MMMM dd, yyyy")}
                    </td>
                    <td>{event.time}</td>
                    <td>{event.location}</td>
                    <td className="description">{event.description}</td>
                    <td>
                      {event.imageInfo.length > 0 ? (
                        <details>
                          <summary>{event.imageInfo.length} image(s)</summary>
                          <ul>
                            {event.imageInfo.map((img, imgIndex) => (
                              <li key={imgIndex}>
                                <img src={images.pdfDownload} alt="img" />
                                <div>{img.name}</div>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ) : (
                        "No images"
                      )}
                    </td>
                    <td>
                      <button className="edit-btn" disabled>
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() =>
                          confirmDeleteEvent(
                            event._id,
                            event.imageInfo[0]?.Key || "",
                            index
                          )
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {events.length > 0 && (
          <div className="pagination-controls">
            <button
              className="pagination-button"
              onClick={handlePrevious}
              disabled={currentPage === 0}
            >
              Previous
            </button>
            <span className="page-indicator">
              Page {currentPage + 1} of {pageCount}
            </span>
            <button
              className="pagination-button"
              onClick={handleNext}
              disabled={currentPage === pageCount - 1}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
