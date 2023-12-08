import "../styles.css";
import images from "../../ImageVariables";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { NavLink } from "react-router-dom";
import { HeaderNavProps } from "../HeaderNavTypes";

const HeaderNav = ({ activeTab, setActiveTab }: HeaderNavProps) => {
  return (
    <>
      <div className="headernav-container">
        <div className="icon-cover">
          <img
            className="logo-image"
            src={images.updaptLogo}
            alt="updapt logo"
          ></img>
        </div>
        <div className="tool-options-cover"></div>
        <div className="config-notification-container">
          <NavLink
            to="/settings"
            className={
              // ({ isActive }) => {
              // isActive && setActiveTab("configuration");
              // return isActive ? "nav-options-selected" :
              "nav-options"
              // }
            }
            onClick={() => {
              setActiveTab("configuration");
            }}
          >
            <Tippy
              placement="bottom-start"
              theme="light"
              content="Configuration"
            >
              <img
                className="img"
                src={images.bellIcon}
                // src={
                //   activeTab === "configuration"
                //     ? images.settingsActive
                //     : images.settings
                // }
                alt="configuration"
              ></img>
            </Tippy>
          </NavLink>
          <div className="user-info-active">
            <div className="user-info-inner">S</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
