import icons from "../../Assets/Icons/icons";
import images from "../../ImageVariables";
import "../SCSS/styles.scss";

const HomePage = () => {
  const array = [{}];
  return (
    <div className="home-page-container">
      <div className="home-page-cover">
        <div className="home-revolution-logo-cover">
          <div className="logo-and-btn-cover">
            <img
              className="logo-img"
              src={images.fameRevolutionLogo}
              alt="fameRevolutionLogo"
            />
            <button className="contact-us-btn">Contact us</button>
          </div>
        </div>
        <div className="home-four-icons-cover">
          <div className="education-logo-cover">
            <img
              src={images.educationLogo}
              alt="educationLogo"
              className="education-logo"
            />
            <p className="img-description">Education</p>
          </div>
          <div className="sports-logo-cover">
            <img
              src={images.sportsLogo}
              alt="sportsLogo"
              className="sports-logo"
            />
            <p className="img-description">Sports</p>
          </div>
          <div className="spirituality-logo-cover">
            <img
              src={images.spiritualityLogo}
              alt="spiritualityLogo"
              className="spirituality-logo"
            />
            <p className="img-description">Spirituality</p>
          </div>{" "}
          <div className="Politics-logo-cover">
            <img
              src={images.lawLogo}
              alt="Politics"
              className="Politics-logo"
            />
            <p className="img-description">Politics</p>
          </div>
        </div>
        <div className="home-about-us-cover">
          <div className="about-us-header">
            <div className="about-text">About</div>
            <div className="us-text">Us</div>
          </div>
          <div className="about-us-description">
            Education is not the learning of facts, but the training of the mind
            to think. The right kind of education is not concerned with any
            ideology, however much it may promise a future utopia it is not
            based on any system. The highest function of education is to bring
            about an integrated individual who is capable of dealing with life
            as a whole. From time immemorial, education continues to be the most
            integral aspect of any civilization. Over the years, it has adapted
            itself to the changing needs of time and to keep abreast with
            evolutionary changes and steering towards becoming a meaningful
            process and promoting lifelong learning. An education system that
            originated in the eastern world and continues to be a source of
            inspiration is the ancient Indian Gurukul System of Education.
          </div>
        </div>
        <div className="home-sponser-cover">add sponser here</div>

        <div className="home-mission-cover">
          <div className="mission-left-image-cover">
            <img
              src={images.missionHandImage}
              alt="missionHandImage"
              className="mission-img"
            />
          </div>
          <div className="mission-right-content-cover">
            <div className="mission-header-text">MISSION</div>
            <div className="flower-horizontal-img-cover">
              <img
                src={images.flowerHorizontal}
                alt="flowerHorizontal"
                className="flowerHorizontal-img"
              />
            </div>
            <div className="mission-content-cover">
              <div className="inverted-comma-img-cover">
                <img src={images.invertedCommas} alt="comma" />
              </div>
              <div className="mission-header-content-cover">
                <div className="mission-header">
                  <div className="line-one">Society is overripe for</div>
                  <div className="line-two"> a spiritual process</div>
                </div>
                <div className="mission-content">
                  Our fundamental mission is to offer the science of inner
                  wellbeing to every human being – a science that helps a person
                  realize the ultimate potential within. From this vision stem a
                  multitude of projects, programs, and methods, all towards the
                  same aim: to raise every human being to the peak of their
                  potential, so that they are exuberant, all-inclusive, and in
                  harmony within themselves and the world.
                </div>
              </div>
              <div className="comma-img-cover">
                <img src={images.comma} alt="comma" />
              </div>
            </div>
          </div>
        </div>
        <div className="home-vision-cover">
          <div className="vission-header">Vission</div>
          <p className="vission-description">तमसो मा ज्योतिर्गमय</p>
        </div>
        <div className="home-events-cover">
          <div className="event-title">Upcoming Events</div>
          <div className="cards-cover">
            {/* {card 1} */}
            <div className="cards">
              <div className="card-left-cover">
                <img
                  src={images.cardLabelSide}
                  alt="cardLabelSide"
                  className="card-label-side-img"
                />
              </div>
              <div className="card-right-cover">
                <div className="day">TOMORROW</div>
                <div className="marathon-img-cover">
                  <img src={images.logoBackground} className="marathon-img" />
                </div>
                <div className="marathon-header">Marathon event 2023</div>
                <div className="date-cover">
                  <span className="date-icon">{icons.date}</span>
                  <span className="date">DEC 20, 2023</span>
                </div>
                <div className="time-cover">
                  <span className="time-icon">{icons.clock}</span>
                  <span className="time">10:00 AM</span>
                </div>
                <div className="location-cover">
                  <span className="location-icon">{icons.location}</span>
                  <span className="location">
                    MANGALA STADIUM LADYHILL, MANGALORE 575006
                  </span>
                </div>{" "}
                <div className="contact-us-cover">
                  <button className="contact-us-btn">Contact us</button>
                </div>
              </div>
            </div>
            {/* {card 2} */}
            <div className="cards">
              <div className="card-left-cover">
                <img
                  src={images.cardLabelSide}
                  alt="cardLabelSide"
                  className="card-label-side-img"
                />
              </div>
              <div className="card-right-cover">
                <div className="day">TOMORROW</div>
                <div className="marathon-img-cover">
                  <img src={images.logoBackground} className="marathon-img" />
                </div>
                <div className="marathon-header">Marathon event 2023</div>
                <div className="date-cover">
                  <span className="date-icon">{icons.date}</span>
                  <span className="date">DEC 20, 2023</span>
                </div>
                <div className="time-cover">
                  <span className="time-icon">{icons.clock}</span>
                  <span className="time">10:00 AM</span>
                </div>
                <div className="location-cover">
                  <span className="location-icon">{icons.location}</span>
                  <span className="location">
                    MANGALA STADIUM LADYHILL, MANGALORE 575006
                  </span>
                </div>{" "}
                <div className="contact-us-cover">
                  <button className="contact-us-btn">Contact us</button>
                </div>
              </div>
            </div>
            {/* {card 3} */}
            <div className="cards">
              <div className="card-left-cover">
                <img
                  src={images.cardLabelSide}
                  alt="cardLabelSide"
                  className="card-label-side-img"
                />
              </div>
              <div className="card-right-cover">
                <div className="day">TOMORROW</div>
                <div className="marathon-img-cover">
                  <img src={images.logoBackground} className="marathon-img" />
                </div>
                <div className="marathon-header">Marathon event 2023</div>
                <div className="date-cover">
                  <span className="date-icon">{icons.date}</span>
                  <span className="date">DEC 20, 2023</span>
                </div>
                <div className="time-cover">
                  <span className="time-icon">{icons.clock}</span>
                  <span className="time">10:00 AM</span>
                </div>
                <div className="location-cover">
                  <span className="location-icon">{icons.location}</span>
                  <span className="location">
                    MANGALA STADIUM LADYHILL, MANGALORE 575006
                  </span>
                </div>{" "}
                <div className="contact-us-cover">
                  <button className="contact-us-btn">Contact us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-testimonial-cover">testissssmonial</div>
        <div className="home-videos-and-news-cover">vid/news</div>
        <div className="home-join-community-cover">join</div>
        <div className="home-footer-cover">footer</div>
      </div>
    </div>
  );
};

export default HomePage;
