import { useState, useContext, useEffect, useRef } from "react";
import LoginComponent from "../Components/Login";
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
function LoginContainer({
  isLoginModalOpen,
  handleLoginModalToggle,
  handleSignUpModalToggle,
}: LoginContainerTypes) {
  return (
    <LoginComponent
      isLoginModalOpen={isLoginModalOpen}
      handleLoginModalToggle={handleLoginModalToggle}
      handleSignUpModalToggle={handleSignUpModalToggle}
    />
  );
}
export default LoginContainer;
