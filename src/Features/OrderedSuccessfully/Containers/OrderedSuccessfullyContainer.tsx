import { useNavigate } from "react-router-dom";
import OrderedSuccessfully from "../Components/OrderedSuccessfully";

function OrderedSuccessfullyContainer() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/shop");
  };
  return <OrderedSuccessfully handleNavigate={handleNavigate} />;
}

export default OrderedSuccessfullyContainer;
