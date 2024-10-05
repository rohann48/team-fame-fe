import React, { useState } from "react";
import icons from "../../../../Assets/Icons/icons";
import images from "../../../../ImageVariables";
import { TestimonialComponentProps } from "../TestimonialTypes";
import "../SCSS/styles.css";
import Tippy from "@tippyjs/react";

function Testimonial({
  handleChangeInputs,
  testimonialForms,
  handleSave,
  testiMonials,
  handleChangeFile,
  uploadedFile,
  handleCancel,
  confirmDeleteTestimonial,
}: TestimonialComponentProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 5;

  const pageCount = Math.ceil(testiMonials.length / testimonialsPerPage);

  const displayedTestimonials = testiMonials.slice(
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
                <Tippy
                  content={`Uploaded files: ${uploadedFile?.length ?? 0}`}
                  theme="light"
                  placement="right"
                >
                  <input
                    type="file"
                    className="file"
                    onChange={(e) => handleChangeFile(e)}
                  />
                </Tippy>
                <div className="plus-img-cover">
                  <img src={images.userProfile} alt="add profile" />
                </div>
              </div>
              <div className="testimonial-btn-cover">
                <button className="cancel" onClick={() => handleCancel()}>
                  Cancel
                </button>
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
                    value={testimonialForms.name}
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
                <label>
                  <div className="testimonial-description">About</div>
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
      <div className="testimonial-table-cover">
        <div className="table-testimonial-header">All Testimonials</div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role/Achievement</th>
                <th>About</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedTestimonials.map((testimonial, index) => (
                <tr key={index}>
                  <td>{testimonial.name}</td>
                  <td>{testimonial.achievement}</td>
                  <td className="about">{testimonial.about}</td>
                  <td>
                    {testimonial.imageInfo.length > 0 ? (
                      <details>
                        <summary>
                          {testimonial.imageInfo.length} image(s)
                        </summary>
                        <ul>
                          {testimonial.imageInfo.map((img, imgIndex) => (
                            <li key={imgIndex}>
                              <img src={images.pdfDownload} alt="img" />
                              <div>{img.name}</div>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td>
                    <button className="edit-btn" disabled>
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        confirmDeleteTestimonial(
                          testimonial._id,
                          testimonial.imageInfo[0]?.Key || "",
                          index
                        )
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
