import "../SCSS/styles.css";
import images from "../../ImageVariables";
import { LoginComponentTypes } from "../LoginTypes";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
function LoginComponent({
  isLoginModalOpen,
  handleLoginModalToggle,
  handleSignUpModalToggle,
}: LoginComponentTypes) {
  return (
    <Dialog
      open={isLoginModalOpen}
      className="login-modal-container"
      PaperProps={{
        style: {
          width: "529px",
          height: "543px",
          backgroundColor: " #444444",
        },
      }}
      onClose={() => handleLoginModalToggle()}
    >
      <DialogTitle className="login-modal-header">
        <button
          className="login-modal-close"
          onClick={() => handleLoginModalToggle()}
        >
          x
        </button>
      </DialogTitle>
      <DialogContent className="login-modal-content-cover">
        <div className="content-logo-cover">
          <div className="logo-cover">
            <img
              className="logo-image"
              src={images.teamFameLogo}
              alt="fame logo"
            />
          </div>
          <div className="login-text">Log in</div>
          <div className="login-member-text">
            Become the member of our community
          </div>
        </div>
        <form className="form-main-cover">
          <label className="contact-label-cover">
            <div className="contact-number-text"> Contact Number:</div>
            <input
              className="contact-number-input"
              type="text"
              // value={contactNumber}
              // onChange={(e) => setContactNumber(e.target.value)}
            />
          </label>
          <label className="password-label-cover">
            <div className="password-text">Password:</div>
            <input
              className="password-input"
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="remember-me">
            <input
              className="remember-me-input"
              type="checkbox"
              // checked={rememberMe}
              // onChange={() => setRememberMe(!rememberMe)}
            />
            <div className="remember-me-text">Remember me</div>
          </label>
          <button className="login-btn" type="button">
            Login
          </button>
        </form>
        <div className="sign-up-cover">
          <p>Not A Member ?</p>
          <button
            className="sign-up-btn"
            onClick={() => handleSignUpModalToggle()}
          >
            Sign Up Now
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default LoginComponent;
