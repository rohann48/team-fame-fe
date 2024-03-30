import "../SCSS/styles.css";
import { ShoppingCartTypes } from "../ShoppingCartTypes";
import images from "../../../ImageVariables";
import Footer from "../../../Common/CommonComponent/Footer";
import { NavLink } from "react-router-dom";
const products = [
  {
    id: 1,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 499,
    quantity: 1,
  },
  {
    id: 2,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 799,
    quantity: 1,
  },
  {
    id: 3,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 1099,
    quantity: 1,
  },
  {
    id: 4,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 499,
    quantity: 1,
  },
  {
    id: 5,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 799,
    quantity: 1,
  },
  {
    id: 6,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 1099,
    quantity: 1,
  },
  {
    id: 7,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 499,
    quantity: 1,
  },
  {
    id: 8,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 799,
    quantity: 1,
  },
  {
    id: 9,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 1099,
    quantity: 1,
  },
  {
    id: 10,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 499,
    quantity: 1,
  },
  {
    id: 11,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 799,
    quantity: 1,
  },
  {
    id: 12,
    imageUrl: images.chair,
    description:
      "Classmate Notebook - Single Line, 120 Pages, 240 mm x 180 mm (Pack of 10)",
    price: 1099,
    quantity: 1,
  },
];

function ShoppingCart({
  handleAddToCartIncrement,
  handleNavigateProduct,
}: ShoppingCartTypes) {
  return (
    <div className="shop-container">
      <div className="shop-img-cover">Store</div>
      <div className="shop-product-cover">
        <div className="shop-product-header">Product</div>
        <div className="shop-product-filter-and-cart-cover">
          <div className="filter-cover">
            <div className="sort-text">Sort By:</div>
            <div className="sort-drop-down">Feat</div>
          </div>
          <div className="go-to-cart-btn">Go to Cart</div>
        </div>

        <div className="product-card-cover">
          {products.map((prod, index) => (
            <div
              className="product-card"
              key={prod.id}
              onClick={() => handleNavigateProduct(prod)}
            >
              <img
                className="product-image"
                src={prod.imageUrl}
                alt="Product"
              />
              <div className="product-details">
                <p className="product-description">{prod.description}</p>

                <p className="product-price">₹ {prod.price}</p>
              </div>
              <div className="product-actions">
                <button
                  className="add-to-cart"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleAddToCartIncrement(event, index, prod);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="buy-now"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleNavigateProduct(prod);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="shop-view-more-cover">
          <img className="view-more-img" src={images.viewMore} alt="viewMore" />
          View More products
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
