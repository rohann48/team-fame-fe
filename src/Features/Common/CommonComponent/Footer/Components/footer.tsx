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
        <img
          className="logo-image"
          src={images.teamFameLogo}
          alt="updapt logo"
        />

        {/* <p className="footer-company-name">Te Name © 2015</p> */}
      </div>
      <div className="footer-contact-us">
        <div className="footer-center">
          <div className="title">Contact us</div>
          <div>
            <i>{icons.location}</i>
            <p>address</p>
          </div>

          <div>
            <i>{icons.phone}</i>
            <p>+91 9876543212</p>
          </div>

          <div>
            <i>{icons.envelope}</i>
            <p>teamfame96@gmail.com</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="title">Find us</div>
          <div>
            <i>
              <img src={images.facebook} alt="facebook" />
            </i>
            <p>facebook</p>
          </div>

          <div>
            <i>
              <img src={images.instagram} alt="instagram" />
            </i>
            <p>instagram</p>
          </div>

          <div>
            <i>
              <img src={images.whatsapp} alt="whatsapp" />
            </i>
            <p>watsapp</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
