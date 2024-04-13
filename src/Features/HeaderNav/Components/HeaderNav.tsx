import "../styles.css";
import images from "../../ImageVariables";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { NavLink } from "react-router-dom";
import { HeaderNavProps } from "../HeaderNavTypes";
import icons from "../../Assets/Icons/icons";
import { RoleType } from "../../Common/Enums.types";

const HeaderNav = ({
  activeTab,
  setActiveTab,
  handleLoginModalToggle,
  handleSignUpModalToggle,
  productInfo,
  handleNavigateCart,
  userInfo,
  handleToggleUserProfile,
  isUserProf,
  outsideClickUserProf,
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
        <button className="cart-img-btn" onClick={() => handleNavigateCart()}>
          <img className="cart-img" src={images.cart} alt="cart" />
          <span className="cart-count">{productInfo.cartBasket.length}</span>
        </button>
        <button className="user-profile-cover" ref={outsideClickUserProf}>
          <img
            className="user-icon"
            src={images.bellIcon}
            onClick={() => handleToggleUserProfile()}
          />
          {isUserProf && (
            <div className="user-profile-view-cover">
              <div className="user-profile-view-inner-cover">
                <div className="user-name-cover">
                  <div>User Name</div>
                  <div>{userInfo.name}</div>
                </div>
                <div className="user-id-cover">
                  <div>User ID</div>
                  <div>FAME01</div>
                </div>
                <div className="user-email-cover">
                  <div>Email ID</div>
                  <div>sathvik@gmail.com</div>
                </div>
                <div className="user-prof">Profile</div>
                <div className="user-logout-btn-cover">
                  <button className="logout-btn">Log out</button>
                </div>
              </div>
            </div>
          )}
        </button>

        {userInfo.role === RoleType.ADMIN && (
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
        )}
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
