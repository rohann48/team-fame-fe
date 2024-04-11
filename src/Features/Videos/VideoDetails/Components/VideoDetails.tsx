import icons from "../../../Assets/Icons/icons";
import Footer from "../../../Common/CommonComponent/Footer";
import images from "../../../ImageVariables";
import "../SCSS/styles.css";
import { VideoTypes } from "../VideoDetailsTypes";

function VideoDetails({ videoInfo }: VideoTypes) {
  return (
    <div className="videos-details-cards-container">
      <div className="videos-details-bg-img-cover"></div>
      <div className="videos-details-cards-and-header-cover">
        <div className="videos-details-cards-header-text">VIDEOS</div>
        <div className="videos-details-cards-render-cover">
          <div className="videos-details-cards-left-img-cover">
            <video width="auto" height="auto" autoPlay>
              <source src={videoInfo?.videoInfo?.[0].path} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="videos-details-cards-right-cover">
            <div className="videos-details-cards-header">
              Embracing the journey: Unraveling the life changing benefits of
              running
            </div>
            <div className="videos-details-cards-description">
              Explore the myriad health advantages that running offers, from
              enhancing cardiovascular fitness... Explore the myriad health
              advantages that running offers, from enhancing cardiovascular
              fitness Explore the myriad health advantages that running offers,
              from enhancing cardiovascular fitness...Explore the myriad health
              advantages that running offers, from enhancing cardiovascular
              fitness...
            </div>
            <div className="videos-details-cards-date-and-time-cover">
              <div className="videos-details-cards-date">
                {icons.date}&nbsp; 1 april 2020
              </div>
              <div className="videos-details-cards-time">
                {icons.clock}&nbsp; 11:20
              </div>
            </div>
            <div className="videos-details-cards-location">
              {" "}
              {icons.location}&nbsp; managlore
            </div>
            <div className="videos-details-cards-register-btn-cover">
              <div className="videos-details-cards-register-btn">Register</div>
            </div>
          </div>
        </div>
      </div>
      <div className="videos-details-former-text-main-cover">
        <div className="videos-details-former-text-top-border">
          <div className="videos-details-former-text-top-border-inner"></div>
        </div>
        <div className="videos-details-former-text-wrapper">
          <span>F</span>
          <span>A</span>
          <span className="text-r">R</span>
          <span>M</span>
          <span>E</span>
          <span className="text-r">R</span>
        </div>
        <div className="videos-details-former-text-student-cover">
          <span>From the students</span>
          <span>For the students</span>
          <span>To the students</span>
        </div>
        <div className="videos-details-former-text-join-btn-cover">
          <button className="videos-details-former-text-join-btn">
            Join Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VideoDetails;
