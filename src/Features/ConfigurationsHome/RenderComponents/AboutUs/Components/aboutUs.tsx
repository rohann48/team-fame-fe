import "../SCSS/styles.scss";
import { aboutUsType } from "../aboutUsTypes";

const AboutUs = ({
  aboutUsData,
  postAboutData,
  handleOnChange,
}: aboutUsType) => {
  return (
    <div className="aboutus-page-container">
      <div className="aboutus-page-cover">
        <div className="aboutus-page-title">About Us</div>
        <div className="aboutus-page-textarea">
          <textarea
            cols={157}
            rows={12}
            value={aboutUsData?.content!}
            onChange={(e) => handleOnChange(e.target.value)}
          />
        </div>
        <div className="aboutus-page-buttons">
          <button type="button" className="cancel">
            Cancel
          </button>
          <button
            type="button"
            className="save"
            onClick={() => postAboutData()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
