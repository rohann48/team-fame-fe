import { LoginContextInitialState } from "../context/LoginContextTypes";

export interface LoginCommonTypes {
  isLoginModalOpen: boolean;
  handleLoginModalToggle: () => void;
  handleSignUpModalToggle: () => void;
}
export interface LoginComponentTypes extends LoginCommonTypes {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  authenticateUser: () => void;
}
export interface LoginContainerTypes extends LoginCommonTypes {
  setUserInfo: React.Dispatch<
    React.SetStateAction<LoginContextInitialState["userInfo"]>
  >;
}
