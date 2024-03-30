import { useContext } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import { ShopContext } from "../../../context/ShopContext/ShopContext";
import { useNavigate } from "react-router-dom";
import { CommonTypes } from "../../../Common/CommonTypes";
function ShoppingCartContainer() {
  const { productInfo, setProductInfo } = useContext(ShopContext);
  const navigate = useNavigate();

  //increment the product count
  const handleAddToCartIncrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
    prod: CommonTypes["product"]
  ) => {
    let tempData = structuredClone(productInfo);
    //increase quantityCount if the item is already exists
    setProductInfo((draft) => {
      if (draft.cartBasket[index]) {
        draft.cartBasket[index].quantityCount!++;
      } else {
        draft.cartBasket.push({
          id: prod.id,
          description: prod.description,
          imageUrl: prod.imageUrl,
          price: prod.price,
          quantityCount: 1,
        });
      }
    });
  };
  console.log(productInfo);

  //navigate to view product
  const handleNavigateProduct = () => {
    navigate("/shop/product");
  };
  return (
    <ShoppingCart
      handleAddToCartIncrement={handleAddToCartIncrement}
      handleNavigateProduct={handleNavigateProduct}
    />
  );
}

export default ShoppingCartContainer;
