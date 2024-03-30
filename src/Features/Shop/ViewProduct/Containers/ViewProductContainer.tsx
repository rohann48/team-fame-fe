import { useContext } from "react";
import ViewProduct from "../Components/ViewProduct";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useNavigate } from "react-router";

function ViewProductContainer() {
  const { countInfo, setCountInfo } = useContext(ShopContext);
  const navigate = useNavigate();
  const handleIncrementProduct = () => {
    setCountInfo((prev) => ({
      ...prev,
      productCount: prev.productCount + 1,
      addToCartCount: prev.addToCartCount + 1,
    }));
  };
  //handle decrementing product count
  const handleDecrementProduct = () => {
    setCountInfo((prev) => ({
      ...prev,
      productCount: prev.productCount - 1,
      addToCartCount: prev.addToCartCount - 1,
    }));
  };
  //navigate backward
  const handleBackButton = () => {
    navigate(-1);
  };
  //handle add to cart
  const handleAddToCart = () => {
    setCountInfo((prev) => ({
      ...prev,
      addToCartCount: prev.addToCartCount + 1,
    }));
  };
  return (
    <ViewProduct
      countInfo={countInfo}
      handleIncrementProduct={handleIncrementProduct}
      handleDecrementProduct={handleDecrementProduct}
      handleBackButton={handleBackButton}
      handleAddToCart={handleAddToCart}
    />
  );
}

export default ViewProductContainer;
