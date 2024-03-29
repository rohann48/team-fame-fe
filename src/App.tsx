import { useState, useEffect } from "react";
import "./App.css";
import { mainRoutes } from "./Features/routes";
import { useRoutes, useNavigate } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-notifications/lib/notifications.css";
import "tippy.js/dist/tippy.css";
import { useIdleTimer } from "react-idle-timer";
import LoginContextProvider from "./Features/context/LoginContext";
import { ApiHandler } from "./Features/Constants/ApiHandler";
import { confirmAlert } from "react-confirm-alert";
import HeaderNav from "./Features/HeaderNav";
import Footer from "./Features/Common/CommonComponent/Footer/Components/footer";
import GlobalDataContextProvider from "./Features/context/GlobalDataContext";
import ShopContextProvider from "./Features/context/ShopContext/ShopContext";
function App() {
  const renderRoutes = useRoutes(mainRoutes);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // navigate("home");
  }, []);
  //will change logout func later
  // const logoutUser = async () => {
  //   try {
  //     const logoutResult = await ApiHandler.logoutUser();
  //     if (logoutResult?.status) {
  //       window.location.href = "/login";
  //     }
  //   } catch (error) {
  //     confirmAlert({
  //       title: "Connection Lost",
  //       message: "your session may have timed out. Please reload",
  //       buttons: [
  //         {
  //           label: "reload",
  //           onClick: () => {
  //             window.location.reload();
  //           },
  //         },
  //       ],
  //     });
  //   }
  // };

  const onIdle = () => {
    // Close Modal Prompt
    // Do some idle action like log out your user
    //console.log("idle", new Date());
    try {
      // logoutUser();
    } catch (error) {}
  };
  const onActive = (event: any) => {
    // Close Modal Prompt
    // Do some active action
    //console.log("active", new Date());
  };
  const idleTimer = useIdleTimer({
    onIdle,
    onActive,
    timeout: 1800000, //changed from 3hr to 30min (VAPT)
    // timeout: 60000, //1 minute
    crossTab: true,
  });

  return (
    <LoginContextProvider>
      <GlobalDataContextProvider>
        <div className="App">
          <div className="main-header-container">
            <ShopContextProvider>
              <HeaderNav />
            </ShopContextProvider>
            <div className="home-render-routes-cover">
              <div className="rendering-routes-components">{renderRoutes}</div>
            </div>
          </div>
          <NotificationContainer />
        </div>
      </GlobalDataContextProvider>
    </LoginContextProvider>
  );
}
export default App;
