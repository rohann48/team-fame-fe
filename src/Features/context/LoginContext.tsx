import { createContext, useState, useMemo, useCallback } from "react";
import {
  LoginContextInitialState,
  LoginContextTypes,
} from "./LoginContextTypes";
let initialState = {
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
};
export const LoginContext = createContext<LoginContextInitialState>(
  {} as LoginContextInitialState
);
const LoginContextProvider = ({ children }: LoginContextTypes) => {
  const [loginInfo, setLoginInfo] = useState({ ...initialState });
  //login modal open
  const handleLoginModalToggle = useCallback(() => {
    setLoginInfo((prev) => {
      return {
        ...prev,
        isLoginModalOpen: !prev.isLoginModalOpen,
      };
    });
  }, []);
  //sign up modak open
  const handleSignUpModalToggle = useCallback(() => {
    setLoginInfo((prev) => {
      return {
        ...prev,
        isLoginModalOpen: false,
        isSignUpModalOpen: !prev.isSignUpModalOpen,
      };
    });
  }, []);
  const contextValue = useMemo(
    () => ({
      loginInfo,
      setLoginInfo,
      handleLoginModalToggle,
      handleSignUpModalToggle,
    }),
    [loginInfo, setLoginInfo, handleLoginModalToggle, handleSignUpModalToggle]
  );
  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
