import { useContext } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
function ShoppingCartContainer() {
  const { productCount, setProductCount } = useContext(ShopContext);
  const handleIncrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setProductCount((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  return <ShoppingCart handleIncrement={handleIncrement} />;
}

export default ShoppingCartContainer;
