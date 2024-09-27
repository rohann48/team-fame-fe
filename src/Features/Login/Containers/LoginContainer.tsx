import { useState, useContext, useEffect, useRef } from "react";
import LoginComponent from "../Components/Login";
import { LoginContainerTypes } from "../LoginTypes";
import { NotificationManager } from "react-notifications";
import { ApiHandler } from "../../Constants/ApiHandler";
import bcrypt from "bcryptjs";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { handleErrorResponse } from "../../Common/CommonFunctions/CommonErrorHandler";
import { Notify } from "../../Common/Notify/NotificationMessages";

const initialData = {
  contactNo: "",
  password: "",
};
const errState = {
  emailErr: "",
  passwordErr: "",
};
function LoginContainer({
  isLoginModalOpen,
  handleLoginModalToggle,
  handleSignUpModalToggle,
  setUserInfo,
}: LoginContainerTypes) {
  const [loginData, setLoginData] = useState({ ...initialData });
  const { setLoginInfo, loginInfo } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const authenticateUser = async () => {
    if (!loginData.contactNo || !loginData.password) {
      return NotificationManager.warning(
        "Please fill all the fields",
        "",
        2000
      );
    } else {
      try {
        // const saltRounds = 10; // Number of salt rounds for bcrypt
        // const hashedPassword = bcrypt.hashSync(loginData.password, saltRounds);
        const data = {
          contactNo: loginData.contactNo,
          password: loginData.password,
        };
        const res = await ApiHandler.authenticateUser(data);
        setLoginInfo({
          ...loginInfo,
          isLoginModalOpen: false,
          isAuthenticated: true,
        });
        setUserInfo(res.results);
        sessionStorage.setItem("userInfo", JSON.stringify(res.results));
        if (!res.results.membership) {
          navigate("/shop");
        }
      } catch (error) {
        try {
          handleErrorResponse(error, navigate);
        } catch (error: any) {
          NotificationManager.warning(
            error?.response?.data?.message ||
              error?.response?.data?.error?.message ||
              Notify.DEFAULT
          );
        }
      }
    }
  };
  return (
    <LoginComponent
      isLoginModalOpen={isLoginModalOpen}
      handleLoginModalToggle={handleLoginModalToggle}
      handleSignUpModalToggle={handleSignUpModalToggle}
      handleOnChange={handleOnChange}
      authenticateUser={authenticateUser}
    />
  );
}
export default LoginContainer;
