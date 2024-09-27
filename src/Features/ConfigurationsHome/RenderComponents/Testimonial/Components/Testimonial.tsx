import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  const pageCount = Math.ceil(eventData.length / testimonialsPerPage);

  const displayedTestimonials = eventData.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount - 1));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="testimonial-container">
      <div className="add-testimonial-cover">
        <div className="add-testimonial-inner-cover">
          <div className="testimonial-header">TESTIMONIAL</div>
          <div className="add-testimonial-header">Add Testimonial</div>
          <div className="testimonial-input-field-cover">
            <div className="testimonial-input-field-img-cover">
              <div className="testimonial-logo-upload-img">
                <input type="file" className="file" />
                <div className="plus-img-cover">
                  <img src={images.AddProfilePhotoPlus} alt="add profile" />
                </div>
              </div>
              <div className="testimonial-btn-cover">
                <button className="cancel">Cancel</button>
                <button className="save" onClick={() => handleSave()}>
                  SAVE
                </button>
              </div>
            </div>
            <div className="testimonial-input-filed-cover">
              <div className="testimonial-name-cover">
                <label className="testimonial-label-cover">
                  <div className="testimonial-text">Name</div>
                  <input
                    className="testimonial-name-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "name")}
                    value={testimonialForms?.name}
                  />
                </label>
                <label className="testimonial-achievement-cover">
                  <div className="testimonial-text">
                    Person role/ achievement
                  </div>
                  <input
                    className="testimonial-title-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "achievement")}
                    value={testimonialForms.achievement}
                  />
                </label>
              </div>
              <div className="testimonial-description-cover">
                <label className="testimonial-description-cover">
                  <div className="testimonial-description">About Fame</div>
                  <textarea
                    className="testimonial-description-text-area"
                    onChange={(e) => handleChangeInputs(e, "about")}
                    value={testimonialForms.about}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-cards-cover">
        <div className="cards-testimonial-header">All Testimonials</div>
        <div className="cards-flex">
          {displayedTestimonials.map((testimonial: any, index: number) => {
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
                        className="card-testimonial-img"
                        src={images.videoThumbnail}
                        alt="testimonial"
                      />
                    </div>
                    <div className="card-testimonial-title">
                      {testimonial.title}
                    </div>
                    <div className="card-testimonial-date">
                      {icons.date} &nbsp; {testimonial.date}
                    </div>
                    <div className="card-testimonial-time">
                      {icons.clock}&nbsp; {testimonial.time}
                    </div>
                    <div className="card-testimonial-location">
                      {icons.location}&nbsp; {testimonial.location}
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

export default Testimonial;
