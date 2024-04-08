import icons from "../../../../Assets/Icons/icons";
import images from "../../../../ImageVariables";
import { ShopComponentProps } from "../shopTypes";
import "../SCSS/styles.css";

function Shop({
  handleChangeInputs,
  productDetails,
  handleSave,
  products,
}: ShopComponentProps) {
  return (
    <div className="products-container">
      <div className="add-product-cover">
        <div className="add-product-inner-cover">
          <div className="product-header">SHOP</div>
          <div className="add-product-header">Add Product</div>
          <div className="product-input-field-cover">
            <div className="product-input-field-img-cover">
              <div className="product-logo-upload-img">
                <input
                  type="file"
                  className="file"
                  onChange={(e) => handleChangeInputs(e, "image")}
                />
                <div className="plus-img-cover">
                  <img src={images.AddProfilePhotoPlus} alt="add profile" />
                </div>
              </div>
              <div className="products-btn-cover">
                <button className="cancel">Cancel</button>
                <button className="save" onClick={() => handleSave()}>
                  SAVE
                </button>
              </div>
            </div>
            <div className="products-input-filed-cover">
              <div className="product-name-cover">
                <label className="product-label-cover">
                  <div className="product-text">Name</div>
                  <input
                    className="product-name-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "name")}
                    value={productDetails?.name}
                  />
                </label>
                {/* <label className="product-date-cover">
                  <div className="product-date">product Date</div>
                  <input
                    className="product-date-input"
                    type="date"
                    onChange={(e) => handleChangeInputs(e, "date")}
                    value={productForms.date}
                  />
                </label> */}
                <label className="product-achievement-cover">
                  <div className="product-text">Category</div>
                  <input
                    className="product-title-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "category")}
                    value={productDetails.category}
                  />
                </label>
              </div>
              <div>
                <label className="product-amount-cover">
                  <div className="product-text">Price</div>
                  <input
                    className="product-amount-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "price")}
                    value={productDetails.price}
                  />
                </label>
              </div>
              <div className="product-description-cover">
                <label className="product-description-cover">
                  <div className="product-description">Description</div>
                  <textarea
                    className="product-description-text-area"
                    onChange={(e) => handleChangeInputs(e, "details")}
                    value={productDetails.details}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-cards-cover">
        <div className="cards-product-header">All Products</div>
        <div className="">
          {products?.map((product: any) => {
            return (
              <table width={"100%"}>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{product.category}</td>
                    <td>{product.name}</td>
                    <td className="description">{product.details}</td>
                    <td>{product.price}</td>
                    <td>{"delete/edit"}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
