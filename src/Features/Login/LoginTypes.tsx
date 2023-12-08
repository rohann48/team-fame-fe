export interface LoginCommonTypes {
  formData?: {
    email: string;
    password: string;
  };
  errMsg?: {
    emailErr: string;
    passwordErr: string;
  };
  isLogin?: boolean;
  isForgotPassword?: boolean;
}
export interface LoginComponentTypes extends LoginCommonTypes {
  togglePassWord: boolean;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  handleForgotPassword: (e: any) => void;
  handleUserLogin: (e: any) => void;
  handlePasswordView: (to: string) => void;
  mainRef: React.MutableRefObject<HTMLDivElement | null>;
  colorChange: {
    userName: boolean;
    password: boolean;
  };
  handleColorChange: (type: "userName" | "password") => void;
  setTogglePassword: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface LoginContainerTypes extends LoginCommonTypes {}
