import { confirmAlert } from "react-confirm-alert";
import "../SCSS/styles.css";
import { ConfirmAlertHomeTypes } from "../ConfirmAlerHometTypes";

function ConfirmAlertHome({ confirmParameters }: ConfirmAlertHomeTypes) {
  // function makeBold(message:string) {
  //   // Original message with a placeholder for the dynamic word

  //   // Replace the placeholder with the dynamic word wrapped in <strong> tags
  //   const boldMessage = message.replace(/{{dynamicWord}}/g, `<strong>${dynamicWord}</strong>`);

  //   return boldMessage;
  // }
  function firstLineClassName(
    confirmParameters: ConfirmAlertHomeTypes["confirmParameters"]
  ) {
    if (confirmParameters.isNotify) {
      return "notify";
    } else if (confirmParameters.isReview) {
      return "review";
    } else {
      return "without-notify";
    }
  }
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className={`custom-ui ${firstLineClassName(confirmParameters)}`}>
          <div className="delete-title">
            <span className="delete-img-cover">
              <img
                style={{
                  width:
                    confirmParameters.isReview ?? confirmParameters.isReview
                      ? "25px"
                      : "",
                }}
                className="delete-img"
                src={confirmParameters.title.images}
                alt="confirm"
              />
            </span>
            <span className="delete-text">
              <h1
                className={`delete-text-header ${firstLineClassName(
                  confirmParameters
                )}`}
              >
                {confirmParameters?.title?.titleName}
              </h1>
            </span>
          </div>
          <div
            className={`delete-description ${firstLineClassName(
              confirmParameters
            )}`}
          >
            <p
              className={`delete-description-text-one ${firstLineClassName(
                confirmParameters
              )}`}
            >
              {confirmParameters?.descriptions?.first}
            </p>
            {confirmParameters?.descriptions?.second && (
              <p
                className={`delete-description-text-two ${firstLineClassName(
                  confirmParameters
                )}`}
              >
                {confirmParameters?.descriptions?.second}
              </p>
            )}
          </div>
          <div className="delete-button-covers">
            {confirmParameters?.buttons?.No && (
              <button
                className={confirmParameters?.buttonClassName?.no}
                onClick={() => {
                  onClose();
                }}
              >
                {confirmParameters?.buttons?.No}
              </button>
            )}
            {confirmParameters?.buttons?.YesWithoutSave && (
              <button
                className={confirmParameters?.buttonClassName?.other}
                onClick={() => {
                  {
                    confirmParameters?.onClickWithoutSave!();
                  }
                  onClose();
                }}
              >
                {confirmParameters?.buttons?.YesWithoutSave}
              </button>
            )}
            {confirmParameters?.buttons?.other && (
              <button
                className={confirmParameters?.buttonClassName?.other}
                onClick={() => {
                  {
                    confirmParameters?.onClickForNoButton!();
                  }
                  onClose();
                }}
              >
                {confirmParameters?.buttons?.other}
              </button>
            )}
            {confirmParameters?.buttons?.Yes && (
              <button
                className={confirmParameters?.buttonClassName?.yes}
                onClick={() => {
                  {
                    confirmParameters?.onClick();
                  }
                  onClose();
                }}
              >
                {confirmParameters?.buttons?.Yes}
              </button>
            )}
          </div>
        </div>
      );
    },
    closeOnEscape: confirmParameters.enableOnClose,
    closeOnClickOutside: confirmParameters.enableOnClose,
  });
}

export default ConfirmAlertHome;
