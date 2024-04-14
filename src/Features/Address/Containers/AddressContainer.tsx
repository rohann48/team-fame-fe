import React from "react";
import Address from "../Components/Address";
import { useNavigate } from "react-router-dom";

function AddressContainer() {
  const navigate = useNavigate();
  //handle navigate to order successfully
  const handleNavigateToOrderSuccess = () => {
    navigate("/thankyou");
  };
  return (
    <Address handleNavigateToOrderSuccess={handleNavigateToOrderSuccess} />
  );
}

export default AddressContainer;
