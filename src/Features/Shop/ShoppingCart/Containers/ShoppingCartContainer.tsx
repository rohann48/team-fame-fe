import { useContext } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useNavigate } from "react-router-dom";
import { CommonTypes } from "../../../Common/CommonTypes";
import { NotificationManager } from "react-notifications";

function ShoppingCartContainer() {
  const { productInfo, setProductInfo, products } = useContext(ShopContext);
  const navigate = useNavigate();

  //increment the product count
  const handleAddToCartIncrement = (
    index: number,
    prod: CommonTypes["product"]
  ) => {
    let isPresent = false;
    // if the item is already exists give error
    if (productInfo.cartBasket[index]?.id === prod._id) {
      isPresent = true;
    }
    if (isPresent) {
      NotificationManager.warning("Product already in cart", "", 2000);
    } else {
      setProductInfo((draft) => {
        draft.cartBasket.push({
          id: prod._id,
          name: prod.name,
          description: prod.details,
          imageInfo: prod.imageInfo,
          price: prod.price,
          quantityCount: 1,
        });
      });
      NotificationManager.success("Product added to cart", "", 2000);
    }
  };
  console.log("Product added to cart", productInfo.cartBasket);
  //navigate to view product
  const handleNavigateProduct = (prod: CommonTypes["product"]) => {
    navigate(`/shop/product/${prod._id}`);
  };
  return (
    <ShoppingCart
      handleAddToCartIncrement={handleAddToCartIncrement}
      handleNavigateProduct={handleNavigateProduct}
      products={products}
    />
  );
}

export default ShoppingCartContainer;
