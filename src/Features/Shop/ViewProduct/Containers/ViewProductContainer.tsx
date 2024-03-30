import { useContext } from "react";
import ViewProduct from "../Components/ViewProduct";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useNavigate } from "react-router";

function ViewProductContainer() {
  const { productInfo, setProductInfo } = useContext(ShopContext);
  const navigate = useNavigate();
  const handleIncrementProduct = () => {
    setProductInfo((prev) => ({
      ...prev,
      productCount: prev.productCount + 1,
    }));
  };
  //handle decrementing product count
  const handleDecrementProduct = () => {
    setProductInfo((prev) => ({
      ...prev,
      productCount: prev.productCount - 1,
    }));
  };
  //navigate backward
  const handleBackButton = () => {
    navigate(-1);
  };
  //handle add to cart
  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    //yet to add to cart
    setProductInfo((prev) => ({
      ...prev,
      cartBasket: [],
    }));
  };
  return (
    <ViewProduct
      productInfo={productInfo}
      handleIncrementProduct={handleIncrementProduct}
      handleDecrementProduct={handleDecrementProduct}
      handleBackButton={handleBackButton}
      handleAddToCart={handleAddToCart}
    />
  );
}

export default ViewProductContainer;
