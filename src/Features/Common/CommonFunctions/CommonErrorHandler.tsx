import images from "../../ImageVariables";
import ConfirmAlertHome from "../CommonComponent/ConfirmAlert/Component/ConfirmAlertHome";
import { ErrorMessageEnum } from "../Enums.types";
import { NotificationManager } from "react-notifications";
import { Notify } from "../Notify/NotificationMessages";
import confirmParameters from "./ConfirmParameters";
const handleButtonClick = (errMessage: string, navigate: Function) => {
  switch (errMessage) {
    case ErrorMessageEnum.UNAUTHORIZED_USER:
      navigate("/");
      break;
    case ErrorMessageEnum.SESSION_END:
      window.location.reload();
      break;
    default:
      // Handle other cases if needed
      break;
  }
};
export const handleErrorResponse = (error: any, navigate: Function) => {
  const errMessage =
    error?.response?.data?.message || error?.response?.data?.error?.message;
  if (!errMessage) throw new Error(error);
  if (errMessage) {
    if (
      errMessage === ErrorMessageEnum.UNAUTHORIZED_USER ||
      errMessage === ErrorMessageEnum.SESSION_END
    ) {
      const parameters = confirmParameters({
        titleImage: images.confirmAlert,
        titleName: errMessage,
        description: "Oops...Access restricted",
        buttonText: "OK",
        onClickFunction: () => handleButtonClick(errMessage, navigate),
        buttonClassName: "button-confirm-ok",
      });
      ConfirmAlertHome({ confirmParameters: parameters });
    } else {
      throw error;
    }
  }
};
