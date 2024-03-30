import { useContext } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useNavigate } from "react-router-dom";
function ShoppingCartContainer() {
  const { countInfo, setCountInfo } = useContext(ShopContext);
  const navigate = useNavigate();

  //increment the product count
  const handleAddToCartIncrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCountInfo((prev) => ({
      ...prev,
      addToCartCount: prev.addToCartCount + 1,
    }));
  };
  //navigate to view product
  const handleNavigateProduct = () => {
    navigate("/shop/product");
  };
  return (
    <ShoppingCart
      handleAddToCartIncrement={handleAddToCartIncrement}
      handleNavigateProduct={handleNavigateProduct}
    />
  );
}

export default ShoppingCartContainer;
