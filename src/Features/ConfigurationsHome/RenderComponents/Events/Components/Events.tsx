import { useState } from "react";
import icons from "../../../../Assets/Icons/icons";
import images from "../../../../ImageVariables";
import { EventComponentProps } from "../EventsTypes";
import "../SCSS/styles.css";

function Events({
  handleChangeInputs,
  eventForms,
  handleSave,
  eventData,
}: EventComponentProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 3;

  const pageCount = Math.ceil(eventData.length / eventsPerPage);

  const displayedEvents = eventData.slice(
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
          <div className="add-event-header">Add Events</div>
          <div className="event-input-field-cover">
            <div className="event-input-field-img-cover">
              <div className="event-logo-upload-img">
                <input type="file" className="file" />
                <div className="plus-img-cover">
                  <img src={images.AddProfilePhotoPlus} alt="add profile" />
                </div>
              </div>
              <div className="events-btn-cover">
                <button className="cancel">Cancel</button>
                <button className="save" onClick={() => handleSave()}>
                  SAVE
                </button>
              </div>
            </div>
            <div className="events-input-filed-cover">
              <div className="event-name-cover">
                <label className="event-label-cover">
                  <div className="event-text">Event Name</div>
                  <input
                    className="event-name-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "eventName")}
                    value={eventForms?.eventName}
                  />
                </label>
                <label className="event-date-cover">
                  <div className="event-date">Event Date</div>
                  <input
                    className="event-date-input"
                    type="date"
                    onChange={(e) => handleChangeInputs(e, "date")}
                    value={eventForms.date}
                  />
                </label>
              </div>
              <div className="event-title-cover">
                <label className="event-label-cover">
                  <div className="event-title">Event Title</div>
                  <input
                    className="event-title-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "title")}
                    value={eventForms.title}
                  />
                </label>
                <label className="event-time-cover">
                  <div className="event-time">Event Time</div>
                  <input
                    className="event-time-input"
                    type="time"
                    onChange={(e) => handleChangeInputs(e, "time")}
                    value={eventForms.time}
                  />
                </label>
              </div>
              <div className="event-location-cover">
                <label className="event-location-cover">
                  <div className="event-location">Event Location</div>
                  <textarea
                    className="event-location-text-area"
                    onChange={(e) => handleChangeInputs(e, "location")}
                    value={eventForms.location}
                  />
                </label>
              </div>
              <div className="event-description-cover">
                <label className="event-description-cover">
                  <div className="event-description">Event Description</div>
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
      <div className="events-cards-cover">
        <div className="cards-event-header">Upcoming Events</div>
        <div className="cards-flex">
          {displayedEvents.map((event: any, index: number) => {
            return (
              <div className="cards" key={index}>
                <div className="card-left"></div>
                <div className="card-right">
                  <div className="card-right-inner-cover">
                    <div className="card-right-header">
                      <span className="header-text">Coming Soon</span>
                    </div>
                    <div className="card-img-cover">
                      <img
                        className="card-event-img"
                        src={images.videoThumbnail}
                        alt="events"
                      />
                    </div>
                    <div className="card-event-title">{event.title}</div>
                    <div className="card-event-date">
                      {icons.date} &nbsp; {event.date}
                    </div>
                    <div className="card-event-time">
                      {icons.clock}&nbsp; {event.time}
                    </div>
                    <div className="card-event-location">
                      {icons.location}&nbsp; {event.location}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
      </div>
    </div>
  );
}

export default Events;
