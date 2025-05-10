import { createContext, useContext, useEffect, useState, useMemo } from "react";
import {
  GlobalDataContextTypes,
  IAboutUs,
  IEventData,
  ITestimonialData,
} from "./GlobalDataContextTypes";
import { ApiHandler } from "../Constants/ApiHandler";
import { useImmer } from "use-immer";
import { LoginContext } from "./LoginContext";
import { useLocation } from "react-router-dom";

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
  const [aboutUsData, setAboutUsData] = useState<IAboutUs>({
    content: "",
  });
  const [eventData, setEventData] = useState<IEventData>([]);
  const [testimonialData, setTestimonialData] = useState<ITestimonialData>([]);
  const [allVideos, setAllVideos] = useImmer<
    GlobalDataContextTypes["allVideos"]
  >([]);
  const { userInfo } = useContext(LoginContext);
  const [userMemberShipCheck, setUserMemberShipCheck] = useState<any>(null);
  const location = useLocation();
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
    const handleGetEvents = async () => {
      const response = await ApiHandler.getEvents();
      setEventData(response?.results);
    };
    const handleGetTestimonial = async () => {
      const response = await ApiHandler.getTestimonials();
      setTestimonialData(response?.results);
    };
    const fetchVideos = async () => {
      const response = await ApiHandler.getAllVideos();
      setAllVideos(response?.results);
    };
    handleGetAboutUs();
    handleGetEvents();
    handleGetTestimonial();
    fetchVideos();
  }, []);

  useEffect(() => {
    const getUserMembership = async () => {
      try {
        const res = await ApiHandler.getUserMembership(userInfo._id);
        setUserMemberShipCheck(res?.results);
      } catch (error) {}
    };
    if (userInfo?._id) {
      getUserMembership();
    }
  }, [userInfo?._id, location.pathname]);
  console.log("userMemberShipCheck", userMemberShipCheck);

  // To optimize the rendering of the context value and avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      aboutUsData,
      setAboutUsData,
      eventData,
      setEventData,
      testimonialData,
      setTestimonialData,
      allVideos,
      setAllVideos,
      userMemberShipCheck,
    }),
    [
      aboutUsData,
      setAboutUsData,
      eventData,
      setEventData,
      testimonialData,
      setTestimonialData,
      allVideos,
      setAllVideos,
      userMemberShipCheck,
    ]
  );
  return (
    <GlobalDataContext.Provider value={contextValue}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataContextProvider;
