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
}
export interface SignUpModalComponentTypes extends SignUpModalCommonTypes {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserRegister: () => void;
  isEdit: boolean;
  userInfo: {
    _id: string;
    name: string;
    role: string;
    lastName: string;
  };
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
  };
}
