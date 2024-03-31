export interface SignUpModalCommonTypes {
  isSignUpModalOpen: boolean;
  handleSignUpModalToggle: () => void;
}
export interface SignUpModalComponentTypes extends SignUpModalCommonTypes {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserRegister: () => void;
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
  };
}
