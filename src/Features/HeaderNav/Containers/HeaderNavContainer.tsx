import { useContext, useEffect, useRef, useState } from "react";
import HeaderNav from "../Components/HeaderNav";
import LoginComponent from "../../Login";
import SignUpModal from "../../SignUpModal";
import { LoginContext } from "../../context/LoginContext";
import { ShopContext } from "../../context/ShopContext/ShopContext";
import { useNavigate } from "react-router-dom";
import { ApiHandler } from "../../Constants/ApiHandler";
import { HeaderNavProps } from "../HeaderNavTypes";

function HeaderNavContainer() {
  const {
    loginInfo,
    setLoginInfo,
    handleLoginModalToggle,
    handleSignUpModalToggle,
    userInfo,
    isEdit,
    setIsEdit,
    setUserInfo,
  } = useContext(LoginContext);
  const { productInfo } = useContext(ShopContext);
  //state maintained for active tabs
  const [activeTab, setActiveTab] = useState("home");
  //state maintained for toggling users profile
  const [isUserProf, setIsUserProf] = useState(false);
  //state maintained for store user data
  const [singleUserInfo, setSingleUserInfo] = useState(
    {} as HeaderNavProps["singleUserInfo"]
  );
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
  //handle edit user profile
  const handleEditUserProfile = () => {
    setIsEdit(true);
    setLoginInfo((prev) => {
      return {
        ...prev,
        isLoginModalOpen: false,
        isSignUpModalOpen: !prev.isSignUpModalOpen,
      };
    });
  };
  //get user info
  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await ApiHandler.getUserInfo(userInfo._id);
      setSingleUserInfo({ ...response.results });
    };

    if (userInfo._id) {
      fetchUserInfo();
    }
  }, [userInfo._id]);

  const logoutUser = async (userId: string) => {
    try {
      if (userId) {
        const logoutResult = await ApiHandler.logoutUser();
        if (logoutResult?.status) {
          let href;
          if (logoutResult?.redirect) href = logoutResult.redirect;
          else href = "/";
          sessionStorage.clear();
          window.location.href = href;
        }
      } else {
        setLoginInfo((prev) => {
          return {
            ...prev,
            isLoginModalOpen: !prev.isLoginModalOpen,
            isSignUpModalOpen: false,
          };
        });
      }
    } catch (error) {
      // NotificationManager.warning(error.message, "", 2000);
    }
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
        userInfo={userInfo}
        handleToggleUserProfile={handleToggleUserProfile}
        isUserProf={isUserProf}
        outsideClickUserProf={outsideClickUserProf}
        handleEditUserProfile={handleEditUserProfile}
        singleUserInfo={singleUserInfo}
        logoutUser={logoutUser}
      />
      {loginInfo.isLoginModalOpen && (
        <LoginComponent
          isLoginModalOpen={loginInfo.isLoginModalOpen}
          handleLoginModalToggle={handleLoginModalToggle}
          handleSignUpModalToggle={handleSignUpModalToggle}
          setUserInfo={setUserInfo}
        />
      )}
      {(loginInfo.isSignUpModalOpen || isEdit) && (
        <SignUpModal
          isSignUpModalOpen={loginInfo.isSignUpModalOpen}
          handleSignUpModalToggle={handleSignUpModalToggle}
          singleUserInfo={singleUserInfo}
          setSingleUserInfo={setSingleUserInfo}
        />
      )}
    </>
  );
}
export default HeaderNavContainer;
