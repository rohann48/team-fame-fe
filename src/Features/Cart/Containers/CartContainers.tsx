import React, { useContext, useEffect } from "react";
import Cart from "../Components/Cart";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext/ShopContext";
import { NotificationManager } from "react-notifications";
import { CartTypes, basketType } from "../CartTypes";
import { LoginContext } from "../../context/LoginContext";
import { ApiHandler } from "../../Constants/ApiHandler";

function CartContainers() {
  const navigate = useNavigate();
  const { productInfo, setProductInfo } = useContext(ShopContext);
  const { userInfo } = useContext(LoginContext);

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
    index,
    basket
  ) => {
    setProductInfo((draft) => {
      draft.cartBasket[index].quantityCount &&
        draft.cartBasket[index].quantityCount!++;
    });
    updateToCartInfo(basket, "++");
  };
  //decrement quantity
  const handleDecrementProduct: CartTypes["handleDecrementProduct"] = (
    index,
    basket
  ) => {
    setProductInfo((draft) => {
      draft.cartBasket[index].quantityCount &&
        draft.cartBasket[index].quantityCount!--;
    });
    updateToCartInfo(basket, "--");
  };

  //remove the product from cart
  const handleRemoveCart = async (index: number, prodId: string) => {
    await ApiHandler.removeProductFromCart(userInfo._id, prodId);
    setProductInfo((draft) => {
      draft.cartBasket.splice(index, 1);
    });
    NotificationManager.success(
      "Product Removed from cart successfully",
      "",
      2000
    );
  };

  const updateToCartInfo = async (basket: basketType, type: string) => {
    let count = basket.quantityCount!;
    const data = {
      products: {
        productId: basket.id,
        quantity: type === "++" ? ++count : --count,
      },
    };
    await ApiHandler.updateProdQuantity(userInfo._id, data);
  };
  //handle navigate to address page
  const handleNavigateAddressPage = () => {
    navigate("/cart/address");
  };

  return (
    <Cart
      handleBackButton={handleBackButton}
      productInfo={productInfo}
      handleNavigateShopPage={handleNavigateShopPage}
      handleIncrementProduct={handleIncrementProduct}
      handleDecrementProduct={handleDecrementProduct}
      handleRemoveCart={handleRemoveCart}
      handleNavigateAddressPage={handleNavigateAddressPage}
    />
  );
}

export default CartContainers;
