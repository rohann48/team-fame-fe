import { useContext } from "react";
import ViewProduct from "../Components/ViewProduct";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useNavigate } from "react-router";

function ViewProductContainer() {
  const { productCount, setProductCount } = useContext(ShopContext);
  const navigate = useNavigate();
  const handleIncrement = () => {
    setProductCount((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  //handle decrementing product count
  const handleDecrement = () => {
    setProductCount((prev) => ({
      ...prev,
      count: prev.count - 1,
    }));
  };
  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <ViewProduct
      productCount={productCount}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleBackButton={handleBackButton}
    />
  );
}

export default ViewProductContainer;
