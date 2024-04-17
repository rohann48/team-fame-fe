import "../SCSS/styles.css";
import images from "../../ImageVariables";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { SignUpModalComponentTypes } from "../SignUpModalTypes";

function SignUpModal({
  isSignUpModalOpen,
  handleSignUpModalToggle,
  handleOnChange,
  handleUserRegister,
  registerUser,
  isEdit,
  userInfo,
  handleUserEdit,
  singleUserInfo,
}: SignUpModalComponentTypes) {
  return (
    <Dialog
      open={isSignUpModalOpen}
      className="sign-up-modal-container"
      PaperProps={{
        style: {
          width: "529px",
          height: "745px",
          backgroundColor: " #444444",
        },
      }}
      onClose={() => handleSignUpModalToggle()}
    >
      <DialogTitle className="sign-up-modal-header">
        <button
          className="sign-up-modal-close"
          onClick={() => handleSignUpModalToggle()}
        >
          x
        </button>
      </DialogTitle>
      <DialogContent className="sign-up-modal-content-cover">
        <div className="content-logo-cover">
          <div className="logo-cover">
            <img
              className="logo-image"
              src={images.teamFameLogo}
              alt="fame logo"
            />
          </div>
          <div className="sign-up-text">{isEdit ? "Edit User" : "Sign UP"}</div>
          <div className="sign-up-member-text">
            Become the member of our community
          </div>
        </div>
        <form className="form-main-cover">
          <label className="first-name-label-cover">
            <div className="first-name-text"> First Name</div>
            <input
              className="first-name-input"
              type="text"
              name="name"
              // value={contactNumber}
              onChange={(e) => handleOnChange(e)}
              value={registerUser?.name}
            />
          </label>
          <label className="last-name-label-cover">
            <div className="last-name-text"> Last Name</div>
            <input
              className="last-name-input"
              type="text"
              name="lastName"
              value={registerUser?.lastName}
              onChange={(e) => handleOnChange(e)}
            />
          </label>
          <label className="contact-label-cover">
            <div className="contact-number-text"> Contact Number</div>
            <input
              className="contact-number-input"
              type="number"
              name="contactNo"
              value={registerUser?.contactNo}
              onChange={(e) => handleOnChange(e)}
            />
          </label>
          <label className="email-label-cover">
            <div className="email-text"> Email</div>
            <input
              className="email-input"
              type="email"
              name="emailId"
              value={registerUser?.emailId}
              onChange={(e) => handleOnChange(e)}
            />
          </label>
          {!isEdit && (
            <label className="password-label-cover">
              <div className="password-text">Password:</div>
              <input
                className="password-input"
                type="password"
                name="password"
                onChange={(e) => handleOnChange(e)}
              />
            </label>
          )}
          {!isEdit && (
            <label className="password-label-cover">
              <div className="password-text">Confirm Password:</div>
              <input
                className="password-input"
                type="password"
                name="confirmPassword"
                // value={password}
                onChange={(e) => handleOnChange(e)}
              />
            </label>
          )}
          <button
            className="sign-up-btn"
            type="button"
            onClick={() => {
              isEdit ? handleUserEdit() : handleUserRegister();
            }}
          >
            {isEdit ? "Update" : "Sign Up"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default SignUpModal;
