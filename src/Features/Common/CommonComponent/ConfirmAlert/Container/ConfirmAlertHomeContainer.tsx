import ConfirmAlertHome from "../Component/ConfirmAlertHome";
import { ConfirmAlerHometTypes } from "../ConfirmAlerHometTypes";

function ConfirmAlertHomeContainer({
  confirmParameters,
}: ConfirmAlerHometTypes) {
  return <>{ConfirmAlertHome({ confirmParameters })}</>;
}

export default ConfirmAlertHomeContainer;
