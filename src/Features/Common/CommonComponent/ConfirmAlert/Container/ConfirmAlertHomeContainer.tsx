import ConfirmAlertHome from "../Component/ConfirmAlertHome";
import { ConfirmAlertHomeTypes } from "../ConfirmAlerHometTypes";

function ConfirmAlertHomeContainer({
  confirmParameters,
}: ConfirmAlertHomeTypes) {
  return <>{ConfirmAlertHome({ confirmParameters })}</>;
}

export default ConfirmAlertHomeContainer;
