import React, { useContext, useState } from "react";
import {
  SignUpModalCommonTypes,
  SignUpModalContainerTypes,
} from "../SignUpModalTypes";
import SignUpModal from "../Components/SignUpModal";
import { ApiHandler } from "../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../Common/Notify/NotificationMessages";
import { LoginContext } from "../../context/LoginContext";
import bcrypt from "bcryptjs";

const intialUserState = {
  name: "",
  lastName: "",
  contactNo: "",
  emailId: "",
  // address: "",
  password: "",
  confirmPassword: "",
};
function SignUpContainer({
  isSignUpModalOpen,
  handleSignUpModalToggle,
}: SignUpModalCommonTypes) {
  const { setLoginInfo, loginInfo, isEdit, setIsEdit, userInfo, setUserInfo } =
    useContext(LoginContext);
  const [registerUser, setRegisterUser] = useState<
    SignUpModalContainerTypes["registerUser"]
  >({ ...intialUserState });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterUser({
      ...registerUser,
      [name]: value,
    });
  };

  const handleUserRegister = async () => {
    try {
      if (registerUser.password !== registerUser.confirmPassword) {
        NotificationManager.success("Password does not match!", "", 2000);
      } else if (registerUser.password.length <= 7) {
        NotificationManager.success(
          "Password must have 8 or more characters!",
          "",
          2000
        );
      } else {
        const saltRounds = 10; // Number of salt rounds for bcrypt
        const hashedPassword = bcrypt.hashSync(
          registerUser.password,
          saltRounds
        );
        const hashedConfirmedPassword = bcrypt.hashSync(
          registerUser.confirmPassword,
          saltRounds
        );

        const userDetails = {
          name: registerUser.name,
          lastName: registerUser.lastName,
          contactNo: registerUser.contactNo,
          emailId: registerUser.emailId,
          password: hashedPassword,
          confirmPassword: hashedConfirmedPassword,
        };
        const res = await ApiHandler.registerUser(userDetails);
        if (res.results._id) {
          NotificationManager.success(Notify.USER_REGISTER, "", 2000);
          setLoginInfo({
            isSignUpModalOpen: false,
            isLoginModalOpen: true,
            isAuthenticated: false,
          });
        }
      }
    } catch (error: any) {
      NotificationManager.warning(error["response"].data.message, "", 2000);
    }
  };
  //edit user profile
  const handleUserEdit = async () => {
    const data = {
      name: registerUser.name,
      lastName: registerUser.lastName,
      contactNo: registerUser.contactNo,
      emailId: registerUser.emailId,
    };
    try {
      const response = await ApiHandler.updateUserInfo(userInfo._id, data);
      console.log(response);
      // setUserInfo({});
      NotificationManager.success("User Updated Successfully", "", 2000);
    } catch (error) {
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
  };

  return (
    <SignUpModal
      isSignUpModalOpen={isSignUpModalOpen}
      handleSignUpModalToggle={handleSignUpModalToggle}
      handleOnChange={handleOnChange}
      handleUserRegister={handleUserRegister}
      registerUser={registerUser}
      isEdit={isEdit}
      userInfo={userInfo}
      handleUserEdit={handleUserEdit}
    />
  );
}

export default SignUpContainer;
