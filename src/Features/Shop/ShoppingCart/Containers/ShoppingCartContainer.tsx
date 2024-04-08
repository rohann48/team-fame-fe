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
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
    prod: CommonTypes["product"]
  ) => {
    //increase quantityCount if the item is already exists
    setProductInfo((draft) => {
      if (draft.cartBasket[index]) {
        draft.cartBasket[index].quantityCount!++;
        draft.cartTotalQuantity++;
      } else {
        draft.cartBasket.push({
          id: prod._id,
          name: prod.name,
          description: prod.details,
          imageInfo: prod.imageInfo,
          price: prod.price,
          quantityCount: 1,
        });
      }
    });
    NotificationManager.success("Product added to cart", "", 2000);
  };
  console.log("shoppingCart", productInfo);

  //navigate to view product
  const handleNavigateProduct = (
    prod: CommonTypes["product"],
    index: number
  ) => {
    navigate(`/shop/product/${prod._id}`);
    setProductInfo((draft) => {
      draft.cartBasket.push({
        id: prod._id,
        name: prod.name,
        description: prod.details,
        imageInfo: prod.imageInfo,
        price: prod.price,
        quantityCount: 1,
      });
      draft.cartTotalQuantity = 1;
      draft.productCount = 1;
      draft.catTotalAmount = prod.price;
    });
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
