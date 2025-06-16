// import {
//   createContext,
//   useState,
//   useMemo,
//   useCallback,
//   useEffect,
//   useContext,
// } from "react";
// import {
//   LoginContextInitialState,
//   LoginContextTypes,
// } from "./LoginContextTypes";
// import { ApiHandler } from "../Constants/ApiHandler";
// import { GlobalDataContext } from "./GlobalDataContext";
// let initialState = {
//   isLoginModalOpen: false,
//   isSignUpModalOpen: false,
//   isAuthenticated: false,
// };
// export const LoginContext = createContext<LoginContextInitialState>(
//   {} as LoginContextInitialState
// );
// const LoginContextProvider = ({
//   children,
//   checkUserInfo,
// }: LoginContextTypes) => {
//   const [loginInfo, setLoginInfo] = useState({ ...initialState });
//   const [userInfo, setUserInfo] = useState<
//     LoginContextInitialState["userInfo"]
//   >({} as LoginContextInitialState["userInfo"]);
//   // Add loading state to track when user info is being fetched
//   const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);
//   //state maintained for editing users
//   const [isEdit, setIsEdit] = useState(false);
//   const [isUserInfoEdit, setIsUserInfoEdit] = useState<boolean>(false);
//   //login modal open
//   const handleLoginModalToggle = useCallback(() => {
//     setLoginInfo((prev) => {
//       return {
//         ...prev,
//         isLoginModalOpen: !prev.isLoginModalOpen,
//       };
//     });
//   }, []);

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       // const response = await ApiHandler.getUserInfo(userData._id);
//       // sessionStorage.setItem("userInfo", JSON.stringify(response.results));
//       // setUserInfo(response.results);
//       // console.log(response.results);
//       const data: any = await checkUserInfo();
//       if (data?.results?.userInfo) {
//         setUserInfo(data.results.userInfo);
//       }
//       setIsUserInfoEdit(false);
//     };
//     fetchUserInfo();
//   }, [isUserInfoEdit]);

//   //sign up modak open
//   const handleSignUpModalToggle = useCallback(() => {
//     setLoginInfo((prev) => {
//       return {
//         ...prev,
//         isLoginModalOpen: false,
//         isSignUpModalOpen: !prev.isSignUpModalOpen,
//       };
//     });
//     setIsEdit(false);
//   }, []);

//   const contextValue = useMemo(
//     () => ({
//       loginInfo,
//       setLoginInfo,
//       handleLoginModalToggle,
//       handleSignUpModalToggle,
//       userInfo,
//       isEdit,
//       setIsEdit,
//       setUserInfo,
//       setIsUserInfoEdit,
//     }),
//     [
//       loginInfo,
//       setLoginInfo,
//       handleLoginModalToggle,
//       handleSignUpModalToggle,
//       userInfo,
//       isEdit,
//       setIsEdit,
//       setUserInfo,
//       setIsUserInfoEdit,
//     ]
//   );

//   return (
//     <LoginContext.Provider value={contextValue}>
//       {children}
//     </LoginContext.Provider>
//   );
// };

// export default LoginContextProvider;
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

const LoginContextProvider = ({
  children,
  checkUserInfo,
}: LoginContextTypes) => {
  const [loginInfo, setLoginInfo] = useState({ ...initialState });
  const [userInfo, setUserInfo] = useState<
    LoginContextInitialState["userInfo"]
  >({} as LoginContextInitialState["userInfo"]);

  // Add loading state to track when user info is being fetched
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);

  //state maintained for editing users
  const [isEdit, setIsEdit] = useState(false);
  const [isUserInfoEdit, setIsUserInfoEdit] = useState<boolean>(false);

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
    const fetchUserInfo = async () => {
      try {
        setIsLoadingUserInfo(true);
        const data: any = await checkUserInfo();
        if (data?.results?.userInfo) {
          setUserInfo(data.results.userInfo);
        }
        setIsUserInfoEdit(false);
      } catch (error) {
        console.error("Error fetching user info:", error);
      } finally {
        setIsLoadingUserInfo(false);
      }
    };
    fetchUserInfo();
  }, [isUserInfoEdit, checkUserInfo]);

  //sign up modal open
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
      setIsUserInfoEdit,
      isLoadingUserInfo, // Add this to context
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
      setIsUserInfoEdit,
      isLoadingUserInfo,
    ]
  );

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
