import { useContext, useState } from "react";
import HeaderNav from "../Components/HeaderNav";
import LoginComponent from "../../Login";
import SignUpModal from "../../SignUpModal";
import { LoginContext } from "../../context/LoginContext";
import { ShopContext } from "../../context/ShopContext/ShopContext";
import { useNavigate } from "react-router-dom";

function HeaderNavContainer() {
  const {
    loginInfo,
    setLoginInfo,
    handleLoginModalToggle,
    handleSignUpModalToggle,
  } = useContext(LoginContext);
  const { productInfo } = useContext(ShopContext);
  //state maintained for active tabs
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  //handle navigate to cart page
  const handleNavigateCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLoginModalToggle={handleLoginModalToggle}
        handleSignUpModalToggle={handleSignUpModalToggle}
        productInfo={productInfo}
        handleNavigateCart={handleNavigateCart}
      />
      {loginInfo.isLoginModalOpen && (
        <LoginComponent
          isLoginModalOpen={loginInfo.isLoginModalOpen}
          handleLoginModalToggle={handleLoginModalToggle}
          handleSignUpModalToggle={handleSignUpModalToggle}
        />
      )}
      {loginInfo.isSignUpModalOpen && (
        <SignUpModal
          isSignUpModalOpen={loginInfo.isSignUpModalOpen}
          handleSignUpModalToggle={handleSignUpModalToggle}
        />
      )}
    </>
  );
}
export default HeaderNavContainer;
