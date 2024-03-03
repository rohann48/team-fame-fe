export interface LoginContextTypes {
  children: React.ReactNode;
}
export interface LoginContextInitialState {
  loginInfo: { isLoginModalOpen: boolean; isSignUpModalOpen: boolean };
  setLoginInfo: React.Dispatch<
    React.SetStateAction<{
      isLoginModalOpen: boolean;
      isSignUpModalOpen: boolean;
    }>
  >;
  handleLoginModalToggle: () => void;
  handleSignUpModalToggle: () => void;
}
