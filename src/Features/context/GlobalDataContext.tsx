import { createContext, useEffect, useState, useMemo } from "react";
import { GlobalDataContextTypes } from "./GlobalDataContextTypes";
import { ApiHandler } from "../Constants/ApiHandler";

export const GlobalDataContext = createContext<GlobalDataContextTypes>(
  {} as GlobalDataContextTypes
);
const GlobalDataContextProvider = ({
  children,
}: // onNavigate,
{
  children: React.ReactNode;
  // onNavigate: any;
}) => {
  const [aboutUsData, setAboutUsData] = useState<any>({
    content: "",
  });

  useEffect(() => {
    // const assignUserInfo = async () => {
    //   if (process.env.NODE_ENV === "development") {
    //  ;
    //   } else {
    //     let sessionUserInfo = sessionStorage.getItem("userInfo");

    //     if (sessionUserInfo) {
    //       const response = JSON.parse(sessionUserInfo);
    //       setUserInfo(response);
    //       //   setUserCompanyId(response?.assignedCompany);
    //     }
    //   }
    // };
    // assignUserInfo();
    const handleGetAboutUs = async () => {
      const response = await ApiHandler.getAboutUs();
      setAboutUsData(response?.results);
    };
    handleGetAboutUs();
  }, []);

  // To optimize the rendering of the context value and avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      aboutUsData,
      setAboutUsData,
    }),
    [aboutUsData, setAboutUsData]
  );
  return (
    <GlobalDataContext.Provider value={contextValue}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataContextProvider;
