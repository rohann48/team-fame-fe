export interface LoginContextTypes {
  children: React.ReactNode;
}
export interface LoginContextInitialState {
  loginInfo: { isLoginModalOpen: boolean; isSignUpModalOpen: boolean };
  setLoginInfo: React.Dispatch<
    React.SetStateAction<{
      isLoginModalOpen: boolean;
      isSignUpModalOpen: boolean;
      isAuthenticated: boolean;
    }>
  >;
  handleLoginModalToggle: () => void;
  handleSignUpModalToggle: () => void;
  userInfo: {
    _id: string;
    name: string;
    role?: string;
    lastName: string;
    emailId: string;
    contactNo: string;
    password: "";
    confirmPassword: "";
  };
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setUserInfo: React.Dispatch<
    React.SetStateAction<LoginContextInitialState["userInfo"]>
  >;
}
