import React, { useContext, useState, useEffect } from "react";
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
  invitedRefferal: "",
};
function SignUpContainer({
  isSignUpModalOpen,
  handleSignUpModalToggle,
  singleUserInfo,
  setSingleUserInfo,
}: SignUpModalCommonTypes) {
  const { setLoginInfo, loginInfo, isEdit, setIsEdit, userInfo, setUserInfo } =
    useContext(LoginContext);
  const [registerUser, setRegisterUser] = useState<
    SignUpModalContainerTypes["registerUser"]
  >(!isEdit ? { ...intialUserState } : structuredClone(singleUserInfo));
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterUser({
      ...registerUser,
      [name]: value,
    });
  };

  const [refferalCodeList, setRefferalCodeList] = useState<Array<string>>([]);
  const [refferalCode, setRefferalCode] = useState<string | null>(null);
  const getOfferRefferalInfo = async () => {
    const res = await ApiHandler.getRefferalCodeList();
    setRefferalCodeList([...res?.results?.[0]?.refferalCodes]);
  };

  const refferalCodeCheck = async () => {
    if (registerUser.invitedRefferal?.length) {
      if (refferalCodeList.includes(registerUser.invitedRefferal!)) {
        try {
          const data = {
            refferalCode: registerUser.invitedRefferal,
          };
          const response = await ApiHandler.validateRefferalCode(data);
          if (response.results) {
            NotificationManager.success(
              "Refferal code applied successfully",
              "",
              2000
            );
            return "success";
          } else {
            NotificationManager.warning("Refferal code already used", "", 2000);
            return false;
          }
        } catch (error) {
          console.log("error", error);
        }
      } else {
        NotificationManager.warning("Invalid Refferal code", "", 2000);
        return "Invalid Refferal code";
      }
    } else {
      if (refferalCodeList.length === 0) {
        const response = await ApiHandler.validateRefferalCode({
          refferalCode: null,
        });
        return "success";
      } else {
        NotificationManager.warning("Refferal code required", "", 2000);
        return "Refferal code required";
      }
    }
  };

  const handleUserRegister = async () => {
    try {
      const refferalCheck = await refferalCodeCheck();
      if (refferalCheck === "success") {
        if (registerUser.password !== registerUser.confirmPassword) {
          NotificationManager.success("Password does not match!", "", 2000);
        } else if (registerUser.password.length <= 7) {
          NotificationManager.success(
            "Password must have 8 or more characters!",
            "",
            2000
          );
        } else if (
          registerUser.invitedRefferal.length === 0 &&
          refferalCheck !== "success"
        ) {
          NotificationManager.warning(
            "Please fill all the fields",
            "invited refferal code required",
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
            invitedRefferal: registerUser.invitedRefferal,
          };
          const res = await ApiHandler.registerUser(userDetails);
          setRegisterUser((prev) => ({
            ...prev,
            name: res.results.name,
            lastName: res.results.lastName,
            contactNo: res.results.contactNo,
            emailId: res.results.emailId,
          }));
          if (res.results._id) {
            NotificationManager.success(Notify.USER_REGISTER, "", 2000);
            setLoginInfo({
              isSignUpModalOpen: false,
              isLoginModalOpen: true,
              isAuthenticated: false,
            });
          }
        }
      }
    } catch (error: any) {
      NotificationManager.warning(error["response"].data.message, "", 2000);
    }
  };
  //edit user profile
  const handleUserEdit = async () => {
    try {
      const modifiedData = {
        name: registerUser.name,
        lastName: registerUser.lastName,
        contactNo: registerUser.contactNo,
        emailId: registerUser.emailId,
      };
      const response = await ApiHandler.updateUserInfo(
        "66207ae88e9fc4d0c4c5aa15",
        modifiedData
      );
      setSingleUserInfo!((prev) => ({
        ...prev,
        name: response.results.name,
        lastName: response.results.lastName,
        contactNo: response.results.contactNo,
        emailId: response.results.emailId,
      }));
      NotificationManager.success("User Updated Successfully", "", 2000);
      setLoginInfo((prev) => ({
        ...prev,
        isSignUpModalOpen: false,
      }));
    } catch (error) {
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
  };

  useEffect(() => {
    getOfferRefferalInfo();
  }, []);

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
      singleUserInfo={singleUserInfo}
    />
  );
}

export default SignUpContainer;
