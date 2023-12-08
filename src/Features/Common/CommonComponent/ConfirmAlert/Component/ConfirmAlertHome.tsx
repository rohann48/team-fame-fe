import { confirmAlert } from "react-confirm-alert";
import { ConfirmAlerHometTypes } from "../ConfirmAlerHometTypes";
import "../SCSS/styles.css";

function ConfirmAlertHome({ confirmParameters }: ConfirmAlerHometTypes) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="custom-ui">
          <div className="delete-title">
            <span className="delete-img-cover">
              <img
                className="delete-img"
                src={confirmParameters.title.images}
                alt="confirm"
              />
            </span>
            <span className="delete-text">
              <h1 className="delete-text-header">
                {confirmParameters?.title?.titleName}
              </h1>
            </span>
          </div>
          <div className="delete-description">
            <p className="delete-description-text-one">
              {confirmParameters?.descriptions?.first}
            </p>
            {confirmParameters?.descriptions?.second && (
              <p className="delete-description-text-two">
                {confirmParameters?.descriptions?.second}
              </p>
            )}
          </div>
          <div className="delete-button-covers">
            {confirmParameters?.buttons?.No && (
              <button
                className={confirmParameters?.buttonClassName?.no}
                onClick={() => onClose()}
              >
                {confirmParameters?.buttons?.No}
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
  });
}

export default ConfirmAlertHome;
