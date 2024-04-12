import { useContext, useEffect, useState } from "react";
import ViewProduct from "../Components/ViewProduct";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useNavigate, useParams } from "react-router-dom";
import { CommonTypes } from "../../../Common/CommonTypes";
import { ApiHandler } from "../../Constants/ApiHandler";
import { ViewProductTypes } from "../ViewProductTypes";

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

  return (
    <ViewProduct
      productInfo={productInfo}
      handleIncrementProduct={handleIncrementProduct}
      handleDecrementProduct={handleDecrementProduct}
      handleBackButton={handleBackButton}
      handleNavigateToCart={handleNavigateToCart}
      viewedProduct={viewedProduct}
    />
  );
}

export default ViewProductContainer;
