import { NavLink } from "react-router-dom";
import { useState } from "react";
import icons from "../../../Assets/Icons/icons";
import Footer from "../../../Common/CommonComponent/Footer";
import images from "../../../ImageVariables";
import "../SCSS/styles.scss";
import { configurationType } from "../configurationTypes";

const Configuration = ({
  configurationRoutes,
  sideNavLinks,
  userInfo,
}: configurationType) => {
  const isAdmin = userInfo?.role === "admin";
  const [hoveredLink, setHoveredLink] = useState<any>(null);

  return (
    <div className="config-page-container">
      <div className="config-page-cover">
        <div className="config-container">
          <div className="config-container-left">
            <div className="config-container-name">
              <span>{`${
                userInfo?.role === "admin" ? "Admin Setting" : "Details"
              }`}</span>
            </div>
            <div className="config-links">
              {sideNavLinks.map((link, i) => (
                <div key={i} className="config-links-height">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => {
                      return isActive
                        ? "config-links-border selected-tab"
                        : "config-links-border";
                    }}
                    onMouseEnter={() => setHoveredLink(i)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <div className="config-links-title">
                      <div className="config-links-img">
                        <img src={link.img} alt="config-icons" />
                      </div>
                      {(!isAdmin || hoveredLink === i) && (
                        <div
                          className={`title ${
                            hoveredLink === i ? "title-hovered" : ""
                          }`}
                        >
                          {link.title}
                        </div>
                      )}
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className="config-container-right">{configurationRoutes}</div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
