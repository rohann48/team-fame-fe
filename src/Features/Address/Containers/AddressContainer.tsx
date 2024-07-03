import React, { useContext } from "react";
import Address from "../Components/Address";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

function AddressContainer() {
  const navigate = useNavigate();
  const { setLoginInfo, loginInfo, isEdit, setIsEdit, userInfo, setUserInfo } =
    useContext(LoginContext);
  console.log(userInfo, "gsdgsd");
  //handle navigate to order successfully
  const handleNavigateToOrderSuccess = () => {
    navigate("/thankyou");
  };
  return (
    <Address handleNavigateToOrderSuccess={handleNavigateToOrderSuccess} />
  );
}

export default AddressContainer;
