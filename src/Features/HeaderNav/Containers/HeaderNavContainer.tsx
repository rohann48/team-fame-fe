import { useState } from "react";
import HeaderNav from "../Components/HeaderNav";
import LoginComponent from "../../Login";
import SignUpModal from "../../SignUpModal";

function HeaderNavContainer() {
  //state maintained for active tabs
  const [activeTab, setActiveTab] = useState("home");
  //state maintained for toggling the login Modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  //handle toggle login modal
  const handleLoginModalToggle = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };
  //state maintained for toggling the sign up Modal
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  //handle toggle login modal
  const handleSignUpModalToggle = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
    setIsLoginModalOpen(false);
  };
  return (
    <>
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLoginModalToggle={handleLoginModalToggle}
        handleSignUpModalToggle={handleSignUpModalToggle}
      />
      {isLoginModalOpen && (
        <LoginComponent
          isLoginModalOpen={isLoginModalOpen}
          handleLoginModalToggle={handleLoginModalToggle}
          handleSignUpModalToggle={handleSignUpModalToggle}
        />
      )}
      {isSignUpModalOpen && (
        <SignUpModal
          isSignUpModalOpen={isSignUpModalOpen}
          handleSignUpModalToggle={handleSignUpModalToggle}
        />
      )}
    </>
  );
}
export default HeaderNavContainer;
