import { HeaderNavProps, User } from "../HeaderNav/HeaderNavTypes";
import { LoginContextInitialState } from "../context/LoginContextTypes";

export interface SignUpModalCommonTypes {
  isSignUpModalOpen: boolean;
  handleSignUpModalToggle: () => void;
  registerUser?: {
    name: string;
    lastName: string;
    contactNo: string;
    emailId: string;
    // address: string;
    password: string;
    confirmPassword: string;
  };
  singleUserInfo: HeaderNavProps["singleUserInfo"];
  setSingleUserInfo?: React.Dispatch<React.SetStateAction<User>>;
}
export interface SignUpModalComponentTypes extends SignUpModalCommonTypes {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserRegister: () => void;
  isEdit: boolean;
  userInfo: LoginContextInitialState["userInfo"];
  handleUserEdit: () => void;
}
export interface SignUpModalContainerTypes extends SignUpModalCommonTypes {
  registerUser: {
    name: string;
    lastName: string;
    contactNo: string;
    emailId: string;
    // address: string;
    password: string;
    confirmPassword: string;
    invitedRefferal: string;
  };
}
