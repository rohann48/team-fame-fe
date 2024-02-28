import "../styles.css";
import images from "../../ImageVariables";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { NavLink } from "react-router-dom";
import { HeaderNavProps } from "../HeaderNavTypes";

const HeaderNav = ({
  activeTab,
  setActiveTab,
  handleLoginModalToggle,
  handleSignUpModalToggle,
}: HeaderNavProps) => {
  return (
    <div className="headernav-container">
      <div className="icon-cover">
        <img
          className="logo-image"
          src={images.teamFameLogo}
          alt="fame logo"
        ></img>
      </div>
      <div className="tool-options-cover">
        <NavLink
          to="/"
          className={
            // ({ isActive }) => {
            // isActive && setActiveTab("configuration");
            // return isActive ? "nav-options-selected" :
            "nav-options"
            // }
          }
          onClick={() => {
            setActiveTab("homepage");
          }}
        >
          HOME
        </NavLink>
        <NavLink
          to="about-us"
          className={
            // ({ isActive }) => {
            // isActive && setActiveTab("configuration");
            // return isActive ? "nav-options-selected" :
            "nav-options"
            // }
          }
          onClick={() => {
            setActiveTab("about-us");
          }}
        >
          ABOUT US{" "}
        </NavLink>
        <NavLink
          to="our-event"
          className={
            // ({ isActive }) => {
            // isActive && setActiveTab("configuration");
            // return isActive ? "nav-options-selected" :
            "nav-options"
            // }
          }
          onClick={() => {
            setActiveTab("our-event");
          }}
        >
          OUR EVENT{" "}
        </NavLink>
        <NavLink
          to="latest-news"
          className={
            // ({ isActive }) => {
            // isActive && setActiveTab("configuration");
            // return isActive ? "nav-options-selected" :
            "nav-options"
            // }
          }
          onClick={() => {
            setActiveTab("latest-news");
          }}
        >
          LATEST NEWS{" "}
        </NavLink>
        <NavLink
          to="shop"
          className={
            // ({ isActive }) => {
            // isActive && setActiveTab("configuration");
            // return isActive ? "nav-options-selected" :
            "nav-options"
            // }
          }
          onClick={() => {
            setActiveTab("shop");
          }}
        >
          SHOP{" "}
        </NavLink>
      </div>
      <div className="loggin-register-container">
        <button
          className="nav-link-loggin-cover"
          onClick={() => handleLoginModalToggle()}
        >
          LOGIN
        </button>
        <div>|</div>
        <button
          className="nav-link-register-cover"
          onClick={() => handleSignUpModalToggle()}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
