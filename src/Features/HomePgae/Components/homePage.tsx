import { format, parseISO } from "date-fns";
import icons from "../../Assets/Icons/icons";
import Footer from "../../Common/CommonComponent/Footer";
import images from "../../ImageVariables";
import "../SCSS/styles.scss";
import { homePageTypes } from "../homePageTyypes";
import { NavLink } from "react-router-dom";

const HomePage = ({
  aboutUsData,
  eventData,
  testimonialData,
  handleNavigateEventCard,
  handleNavigateVideoCard,
  allVideos,
  goToPreviousTestimonial,
  goToNextTestimonial,
  currentIndex,
}: homePageTypes) => {
  return (
    <div className="home-page-container">
      <div className="home-page-cover">
        <div className="home-revolution-logo-cover">
          <img
            className="home-revolution-logo"
            src={images.logoBackground}
            alt="fameRevolutionBackground"
            height={"100%"}
          />
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
            <div className="about-text">ABOUT</div>
            <div className="us-text">US</div>
          </div>
          <div className="about-us-description">
            {aboutUsData?.content}
            {/* Education is not the learning of facts, but the training of the mind
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
            inspiration is the ancient Indian Gurukul System of Education. */}
          </div>
        </div>
        <div className="home-events-cover">
          <div className="event-title">Upcoming Events</div>
          <div className="cards-cover">
            {eventData?.length > 0 &&
              eventData?.slice(0, 3)?.map((event) => {
                return (
                  <div className="cards" key={event._id}>
                    <div className="card-left-cover">
                      <img
                        src={images.cardLabelSide}
                        alt="cardLabelSide"
                        className="card-label-side-img"
                      />
                    </div>
                    <div
                      className="card-right-cover"
                      onClick={() => handleNavigateEventCard(event._id)}
                    >
                      <div className="day">TOMORROW</div>
                      <div className="marathon-img-cover">
                        <img
                          src={images.logoBackground}
                          className="marathon-img"
                        />
                      </div>
                      <div className="marathon-header">{event.title}</div>
                      <div className="date-cover">
                        <span className="date-icon">{icons.date}</span>
                        <span className="date">
                          {event &&
                            format(parseISO(event?.date), "dd-MMM-yyyy")}
                        </span>
                      </div>
                      <div className="time-cover">
                        <span className="time-icon">{icons.clock}</span>
                        <span className="time">{event.time} AM</span>
                      </div>
                      <div className="location-cover">
                        <span className="location-icon">{icons.location}</span>
                        <span className="location">{event.location}</span>
                      </div>{" "}
                      <div className="contact-us-cover">
                        <button className="contact-us-btn">Contact us</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/* <div className="event-mom-logo-cover">
              <img src={images.eventMom} alt="event" />
            </div> */}
            {eventData?.length > 3 ? (
              <div className="view-all-card">
                <div className="left-cover">
                  <img
                    src={images.cardLabelSide}
                    alt="cardLabelSide"
                    className="label-side-img"
                  />
                </div>
                <div className="right-cover">
                  <NavLink
                    to="events-and-news"
                    className="events-and-news-nav-link"
                  >
                    <div className="view-all-btn">View All</div>
                  </NavLink>
                </div>
              </div>
            ) : null}
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
          {testimonialData?.length > 0 && (
            <div className="home-testimonial-cover">
              <div
                className="testimonial-container"
                key={testimonialData?.[currentIndex]?._id}
              >
                <div className="testimonial-content">
                  <img
                    src={images.testimonial}
                    alt={"testimonial"}
                    className="testimonial-image"
                  />
                  <div className="testimonial-text">
                    <p>{testimonialData?.[currentIndex]?.name}</p>
                  </div>
                </div>
                <div className="testimonial-navigation">
                  <div className="testimonial-author">
                    <h3>{testimonialData?.[currentIndex]?.about}</h3>
                    <p>{testimonialData?.[currentIndex]?.achievement}</p>
                  </div>
                  <div className="action-btn-cover">
                    <button
                      className="nav-button"
                      onClick={() => goToPreviousTestimonial()}
                    >
                      {"<"}
                    </button>
                    <button
                      className="nav-button"
                      onClick={() => goToNextTestimonial()}
                    >
                      {">"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="home-sponser-cover">
            <div className="slider">
              <div className="slide-track">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                  (_, i) => (
                    <div className="slide" key={i}>
                      <img
                        src={i % 2 === 0 ? images.birlaLogo : images.jewLogo}
                        alt=""
                      />
                    </div>
                  )
                )}

                {/* <div className="slide">
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
                </div> */}
              </div>
            </div>
          </div>

          {/* <div className="home-videos-and-news-cover">
            <div className="heading">Videos</div>
            <div className="cards-cover">
              {allVideos?.slice(0, 3)?.map((videos, index) => (
                <div
                  key={videos.id}
                  className="cards"
                  onClick={() => handleNavigateVideoCard(videos.id)}
                >
                  <div className="cards-img">
                    <img src={images.videoThumbnail} className="thumbnail" />
                  </div>
                  <div className="cards-content">
                    <div className="title">{videos.title}</div>
                    <div className="para">{videos.description}</div>
                    <button className="btn">Read more</button>
                  </div>
                </div>
              ))}
              {allVideos?.length > 3 && (
                <div className="view-all-video-card">
                  <NavLink to="videos" className="view-all-video-nav-link">
                    <div className="view-all-video-btn">View All</div>
                  </NavLink>
                </div>
              )}
            </div>
          </div> */}
          <div className="home-join-community-cover">
            <div className="cover-line"></div>
            <div className="join-now-cover">
              <div className="join-now-title">
                FA<span>R</span>ME<span>R</span>
              </div>
              <div className="join-now-para">
                {/* <p>Farmer join our community</p> */}
                <p>From the students ; for the students ; to the students</p>
              </div>
              <button className="join-now-btn">Join Now</button>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
