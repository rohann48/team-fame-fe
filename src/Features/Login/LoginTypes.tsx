export interface LoginCommonTypes {
  isLoginModalOpen: boolean;
  handleLoginModalToggle: () => void;
  handleSignUpModalToggle: () => void;
}
export interface LoginComponentTypes extends LoginCommonTypes {}
export interface LoginContainerTypes extends LoginCommonTypes {}
