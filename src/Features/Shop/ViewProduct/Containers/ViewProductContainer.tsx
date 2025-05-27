import { useContext, useEffect, useState } from "react";
import ViewProduct from "../Components/ViewProduct";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useNavigate, useParams } from "react-router-dom";
import { ApiHandler } from "../../Constants/ApiHandler";
import { ViewProductTypes } from "../ViewProductTypes";
import { NotificationManager } from "react-notifications";

function ViewProductContainer() {
  const { productInfo, setProductInfo } = useContext(ShopContext);
  const { productId } = useParams() as { productId: string };
  const navigate = useNavigate();
  // const viewedProduct: CommonTypes["product"] = location.state.product;
  const [viewedProduct, setViewedProduct] = useState<
    ViewProductTypes["viewedProduct"]
  >({} as ViewProductTypes["viewedProduct"]);
  const getProductInfo = async () => {
    const response = await ApiHandler.getProductDetails(productId);
    setViewedProduct({ ...response.results });
  };

  const handleIncrementProduct = () => {
    // let viewProductClone = { ...viewedProduct };
    // let i = 1;
    // ++i;
    // viewProductClone.price *= ++i;
    // console.log("viewProductClone", viewProductClone);
    // setViewedProduct({ ...viewProductClone });
    // setProductInfo((draft) => {
    //   draft.cartBasket.push({
    //     id: viewedProduct._id,
    //     name: viewedProduct.name,
    //     description: viewedProduct.details,
    //     imageInfo: viewedProduct.imageInfo,
    //     price: viewedProduct.price,
    //     quantityCount: i,
    //   });
    //   draft.cartTotalQuantity = i;
    //   draft.productCount = i;
    //   draft.catTotalAmount *= i;
    // });
  };

  //handle decrementing product count
  const handleDecrementProduct = () => {};
  //navigate backward
  const handleBackButton = () => {
    navigate(-1);
  };
  //handle add to cart
  const handleNavigateToCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    if (productId) {
      getProductInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);
  // //handle navigate to address page
  // const handleBuyNow = (productId: string) => {
  //   navigate(`/address/${productId}`);
  // };
  const handleBuyNow = (productId: string) => {
    // Set the product info in context before navigating
    if (viewedProduct && viewedProduct._id) {
      setProductInfo((prevState) => {
        // Check if product already exists in cart
        const existingProductIndex = prevState.cartBasket.findIndex(
          (item) => item.id === viewedProduct._id
        );

        let updatedCartBasket;

        if (existingProductIndex !== -1) {
          // Product exists, show warning and increment quantity
          NotificationManager.warning(
            `${viewedProduct.name} is already in your cart. Quantity increased by 1.`,
            "",
            3000
          );

          updatedCartBasket = [...prevState.cartBasket];
          const currentQuantity =
            updatedCartBasket[existingProductIndex].quantityCount || 0;
          updatedCartBasket[existingProductIndex] = {
            ...updatedCartBasket[existingProductIndex],
            quantityCount: currentQuantity + 1,
          };
        } else {
          // Product doesn't exist, add new product
          NotificationManager.success(
            `${viewedProduct.name} added to cart successfully!`,
            "",
            2000
          );

          const newProduct = {
            id: viewedProduct._id,
            name: viewedProduct.name,
            description: viewedProduct.details,
            imageInfo: viewedProduct.imageInfo,
            price: viewedProduct.price,
            quantityCount: 1,
            offers: (viewedProduct as any).offers || { cashback: 0 },
          };
          updatedCartBasket = [...prevState.cartBasket, newProduct];
        }

        // Calculate new total amount
        const newTotalAmount = updatedCartBasket.reduce((total, item) => {
          const quantity = item.quantityCount || 1;
          const itemTotal = item.price * quantity;
          return total + itemTotal;
        }, 0);

        return {
          ...prevState,
          cartBasket: updatedCartBasket,
          catTotalAmount: newTotalAmount,
        };
      });
    }

    // Navigate to address page
    navigate(`/address/${productId}`);
  };
  return (
    <ViewProduct
      productInfo={productInfo}
      handleIncrementProduct={handleIncrementProduct}
      handleDecrementProduct={handleDecrementProduct}
      handleBackButton={handleBackButton}
      handleNavigateToCart={handleNavigateToCart}
      viewedProduct={viewedProduct}
      handleBuyNow={handleBuyNow}
    />
  );
}

export default ViewProductContainer;
