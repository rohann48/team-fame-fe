import icons from "../../../Assets/Icons/icons";
import Footer from "../../../Common/CommonComponent/Footer";
import images from "../../../ImageVariables";
import { EventsDetailsTypes } from "../EventsDetailsTypes";
import "../SCSS/styles.css";

function EventDetails({ eventAndNewsDetails }: EventsDetailsTypes) {
  return (
    <div className="events-details-cards-container">
      <div className="events-details-bg-img-cover"></div>
      <div className="events-details-cards-and-header-cover">
        <div className="events-details-cards-header-text">EVENTS</div>
        <div className="events-details-cards-render-cover">
          <div className="events-details-cards-left-img-cover">
            <img
              className="events-details-cards-left-img"
              src={images.eventCard}
              alt="events"
            />
          </div>
          <div className="events-details-cards-right-cover">
            <div className="events-details-cards-header">
              Marathon event 2023
            </div>
            <div className="events-details-cards-description">
              A MARATHON EVENT IS A LONG-DISTANCE RUNNING RACE WITH AN OFFICIAL
              DISTANCE OF 42.195 KILOMETERS (26 MILES AND 385 YARDS). THE
              MARATHON IS ONE OF THE MOST ICONIC AND CHALLENGING ENDURANCE
              RACES, ATTRACTING RUNNERS FROM ALL AROUND THE WORLD. COMPLETING A
              MARATHON IS A PROFOUND PERSONAL ACHIEVEMENT THAT INSTILLS A SENSE
              OF PRIDE, ACCOMPLISHMENT, AND CAMARADERIE AMONG PARTICIPANTS. IT
              REQUIRES MENTAL TOUGHNESS, DETERMINATION, AND DEDICATION TO
              OVERCOME THE PHYSICAL AND MENTAL CHALLENGES OF THE RACE.
            </div>
            <div className="events-details-cards-date-and-time-cover">
              <div className="events-details-cards-date">
                {icons.date}&nbsp; 1 april 2020
              </div>
              <div className="events-details-cards-time">
                {icons.clock}&nbsp; 11:20
              </div>
            </div>
            <div className="events-details-cards-location">
              {" "}
              {icons.location}&nbsp; managlore
            </div>
            <div className="events-details-cards-register-btn-cover">
              <div className="events-details-cards-register-btn">Register</div>
            </div>
          </div>
        </div>
      </div>
      <div className="events-details-former-text-main-cover">
        <div className="events-details-former-text-top-border">
          <div className="events-details-former-text-top-border-inner"></div>
        </div>
        <div className="events-details-former-text-wrapper">
          <span>F</span>
          <span>A</span>
          <span className="text-r">R</span>
          <span>M</span>
          <span>E</span>
          <span className="text-r">R</span>
        </div>
        <div className="events-details-former-text-student-cover">
          <span>From the students</span>
          <span>For the students</span>
          <span>To the students</span>
        </div>
        <div className="events-details-former-text-join-btn-cover">
          <button className="events-details-former-text-join-btn">
            Join Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventDetails;
