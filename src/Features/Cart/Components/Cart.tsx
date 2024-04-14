import { NavLink } from "react-router-dom";
import icons from "../../Assets/Icons/icons";
import Footer from "../../Common/CommonComponent/Footer";
import images from "../../ImageVariables";
import { CartTypes } from "../CartTypes";
import "../SCSS/styles.css";

function Cart({
  handleBackButton,
  productInfo,
  handleNavigateShopPage,
  handleDecrementProduct,
  handleIncrementProduct,
  handleRemoveCart,
  handleNavigateAddressPage,
}: CartTypes) {
  return (
    <div className="cart-product-container">
      <div className="cart-product-back-btn-cover">
        <div
          className="cart-product-back-btn"
          onClick={() => handleBackButton()}
        >
          {icons.backBtn}
        </div>
        <div className="cart-product-back-text">Back</div>
      </div>
      <div className="cart-product-cover">
        {productInfo.cartBasket?.length > 0 ? (
          <div className="cart-product-main-wrapper">
            <div className="cart-product-header">YOUR CART</div>
            <div className="cart-product-render-cover">
              {productInfo.cartBasket.map((basket, index) => (
                <div
                  className="cart-product-render-outer-cover"
                  key={basket.id}
                >
                  <div className="cart-product-render-inner-cover">
                    <div className="cart-products-img-cover">
                      <img
                        className="cart-products-img"
                        src={basket.imageInfo[0]?.path}
                        alt="productImg"
                      />
                    </div>
                    <div className="cart-products-details-cover">
                      <div className="cart-product-title">{basket.name}</div>
                      <div className="cart-product-qty-cover">
                        <div className="cart-product-qty">
                          <div className="qty-text">Qty:</div>
                          <div className="cart-product-qty-btn">
                            <button
                              className="cart-product-qty-btn-minus"
                              onClick={() =>
                                basket.quantityCount! > 1 &&
                                handleDecrementProduct(index, basket)
                              }
                            >
                              -
                            </button>
                            <div className="cart-product-qty-num">
                              {basket.quantityCount}
                            </div>
                            <button
                              className="cart-product-qty-btn-add"
                              onClick={() =>
                                handleIncrementProduct(index, basket)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="cart-product-price-and-remove-cover">
                          <div className="cart-product-price-cover">
                            <span>Price:</span>
                            <span>Rs &nbsp;{basket.price}/-</span>
                          </div>
                          <div className="remove-from-cart-cover">
                            <button
                              className="remove-from-cart"
                              onClick={() => handleRemoveCart(index, basket.id)}
                            >
                              Remove from cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-price-cover">
              <div className="price-header">
                <div>Subtotal (inclusive of all taxes)</div>
                <div>Shipping</div>
                <div className="total">Order Total</div>
              </div>
              <div className="price-cover">
                <div>Rs:{productInfo.catTotalAmount}</div>
                <div>Rs:{0}</div>
                <div className="total">Rs:{productInfo.catTotalAmount}</div>
              </div>
            </div>
            <div className="cart-buy-now-cover">
              <button
                className="cart-buy-btn"
                onClick={() => handleNavigateAddressPage()}
              >
                Buy Now
              </button>
            </div>
          </div>
        ) : (
          <div className="empty-cart-cover">
            <div className="empty-cart-inner-cover">
              <div className="empty-cart-header">
                <h2>Your Cart is Empty</h2>
                <p>Start adding some products to your cart!</p>
              </div>
              <button
                className="go-to-shop-btn"
                onClick={() => handleNavigateShopPage()}
              >
                Go to Shopping
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
