import icons from "../../../../Assets/Icons/icons";
import images from "../../../../ImageVariables";
import { TestimonialComponentProps } from "../TestimonialTypes";
import "../SCSS/styles.css";

function Testimonial({
  handleChangeInputs,
  testimonialForms,
  handleSave,
  eventData,
}: TestimonialComponentProps) {
  return (
    <div className="events-container">
      <div className="add-event-cover">
        <div className="add-event-inner-cover">
          <div className="event-header">TESTIMONIAL</div>
          <div className="add-event-header">Add Testimonial</div>
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
                  <div className="event-text">Name</div>
                  <input
                    className="event-name-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "name")}
                    value={testimonialForms?.name}
                  />
                </label>
                {/* <label className="event-date-cover">
                  <div className="event-date">Event Date</div>
                  <input
                    className="event-date-input"
                    type="date"
                    onChange={(e) => handleChangeInputs(e, "date")}
                    value={eventForms.date}
                  />
                </label> */}
                <label className="event-achievement-cover">
                  <div className="event-text">Person role/ achievement</div>
                  <input
                    className="event-title-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "achievement")}
                    value={testimonialForms.achievement}
                  />
                </label>
              </div>
              <div className="event-description-cover">
                <label className="event-description-cover">
                  <div className="event-description">About Fame</div>
                  <textarea
                    className="event-description-text-area"
                    onChange={(e) => handleChangeInputs(e, "about")}
                    value={testimonialForms.about}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="events-cards-cover">
        <div className="cards-event-header">All Testimonials</div>
        <div className="cards-flex">
          {eventData.map((event: any) => {
            return (
              <div className="cards">
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
      </div>
    </div>
  );
}

export default Testimonial;
