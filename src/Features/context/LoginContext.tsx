import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import {
  LoginContextInitialState,
  LoginContextTypes,
} from "./LoginContextTypes";
let initialState = {
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  isAuthenticated: false,
};
export const LoginContext = createContext<LoginContextInitialState>(
  {} as LoginContextInitialState
);
const LoginContextProvider = ({ children }: LoginContextTypes) => {
  const [loginInfo, setLoginInfo] = useState({ ...initialState });
  const [userInfo, setUserInfo] = useState<
    LoginContextInitialState["userInfo"]
  >({} as LoginContextInitialState["userInfo"]);
  //state maintained for editing users
  const [isEdit, setIsEdit] = useState(false);
  //login modal open
  const handleLoginModalToggle = useCallback(() => {
    setLoginInfo((prev) => {
      return {
        ...prev,
        isLoginModalOpen: !prev.isLoginModalOpen,
      };
    });
  }, []);

  useEffect(() => {
    let sessionUserInfo = sessionStorage.getItem("userInfo");

    if (sessionUserInfo) {
      const response = JSON.parse(sessionUserInfo);
      setUserInfo(response);
    }
  }, [loginInfo.isAuthenticated]);

  //sign up modak open
  const handleSignUpModalToggle = useCallback(() => {
    setLoginInfo((prev) => {
      return {
        ...prev,
        isLoginModalOpen: false,
        isSignUpModalOpen: !prev.isSignUpModalOpen,
      };
    });
    setIsEdit(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      loginInfo,
      setLoginInfo,
      handleLoginModalToggle,
      handleSignUpModalToggle,
      userInfo,
      isEdit,
      setIsEdit,
      setUserInfo,
    }),
    [
      loginInfo,
      setLoginInfo,
      handleLoginModalToggle,
      handleSignUpModalToggle,
      userInfo,
      isEdit,
      setIsEdit,
      setUserInfo,
    ]
  );

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
