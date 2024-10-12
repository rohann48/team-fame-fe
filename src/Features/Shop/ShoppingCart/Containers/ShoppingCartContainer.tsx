import { useContext, useEffect, useState } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useLocation, useNavigate } from "react-router-dom";
import { CommonTypes } from "../../../Common/CommonTypes";
import { NotificationManager } from "react-notifications";
import { ApiHandler } from "../../Constants/ApiHandler";
import { LoginContext } from "../../../context/LoginContext";

function ShoppingCartContainer() {
  const {
    productInfo,
    setProductInfo,
    products,
    categoryData,
    setProducts,
    tempProducts,
    setTempProducts,
  } = useContext(ShopContext);
  const { userInfo } = useContext(LoginContext);
  // console.log("prod", products, tempProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();
  //increment the product count

  const handleAddToCartIncrement = (
    index: number,
    prod: CommonTypes["product"]
  ) => {
    let isPresent = false;
    // if the item is already exists give error
    if (productInfo.cartBasket?.[index]?.id === prod._id) {
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
          offers: prod.offers,
        });
      });
      addToCart(prod._id);
      NotificationManager.success("Product added to cart", "", 2000);
    }
  };

  //navigate to view product
  const handleNavigateProduct = (prod: CommonTypes["product"]) => {
    navigate(`/shop/product/${prod._id}`);
  };

  useEffect(() => {
    if (userInfo?._id && userInfo.membership === false) {
      onSelectChange("books");
    } else {
      setSelectedCategory("all");
    }
  }, [products]);

  const addToCart = async (prodId: string) => {
    const data = {
      clientId: userInfo._id,
      products: { productId: prodId, quantity: 1 },
      isInCart: true,
    };
    await ApiHandler.addToCart(data);
  };

  const onSelectChange = (category: string) => {
    setSelectedCategory(category);
    if (category !== "all") {
      const newProduct = products.filter((ele) => ele.category === category);
      setTempProducts([...newProduct]);
    } else {
      setProducts([...products]);
      setTempProducts([...products]);
    }
  };
  return (
    <ShoppingCart
      handleAddToCartIncrement={handleAddToCartIncrement}
      handleNavigateProduct={handleNavigateProduct}
      products={tempProducts}
      categoryData={categoryData}
      onSelectChange={onSelectChange}
      userInfo={userInfo}
      selectedCategory={selectedCategory}
    />
  );
}

export default ShoppingCartContainer;
