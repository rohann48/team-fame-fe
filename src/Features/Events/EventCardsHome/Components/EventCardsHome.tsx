import icons from "../../../Assets/Icons/icons";
import Footer from "../../../Common/CommonComponent/Footer";
import images from "../../../ImageVariables";
import { EventsCardsHomeTypes } from "../EventsCardsHomeTypes";
import "../SCSS/styles.css";
const eventDataDum = [
  {
    title: "hie",
    date: "2 april 2022",
    time: "10:00",
    location: "mang",
  },
  {
    title: "hie",
    date: "2 april 2022",
    time: "10:00",
    location: "mang",
  },
  {
    title: "hie",
    date: "2 april 2022",
    time: "10:00",
    location: "mang",
  },
  {
    title: "hie",
    date: "2 april 2022",
    time: "10:00",
    location: "mang",
  },
];
function EventCardsHome({ eventData }: Readonly<EventsCardsHomeTypes>) {
  return (
    <div className="events-cards-container">
      <div className="events-bg-img-cover"></div>
      <div className="events-cards-and-header-cover">
        <div className="events-cards-header-text">EVENTS</div>
        <div className="events-cards-render-cover">
          {eventDataDum?.map((event: any, i) => {
            return (
              <div className="events-cards" key={i}>
                <div className="events-card-left"></div>
                <div className="events-card-right">
                  <div className="events-card-right-inner-cover">
                    <div className="events-card-right-header">
                      <span className="events-header-text">Coming Soon</span>
                    </div>
                    <div className="events-card-img-cover">
                      <img
                        className="events-card-event-img"
                        src={images.videoThumbnail}
                        alt="events"
                      />
                    </div>
                    <div className="events-card-event-title">{event.title}</div>
                    <div className="events-card-event-date">
                      {icons.date} &nbsp; {event.date}
                    </div>
                    <div className="events-card-event-time">
                      {icons.clock}&nbsp; {event.time}
                    </div>
                    <div className="events-card-event-location">
                      {icons.location}&nbsp; {event.location}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="events-former-text-main-cover">
        <div className="events-former-text-top-border">
          <div className="events-former-text-top-border-inner"></div>
        </div>
        <div className="events-former-text-wrapper">
          <span>F</span>
          <span>A</span>
          <span className="text-r">R</span>
          <span>M</span>
          <span>E</span>
          <span className="text-r">R</span>
        </div>
        <div className="events-former-text-student-cover">
          <span>From the students</span>
          <span>For the students</span>
          <span>To the students</span>
        </div>
        <div className="events-former-text-join-btn-cover">
          <button className="events-former-text-join-btn">Join Now</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default EventCardsHome;
