import { useContext } from "react";
import ViewProduct from "../Components/ViewProduct";
import { ShopContext } from "../../../context/ShopContext/ShopContext";

function ViewProductContainer() {
  const { productCount, handleIncrement, handleDecrement } =
    useContext(ShopContext);
  return (
    <ViewProduct
      productCount={productCount}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
}

export default ViewProductContainer;
