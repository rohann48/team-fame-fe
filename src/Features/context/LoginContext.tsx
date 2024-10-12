import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useContext,
} from "react";
import {
  LoginContextInitialState,
  LoginContextTypes,
} from "./LoginContextTypes";
import { ApiHandler } from "../Constants/ApiHandler";
import { GlobalDataContext } from "./GlobalDataContext";
let initialState = {
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  isAuthenticated: false,
};
export const LoginContext = createContext<LoginContextInitialState>(
  {} as LoginContextInitialState
);
const LoginContextProvider = ({ children, userData }: LoginContextTypes) => {
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
  // console.log("userData", userData);

  useEffect(() => {
    // const fetchUserInfo = async () => {
    //   const response = await ApiHandler.getUserInfo("66916299255e4f1e8cd54b6a");
    //   console.log(response);
    // };
    let sessionUserInfo = sessionStorage.getItem("userInfo");
    if (sessionUserInfo) {
      // console.log("sessionsss");
      const response = JSON.parse(sessionUserInfo);
      setUserInfo(response);
    } else if (userData && userData._id) {
      console.log("checkk");
      setUserInfo(userData);
    }
    // fetchUserInfo();
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
