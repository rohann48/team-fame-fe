import icons from "../../Assets/Icons/icons";
import Footer from "../../Common/CommonComponent/Footer";
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
        <div className="home-mission-cover">
          <img
            src={images.mission}
            alt="missionHandImage"
            className="mission-img"
          />
        </div>
        <div className="home-vision-cover">
          <div className="vission-header">Vission</div>
          <p className="vission-description">तमसो मा ज्योतिर्गमय</p>
        </div>
        <div className="home-testimonial-cover">
          <div className="testimonial-left">
            <div className="clients-logo-wrapper">
              <div className="clients-logo-wrapper-icon">
                <div className="img" style={{ width: "74px" }}>
                  <i>{icons.userIcon}</i>
                </div>
                <div className="author-name">
                  <span
                    style={{
                      marginLeft: "9%",
                    }}
                  >
                    {"kohli"}
                  </span>
                </div>
              </div>
              <div className="clients-logo-wrapper-author">
                <p className="para">
                  Short testimonial about the organization short testimonial
                  about the organization. short organization short testimonial
                  short testimonial organization short testimonial about the
                  about the organization short testimonial ab.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial-right"></div>
        </div>
        <div className="home-sponser-cover">
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="home-videos-and-news-cover">
          <div className="heading">Videos/News</div>
          <div className="cards-cover">
            {[1, 2, 3].map((i) => (
              <div className="cards">
                <div className="cards-img">
                  <img src={images.logoBackground} className="thumbnail" />
                </div>
                <div className="cards-content">
                  <div className="title">
                    Embracing the journey: Unraveling the life changing benefits
                    of running
                  </div>
                  <div className="para">
                    Explore the myriad health advantages that running offers,
                    from enhancing cardiovascular fitness...
                  </div>
                  <button className="btn">Play</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="home-join-community-cover">
          <div className="cover-line"></div>
          <div className="join-now-cover">
            <div className="join-now-title">Join Our Community</div>
            <div className="join-now-para">
              <p>Farmer join our community</p>
              <p>From the students, for the students, to the students</p>
            </div>
            <button className="join-now-btn">Join Now</button>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
