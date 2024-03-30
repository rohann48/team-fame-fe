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
  const handleAddToCart = () => {
    setProductInfo((prev) => ({
      ...prev,
      productCount: prev.productCount + 1,
      cartBasket: [
        ...prev.cartBasket,
        {
          id: Math.random(),
          price: 123,
          imageUrl: "test",
          description: "test",
        },
      ],
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
