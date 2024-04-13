import { useContext, useEffect, useRef, useState } from "react";
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
    userInfo,
  } = useContext(LoginContext);
  const { productInfo } = useContext(ShopContext);
  //state maintained for active tabs
  const [activeTab, setActiveTab] = useState("home");
  //state maintained for toggling users profile
  const [isUserProf, setIsUserProf] = useState(false);
  //ref for showUserProf n logout outsideClick
  const outsideClickUserProf = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  //handle navigate to cart page
  const handleNavigateCart = () => {
    navigate("/cart");
  };
  //handle toggle user prof
  const handleToggleUserProfile = () => {
    setIsUserProf(!isUserProf);
  };
  //outside click for userProf n logout
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        outsideClickUserProf.current &&
        !outsideClickUserProf.current.contains(event.target as Node)
      ) {
        setIsUserProf(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  return (
    <>
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLoginModalToggle={handleLoginModalToggle}
        handleSignUpModalToggle={handleSignUpModalToggle}
        productInfo={productInfo}
        handleNavigateCart={handleNavigateCart}
        userInfo={userInfo}
        handleToggleUserProfile={handleToggleUserProfile}
        isUserProf={isUserProf}
        outsideClickUserProf={outsideClickUserProf}
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
