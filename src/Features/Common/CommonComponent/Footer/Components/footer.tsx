import "../SCSS/styles.css";
// import images from "../../ImageVariables";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { NavLink } from "react-router-dom";
import icons from "../../../../Assets/Icons/icons";
import images from "../../../../ImageVariables";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img className="logo-image" src={images.teamFameLogo} alt="fame logo" />

        {/* <p className="footer-company-name">Te Name © 2015</p> */}
      </div>
      <div className="footer-contact-us">
        <div className="footer-center">
          <div className="title">Contact us</div>
          <div>
            <i>{icons.location}</i>
            <p>
              SHREE RAKSHA 1-168/1 NEAR SNEHA CIRCLE DEVINAGAR ROAD KUNJATHBAIL
              MANGALORE-575015
            </p>
          </div>

          <div>
            <i>{icons.phone}</i>
            <p>+91 9481770086</p>
          </div>

          <div>
            <i>{icons.envelope}</i>
            <p>teamfame96@gmail.com</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="title">Find us</div>
          <a
            href="https://x.com/teamfame96?t=7wwGkaLvaDKCt2Hl0w1ocw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <i>
                <img src={images.twitter} alt="facebook" />
              </i>
              <p>@teamfame96</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/_teamfame_?utm_source=qr&igsh=MXUxMGRidTgyMTByZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <i>
                <img src={images.instagram} alt="instagram" />
              </i>
              <p>@_teamfame_</p>
            </div>
          </a>

          <a
            href="https://whatsapp.com/channel/0029VaaUQuQ7tkj1a2al411w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <i>
                <img src={images.whatsapp} alt="whatsapp" />
              </i>
              <p>+91 9481770086</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
