import { CommonTypes } from "../Common/CommonTypes";

export type HeaderNavProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  handleLoginModalToggle: () => void;
  handleSignUpModalToggle: () => void;
  productCount: CommonTypes["productCount"];
};
