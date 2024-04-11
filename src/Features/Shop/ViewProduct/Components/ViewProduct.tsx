import icons from "../../../Assets/Icons/icons";
import Footer from "../../../Common/CommonComponent/Footer";
import images from "../../../ImageVariables";
import "../SCSS/styles.css";
import { ViewProductTypes } from "../ViewProductTypes";

function ViewProduct({
  productInfo,
  handleIncrementProduct,
  handleDecrementProduct,
  handleBackButton,
  handleNavigateToCart,
  viewedProduct,
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
          <img
            className="view-product-img"
            src={viewedProduct?.imageInfo && viewedProduct.imageInfo[0]?.path}
            alt="product"
          />
        </div>
        <div className="view-product-description-cover">
          <div className="view-product-description-wrapper">
            <p className="view-product-description">{viewedProduct.name}</p>
            <p className="view-product-description">{viewedProduct.details}</p>
            <p className="view-product-rate">Rs: {viewedProduct.price}</p>
            {/* <div className="view-product-action-btn-cover">
              <span>Qty:</span>
              <div className="action-btn-cover">
                <div
                  className="decrement-btn"
                  onClick={() =>
                    productInfo.productCount > 0 && handleDecrementProduct()
                  }
                >
                  -
                </div>
                <div className="product-quantity">1</div>
                <div
                  className="increment-btn"
                  onClick={() => handleIncrementProduct()}
                >
                  +
                </div>
              </div>
            </div> */}
            <div className="view-product-btn-covers">
              <button
                className="view-product cart-btn"
                onClick={() => handleNavigateToCart()}
              >
                GO TO CART
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
