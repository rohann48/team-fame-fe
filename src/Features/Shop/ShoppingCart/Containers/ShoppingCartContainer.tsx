import { useContext } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
function ShoppingCartContainer() {
  const { productCount, handleIncrement } = useContext(ShopContext);
  console.log(productCount, "ShoppingCartContainer");

  return <ShoppingCart handleIncrement={handleIncrement} />;
}

export default ShoppingCartContainer;
