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
  productInfo,
}: HeaderNavProps) => {
  return (
    <div className="header-nav-container">
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
        {/* <NavLink
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
        </NavLink> */}
        <NavLink
          to="events-and-news"
          className={
            // ({ isActive }) => {
            // isActive && setActiveTab("configuration");
            // return isActive ? "nav-options-selected" :
            "nav-options"
            // }
          }
          onClick={() => {
            setActiveTab("events-and-news");
          }}
        >
          EVENTS/NEWS{" "}
        </NavLink>
        <NavLink
          to="videos"
          className={
            // ({ isActive }) => {
            // isActive && setActiveTab("configuration");
            // return isActive ? "nav-options-selected" :
            "nav-options"
            // }
          }
          onClick={() => {
            setActiveTab("videos");
          }}
        >
          VIDEOS
        </NavLink>
        <NavLink
          to="scheme"
          className={
            // ({ isActive }) => {
            // isActive && setActiveTab("configuration");
            // return isActive ? "nav-options-selected" :
            "nav-options"
            // }
          }
          onClick={() => {
            setActiveTab("scheme");
          }}
        >
          SCHEME
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
      <div className="login-register-container">
        <button className="cart-img-btn">
          <img className="cart-img" src={images.cart} alt="cart" />{" "}
          <span className="cart-count">{productInfo.cartTotalQuantity}</span>
        </button>
        <NavLink to="config/about-us">
          <Tippy placement="bottom-start" content="Configuration">
            <img
              className="config-icon"
              // style={{ marginRight: "2px" }}
              src={images.settings}
              alt="config"
            />
          </Tippy>
        </NavLink>
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
