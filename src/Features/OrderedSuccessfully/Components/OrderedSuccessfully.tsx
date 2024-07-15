import images from "../../ImageVariables";
import { OrderSuccessFullyTypes } from "../OrderSuccessFullyTypes";
import "../SCSS/styles.css";

function OrderedSuccessfully({ handleNavigate }: OrderSuccessFullyTypes) {
  return (
    <div className="order-page-main-container">
      <div className="order-page-main-wrapper">
        <div className="order-page-svg-cover">
          <div className="order-page-svg-wrapper">
            <img
              className="order-page-img"
              src={images.PageNotFound}
              alt="order-page"
            />
          </div>
        </div>
        <div className="order-page-header-description-cover">
          <div className="order-page-header-text-wrapper">
            <div className="order-page-description-text-cover">
              <p className="order-page-description">ORDERED SUCCESSFULLY</p>
            </div>
            <div className="order-page-header-text-cover">
              <h3 className="order-page-header">
                Any queries on your order please contact +91 9843568430
              </h3>
            </div>
          </div>
          <div className="back-store-cover">
            <button className="back-store-btn" onClick={() => handleNavigate()}>
              Back to Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderedSuccessfully;
