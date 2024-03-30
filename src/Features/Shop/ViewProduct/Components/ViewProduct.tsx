import icons from "../../../Assets/Icons/icons";
import Footer from "../../../Common/CommonComponent/Footer";
import images from "../../../ImageVariables";
import "../SCSS/styles.css";
import { ViewProductTypes } from "../ViewProductTypes";

function ViewProduct({
  countInfo,
  handleIncrementProduct,
  handleDecrementProduct,
  handleBackButton,
  handleAddToCart,
}: ViewProductTypes) {
  return (
    <div className="view-product-container">
      <div className="view-product-back-btn-cover">
        <div
          className="view-product-back-btn"
          onClick={() => handleBackButton()}
        >
          {icons.backBtn}
        </div>
        <div className="view-product-back-text">Back</div>
      </div>
      <div className="view-product-cover">
        <div className="view-product-img-cover">
          <img className="view-product-img" src={images.chair} alt="product" />
        </div>
        <div className="view-product-description-cover">
          <div className="view-product-description-wrapper">
            <p className="view-product-description">
              SATTVA Wooden Stools for Living Room Sitting Chair for Home
              Handcrafted Antique Finish | Handmade Table for Office | Home
              Furniture
            </p>
            <p className="view-product-rate">Rs: {500}</p>
            <div className="view-product-action-btn-cover">
              <span>Qty:</span>
              <div className="action-btn-cover">
                <div
                  className="decrement-btn"
                  onClick={() =>
                    countInfo.productCount > 0 && handleDecrementProduct()
                  }
                >
                  -
                </div>
                <div className="product-quantity">{countInfo.productCount}</div>
                <div
                  className="increment-btn"
                  onClick={() => handleIncrementProduct()}
                >
                  +
                </div>
              </div>
            </div>
            <div className="view-product-btn-covers">
              <button
                className="view-product cart-btn"
                onClick={(event) => handleAddToCart(event)}
              >
                ADD TO CART
              </button>
              <button className="view-product buy-btn">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewProduct;
