import React, { useContext, useEffect } from "react";
import Cart from "../Components/Cart";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext/ShopContext";
import { NotificationManager } from "react-notifications";
import { CartTypes } from "../CartTypes";

function CartContainers() {
  const navigate = useNavigate();
  const { productInfo, setProductInfo } = useContext(ShopContext);
  //navigate backward
  const handleBackButton = () => {
    navigate(-1);
  };
  const handleNavigateShopPage = () => {
    navigate("/shop");
  };
  //calculate the price of the products
  useEffect(() => {
    setProductInfo((draft) => {
      draft.catTotalAmount = productInfo.cartBasket.reduce((acc, curr) => {
        return acc + curr.price * curr.quantityCount!;
      }, 0);
    });
  }, [productInfo]);

  //increment quantity
  const handleIncrementProduct: CartTypes["handleIncrementProduct"] = (
    index
  ) => {
    setProductInfo((draft) => {
      draft.cartBasket[index].quantityCount &&
        draft.cartBasket[index].quantityCount!++;
    });
  };
  //decrement quantity
  const handleDecrementProduct: CartTypes["handleDecrementProduct"] = (
    index
  ) => {
    setProductInfo((draft) => {
      draft.cartBasket[index].quantityCount &&
        draft.cartBasket[index].quantityCount!--;
    });
  };

  //remove the product from cart
  const handleRemoveCart = (index: number) => {
    setProductInfo((draft) => {
      draft.cartBasket.splice(index, 1);
    });
    NotificationManager.success(
      "Product Removed from cart successfully",
      "",
      2000
    );
  };
  return (
    <Cart
      handleBackButton={handleBackButton}
      productInfo={productInfo}
      handleNavigateShopPage={handleNavigateShopPage}
      handleIncrementProduct={handleIncrementProduct}
      handleDecrementProduct={handleDecrementProduct}
      handleRemoveCart={handleRemoveCart}
    />
  );
}

export default CartContainers;
