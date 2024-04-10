import images from "../../../ImageVariables";
import Footer from "../../../Common/CommonComponent/Footer";
import "../SCSS/styles.css";
import { VideoCardsTypes } from "../VideoCardsTypes";

function VideoCards({ handleNavigateToVidDetails }: VideoCardsTypes) {
  return (
    <div className="video-cards-container">
      <div className="video-bg-img-cover"></div>
      <div className="video-cards-and-header-cover">
        <div className="video-cards-header-text">VIDEOS</div>
        <div className="video-cards-render-cover">
          <div className="video-cards-cover">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="video-cards"
                onClick={() => handleNavigateToVidDetails("123")}
              >
                <div className="video-cards-img">
                  <img
                    src={images.videoThumbnail}
                    className="video-thumbnail"
                  />
                </div>
                <div className="video-cards-content">
                  <div className="video-title">
                    Embracing the journey: Unraveling the life changing benefits
                    of running
                  </div>
                  <div className="video-para">
                    Explore the myriad health advantages that running offers,
                    from enhancing cardiovascular fitness...
                  </div>
                  <button className="video-btn">Read more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="video-former-text-main-cover">
        <div className="video-former-text-top-border">
          <div className="video-former-text-top-border-inner"></div>
        </div>
        <div className="video-former-text-wrapper">
          <span>F</span>
          <span>A</span>
          <span className="text-r">R</span>
          <span>M</span>
          <span>E</span>
          <span className="text-r">R</span>
        </div>
        <div className="video-former-text-student-cover">
          <span>From the students</span>
          <span>For the students</span>
          <span>To the students</span>
        </div>
        <div className="video-former-text-join-btn-cover">
          <button className="video-former-text-join-btn">Join Now</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default VideoCards;
