import { useContext } from "react";
import ViewProduct from "../Components/ViewProduct";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useNavigate, useLocation } from "react-router";
import { CommonTypes } from "../../../Common/CommonTypes";

function ViewProductContainer() {
  const { productInfo, setProductInfo } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const viewedProduct: CommonTypes["product"] = location.state.product;

  const handleIncrementProduct = () => {};
  //handle decrementing product count
  const handleDecrementProduct = () => {};
  //navigate backward
  const handleBackButton = () => {
    navigate(-1);
  };
  //handle add to cart
  const handleAddToCart = () => {};
  return (
    <ViewProduct
      productInfo={productInfo}
      handleIncrementProduct={handleIncrementProduct}
      handleDecrementProduct={handleDecrementProduct}
      handleBackButton={handleBackButton}
      handleAddToCart={handleAddToCart}
      viewedProduct={viewedProduct}
    />
  );
}

export default ViewProductContainer;
