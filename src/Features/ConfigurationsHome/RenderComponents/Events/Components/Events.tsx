import images from "../../../../ImageVariables";
import "../SCSS/styles.css";

function Events() {
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
                <button className="save">SAVE</button>
              </div>
            </div>
            <div className="events-input-filed-cover">
              <div className="event-name-cover">
                <label className="event-label-cover">
                  <div className="event-text">Event Name</div>
                  <input className="event-name-input" type="text" />
                </label>
                <label className="event-date-cover">
                  <div className="event-date">Event Date</div>
                  <input className="event-date-input" type="date" />
                </label>
              </div>
              <div className="event-title-cover">
                <label className="event-label-cover">
                  <div className="event-title">Event Title</div>
                  <input className="event-title-input" type="text" />
                </label>
                <label className="event-time-cover">
                  <div className="event-time">Event Time</div>
                  <input className="event-time-input" type="time" />
                </label>
              </div>
              <div className="event-location-cover">
                <label className="event-location-cover">
                  <div className="event-location">Event Location</div>
                  <textarea className="event-location-text-area" />
                </label>
              </div>
              <div className="event-description-cover">
                <label className="event-description-cover">
                  <div className="event-description">Event Description</div>
                  <textarea className="event-description-text-area" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="events-cards-cover">render cards</div>
    </div>
  );
}

export default Events;
