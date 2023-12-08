import axios from "axios";
import { NotificationManager } from "react-notifications";
// import { Notify } from "../Common/NotificationMessage";

//uploads Modal--> Download Template

export const toblobWithAuth = async (url: string, fileName: string) => {
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/${url}`,
      method: "GET",
      // headers: authHead,
      responseType: "blob", // imp
    });
    let blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });

    let anchor = document.createElement("a");
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    let docName = fileName;
    anchor.download = docName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    if (
      fileName === "PAISFDR" ||
      fileName === "impact" ||
      fileName === "ilpa"
    ) {
      NotificationManager.success(
        "Generated Successfully",
        // Notify.ERROR_TITLE.SUCCESS,
        2000
      );
    } else {
      NotificationManager.success(
        "Downloaded Successfully",
        // Notify.ERROR_TITLE.SUCCESS,
        2000
      );
    }

    return true;
  } catch (error) {
    return "no data";
  }
};
