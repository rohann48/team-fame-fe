import icons from "../../Assets/Icons/icons";
import Footer from "../../Common/CommonComponent/Footer";
import images from "../../ImageVariables";
import "../SCSS/styles.css";

function Cart() {
  return (
    <div className="cart-product-container">
      <div className="cart-product-back-btn-cover">
        <div className="cart-product-back-btn">{icons.backBtn}</div>
        <div className="cart-product-back-text">Back</div>
      </div>
      <div className="cart-product-cover">
        <div className="cart-product-header">YOUR CART</div>
        {[1, 2, 3].map((ele) => (
          <div className="cart-products-inner-cover">
            <div className="cart-products-img-cover">
              <img className="cart-products-img" src={images.chair} />
            </div>
            <div className="cart-products-details-cover">
              <div className="cart-product-title">
                SATTVA Wooden Stools for Living Room Sitting Chair for Home
                Handcrafted Antique Finish | Handmade Table for Office | Home
                Furniture
              </div>
              <div className="cart-product-qty-cover">
                <div className="cart-product-qty">
                  <div className="qty-text">Qty:</div>
                  <div className="cart-product-qty-btn">
                    <button className="cart-product-qty-btn-add">+</button>
                    <div className="cart-product-qty-num">5</div>
                    <button className="cart-product-qty-btn-minus">-</button>
                  </div>
                </div>

                <div className="cart-product-price-and-remove-cover">
                  <div className="cart-product-price-cover">
                    <span>Price</span>
                    <span>Rs:{20000}/-</span>
                  </div>
                  <div className="remove-from-cart-cover">
                    <button className="remove-from-cart">
                      Remove from cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="cart-buy-now-cover">
          <button className="cart-buy-btn">Buy Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
