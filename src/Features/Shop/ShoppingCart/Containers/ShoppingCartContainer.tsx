import { useContext } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useNavigate } from "react-router-dom";
import { CommonTypes } from "../../../Common/CommonTypes";
function ShoppingCartContainer() {
  const { productInfo, setProductInfo } = useContext(ShopContext);
  const navigate = useNavigate();

  //increment the product count
  const handleAddToCartIncrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    prod: CommonTypes["product"]
  ) => {
    setProductInfo((prev) => ({
      ...prev,
      cartBasket: [...prev.cartBasket, prod],
      productCount: prev.productCount + 1,
    }));
  };
  console.log(productInfo);
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
