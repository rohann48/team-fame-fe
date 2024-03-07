import { NavLink } from "react-router-dom";
import icons from "../../../Assets/Icons/icons";
import Footer from "../../../Common/CommonComponent/Footer";
import images from "../../../ImageVariables";
import "../SCSS/styles.scss";
import { configurationType } from "../configurationTypes";

const Configuration = ({
  configurationRoutes,
  sideNavLinks,
}: configurationType) => {
  return (
    <div className="config-page-container">
      <div className="config-page-cover">
        <div className="config-container">
          <div className="config-container-left">
            <div className="config-container-name">
              <span>Admin Setting</span>
            </div>
            <div className="config-links">
              {sideNavLinks.map((link, i) => (
                <div key={i} className="config-links-height">
                  <NavLink to={link.path} className="config-links-border">
                    <div className="config-links-title">
                      <div className="config-links-img">
                        <img src={link.img} alt="config-icons" />
                      </div>
                      <div className="title">{link.title}</div>
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
