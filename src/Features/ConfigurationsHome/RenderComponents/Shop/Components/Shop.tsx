import React from "react";
import icons from "../../../../Assets/Icons/icons";
import images from "../../../../ImageVariables";
import "../SCSS/styles.css";
import { ShopComponentProps } from "../shopTypes";

const Shop = ({
  handleChangeInputs,
  productDetails,
  handleSave,
  products,
  confirmDeleteThreadFile,
}: ShopComponentProps) => {
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
                <button className="save" onClick={handleSave}>
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
                    value={productDetails?.name || ""}
                  />
                </label>
                <label className="product-achievement-cover">
                  <div className="product-text">Category</div>
                  <input
                    className="product-title-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "category")}
                    value={productDetails?.category || ""}
                  />
                </label>
              </div>
              <div className="product-name-cover">
                {/* <label className="product-amount-cover">
                  <div className="product-text">Price</div>
                  <input
                    className="product-amount-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "price")}
                    value={productDetails?.price || ""}
                  />
                </label>
                <label>
                  <div className="product-description">Cashback</div>
                  <textarea
                    className="product-description-text-area"
                    onChange={(e) => handleChangeInputs(e, "cashback")}
                    // value={productDetails?.details || ""}
                  /> */}
                {/* </label> */}
                {/* <div className="product-name-cover"> */}
                <label className="product-label-cover">
                  <div className="product-text">Price</div>
                  <input
                    className="product-amount-input"
                    type="text"
                    onChange={(e) => handleChangeInputs(e, "price")}
                    value={productDetails?.price || ""}
                  />
                </label>
                <label className="product-achievement-cover">
                  <div className="product-text">Cashback</div>
                  <input
                    type="number"
                    className="product-description-text-area"
                    onChange={(e) => handleChangeInputs(e, "cashback")}
                    // value={productDetails?.details || ""}
                  />
                </label>
                {/* </div> */}
              </div>
              <div className="product-description-cover">
                <label>
                  <div className="product-description">Description</div>
                  <textarea
                    className="product-description-text-area"
                    onChange={(e) => handleChangeInputs(e, "details")}
                    value={productDetails?.details || ""}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-cards-cover">
        <div className="cards-product-header">All Products</div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Cashback</th>
                <th>Images</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={index}>
                  <td>{product.category}</td>
                  <td>{product.name}</td>
                  <td className="description">{product.details}</td>
                  <td>{product.price}</td>
                  <td>
                    {product?.offers?.cashback || "-"}
                    {product?.offers?.cashback ? "%" : ""}
                  </td>
                  <td>
                    {product.imageInfo.length > 0 ? (
                      <details>
                        <summary>{product.imageInfo.length} image(s)</summary>
                        <ul>
                          {product.imageInfo.map((img, imgIndex) => (
                            <li key={imgIndex}>
                              <img src={images.pdfDownload} alt="img" />
                              <div>{img.name}</div>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      "No images"
                    )}
                  </td>
                  <td>
                    <button className="edit-btn" disabled>
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        confirmDeleteThreadFile(
                          product._id,
                          product.imageInfo[0]?.Key || "",
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
      </div>
    </div>
  );
};

export default Shop;
