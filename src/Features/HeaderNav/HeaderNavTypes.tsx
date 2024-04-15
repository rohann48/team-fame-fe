import { CommonTypes } from "../Common/CommonTypes";
import { LoginContextInitialState } from "../context/LoginContextTypes";

export type HeaderNavProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  handleLoginModalToggle: () => void;
  handleSignUpModalToggle: () => void;
  productInfo: CommonTypes["productInfo"];
  handleNavigateCart: () => void;
  userInfo: LoginContextInitialState["userInfo"];
  handleToggleUserProfile: () => void;
  isUserProf: boolean;
  outsideClickUserProf: any;
  handleEditUserProfile: () => void;
};
