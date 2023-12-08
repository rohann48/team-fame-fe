import { createContext, useEffect, useState, useMemo } from "react";
import {
  GlobalUserContextType,
  TUserCompanyId,
  TUserInfo,
  TScmName,
} from "./globalUserContext.Types";

export const GlobalUserContext = createContext<GlobalUserContextType>(
  {} as GlobalUserContextType
);
const GlobalUserContextProvider = ({
  children,
  userData,
}: //   onNavigate,
{
  children: React.ReactNode;
  userData?: any;
  //   onNavigate: any;
}) => {
  const [userInfo, setUserInfo] = useState<TUserInfo | null>(null);
  const [userCompanyId, setUserCompanyId] = useState<TUserCompanyId | null>(
    null
  );
  const [scmName, setScmName] = useState<TScmName>(null);

  useEffect(() => {
    const assignUserInfo = async () => {
      setUserInfo(userData);
      // setUserCompanyId()
    };
    if (userData) {
      assignUserInfo();
    }
  }, [userData]);
  // To optimize the rendering of the context value and avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      userInfo,
      userCompanyId,
      scmName,
      //   onNavigate,
    }),
    [userInfo, userCompanyId, scmName]
  );
  return (
    <GlobalUserContext.Provider value={contextValue}>
      {children}
    </GlobalUserContext.Provider>
  );
};

export default GlobalUserContextProvider;
