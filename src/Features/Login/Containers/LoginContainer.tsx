import { useState, useContext, useEffect, useRef } from "react";
import LoginComponent from "../Components/Login";
import RippleEffect from "../../Common/functions/RippleEffect";
import { ApiHandler } from "../../Constants/ApiHandler";
import { useNavigate } from "react-router-dom";
import { GlobalUserContext } from "../../context/globalUserContext";
import { LoginContainerTypes } from "../LoginTypes";
import { NotificationManager } from "react-notifications";
const initialData = {
  email: "",
  password: "",
};
const errState = {
  emailErr: "",
  passwordErr: "",
};
function LoginContainer({ isLogin, isForgotPassword }: LoginContainerTypes) {
  const mainRef = useRef<HTMLDivElement>(null);
  // state maintained for input field color amd image changes
  const [colorChange, setColorChange] = useState({
    userName: false,
    password: false,
  });
  const [togglePassWord, setTogglePassword] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [errMsg, setErrMsg] = useState(errState);
  const { userInfo } = useContext(GlobalUserContext);
  const navigate = useNavigate();

  const handleColorChange = (type: "userName" | "password") => {
    setColorChange({ ...colorChange, [type]: true });
  };

  /**validating the email and password */
  function validateLogin() {
    /**checking the email password requirements */
    setErrMsg(errState);
    if (
      formData.email.length > 0 &&
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData.email
      ) &&
      formData.password.length > 0
    ) {
      setErrMsg(errState);
      return true;
    } else {
      if (!formData.password.length) {
        setErrMsg((prevState) => ({
          ...prevState,
          passwordErr: "Please enter your password",
        }));
      }
      if (!formData.email.length) {
        setErrMsg((prevState) => ({
          ...prevState,
          emailErr: "Please enter your email address",
        }));
      }
      if (formData.password.length > 0 && formData.email.length > 0) {
        setErrMsg((prevState) => ({
          ...prevState,
          emailErr: "Invalid email address",
        }));
      }
    }
  }
  // Outside click function for input field border color change
  useEffect(() => {
    function handleOutsideClick(event: any) {
      if (
        mainRef?.current &&
        mainRef?.current.querySelector(".input-mail-mail-icon") &&
        !mainRef.current
          .querySelector(".input-mail-mail-icon")!
          .contains(event.target)
      ) {
        setColorChange({ ...colorChange, userName: false });
      }
      if (
        mainRef?.current &&
        mainRef?.current.querySelector(".input-password-password-icon") &&
        !mainRef.current
          .querySelector(".input-password-password-icon")!
          .contains(event.target)
      ) {
        setColorChange({ ...colorChange, password: false });
      }
    }
    mainRef.current!.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**handle user log in */
  const handleUserLogin = async (e: any) => {
    e.preventDefault();
    // RippleEffect(".input-submit");
    // if (validateLogin()) {
    //   try {
    //     const signInResponse = await ApiHandler.authenticateUser(formData);
    //     if (signInResponse.results === "success") {
    //       window.location.href = "/action-plan";
    //     }
    //   } catch (error: any) {
    //     setErrMsg((prevState) => ({
    //       ...prevState,
    //       passwordErr: error.response.data.error.message || null,
    //     }));
    //   }
    // }
  };
  /**push the user from login if he has session */
  useEffect(() => {
    if (userInfo) {
      navigate("/action-plan");
    }
  }, [userInfo]);

  const handlePasswordView = (to: string) => {
    navigate(to);
  };
  /**function to validate email */
  function validateEmail() {
    setErrMsg(errState);
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData.email
      )
    ) {
      return true;
    } else {
      if (formData.email.length) {
        setErrMsg((prevState) => ({
          ...prevState,
          emailErr: "Please enter your email address",
        }));
      } else {
        setErrMsg((prevState) => ({
          ...prevState,
          emailErr: "Invalid email address",
        }));
      }
    }
  }
  const handleForgotPassword = async (e: any) => {
    e.preventDefault();
    RippleEffect(".input-submit");
    if (validateEmail()) {
      try {
        await ApiHandler.forgotPassword({
          email: formData.email,
        });
        setFormData(initialData);
        NotificationManager.success("Link sent succesfully", "", 2000);
      } catch (error: any) {
        setErrMsg((prevState) => ({
          ...prevState,
          emailErr: error.response.data.error.message || error.message,
        }));
      }
    }
  };
  console.log(errMsg);
  return (
    <LoginComponent
      togglePassWord={togglePassWord}
      formData={formData}
      errMsg={errMsg}
      setFormData={setFormData}
      handleUserLogin={handleUserLogin}
      isLogin={isLogin}
      isForgotPassword={isForgotPassword}
      handlePasswordView={handlePasswordView}
      handleForgotPassword={handleForgotPassword}
      mainRef={mainRef}
      colorChange={colorChange}
      handleColorChange={handleColorChange}
      setTogglePassword={setTogglePassword}
    />
  );
}
export default LoginContainer;
