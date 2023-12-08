import "../SCSS/styles.css";
import images from "../../ImageVariables";
import { LoginComponentTypes } from "../LoginTypes";
function LoginComponent({
  togglePassWord,
  formData,
  errMsg,
  setFormData,
  handleUserLogin,
  isLogin,
  isForgotPassword,
  handlePasswordView,
  handleForgotPassword,
  mainRef,
  colorChange,
  handleColorChange,
  setTogglePassword,
}: LoginComponentTypes) {
  return (
    <>
      {isLogin ? (
        <div className="login-page-wrapper" ref={mainRef}>
          <div className="login-page-inner-wrapper">
            <div className="login-page-left-container">
              <img src={images.loginPage} width="100%" height="100%" />
            </div>
            <div className="login-page-right-container">
              <div className="login-page-right-content-wrapper">
                {" "}
                <img className="company-logo" src={images.updaptLogo} />
                <h2 className="login-header">Login</h2>
                <div className="sap-login-container-form">
                  <div className="email-main-wrapper">
                    <div
                      className="input-mail-mail-icon"
                      style={
                        colorChange.userName || formData!.email.length > 0
                          ? { borderColor: "#2863FF" }
                          : { borderColor: "#DEE2E6" }
                      }
                      onClick={() => {
                        handleColorChange("userName");
                      }}
                    >
                      <img
                        className="email-icon"
                        src={
                          colorChange.userName || formData!.email.length > 0
                            ? images.email
                            : images.emailGrey
                        }
                      />
                      <input
                        className="input-email"
                        type="email"
                        value={formData!.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                      <label
                        className={
                          formData!.email.length > 0
                            ? "password-label-data"
                            : "password-label"
                        }
                      >
                        Username
                      </label>
                    </div>
                    {errMsg!.emailErr && (
                      <p className="email-err-msg">{errMsg!.emailErr}</p>
                    )}
                  </div>
                  <div className="password-main-wrapper">
                    <div
                      className="input-password-password-icon"
                      style={
                        colorChange.password || formData!.password.length > 0
                          ? { borderColor: "#2863FF" }
                          : { borderColor: "#DEE2E6" }
                      }
                      onClick={() => {
                        handleColorChange("password");
                      }}
                    >
                      <img
                        className="passWord-icon"
                        src={
                          colorChange.password || formData!.password.length > 0
                            ? images.password
                            : images.passwordGrey
                        }
                      />
                      <input
                        className="input-password"
                        type={togglePassWord ? "text" : "password"}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                      />
                      <label
                        className={
                          formData!.password.length > 0
                            ? "password-label-data"
                            : "password-label"
                        }
                      >
                        Password
                      </label>
                      {colorChange.password || formData!.password.length > 0 ? (
                        <img
                          className="show-hide-password-icon"
                          src={togglePassWord ? images.eye : images.eyeSlash}
                          onClick={() => setTogglePassword(!togglePassWord)}
                        />
                      ) : (
                        <img
                          className="show-hide-password-icon"
                          src={images.eyeSlashGrey}
                          onClick={() => setTogglePassword(!togglePassWord)}
                        />
                      )}
                    </div>
                    {errMsg?.passwordErr && (
                      <p className="email-err-msg">{errMsg?.passwordErr}</p>
                    )}
                  </div>
                  <div className="login-container-remember-me">
                    <label className="label-remember-me ">
                      <input
                        type="checkbox"
                        className="check-box-remember-me"
                      />
                      Remember me
                    </label>
                    <div
                      onClick={() => handlePasswordView("/forgot/password")}
                      className="forgot-password"
                    >
                      Forgot password?
                    </div>
                  </div>
                  <button
                    className="input-submit-enabled"
                    type="submit"
                    onClick={(e) => {
                      handleUserLogin(e);
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {isForgotPassword ? (
        <div className="login-container-form-inner-wrapper">
          <h1 className="login-header">Forgot Password?</h1>
          <form className="login-container-form">
            <div className="email-main-wrapper">
              <label className="login-container-lablel">Email Address</label>
              <div className="input-mail-mail-icon">
                <img
                  src={images.email}
                  className="email-icon"
                  draggable="false"
                />
                <input
                  className="input-email"
                  type="email"
                  placeholder="example123@gmail.com"
                  value={formData!.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              {errMsg?.emailErr?.length! > 0 ? (
                <p className="email-err-msg">{errMsg?.emailErr}</p>
              ) : null}
            </div>
            <button
              className="input-submit enabled"
              type="submit"
              onClick={(e) => handleForgotPassword(e)}
            >
              Send link
            </button>
          </form>
          <p className="or-text">Or</p>
          <div
            className="back-to-login-page"
            onClick={() => handlePasswordView("/login")}
          >
            Login
          </div>
        </div>
      ) : null}
    </>
  );
}
export default LoginComponent;
