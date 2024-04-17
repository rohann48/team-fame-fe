import { useState, useContext, useEffect, useRef } from "react";
import LoginComponent from "../Components/Login";
import { LoginContainerTypes } from "../LoginTypes";
import { NotificationManager } from "react-notifications";
import { ApiHandler } from "../../Constants/ApiHandler";
import bcrypt from "bcryptjs";
import { LoginContext } from "../../context/LoginContext";

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
}: LoginContainerTypes) {
  const [loginData, setLoginData] = useState({ ...initialData });
  const { setLoginInfo, loginInfo } = useContext(LoginContext);
  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const authenticateUser = async () => {
    debugger;
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
        sessionStorage.setItem("userInfo", JSON.stringify(res.results));
      } catch (error) {
        NotificationManager.warning("Error Login", "", 2000);
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
