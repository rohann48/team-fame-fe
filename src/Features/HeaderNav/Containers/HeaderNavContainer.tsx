import { useContext, useState } from "react";
import HeaderNav from "../Components/HeaderNav";
import LoginComponent from "../../Login";
import SignUpModal from "../../SignUpModal";
import { LoginContext } from "../../context/LoginContext";
import { ShopContext } from "../../context/ShopContext/ShopContext";

function HeaderNavContainer() {
  const {
    loginInfo,
    setLoginInfo,
    handleLoginModalToggle,
    handleSignUpModalToggle,
  } = useContext(LoginContext);
  const { countInfo } = useContext(ShopContext);
  console.log("header", countInfo);
  //state maintained for active tabs
  const [activeTab, setActiveTab] = useState("home");
  return (
    <>
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLoginModalToggle={handleLoginModalToggle}
        handleSignUpModalToggle={handleSignUpModalToggle}
        countInfo={countInfo}
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
