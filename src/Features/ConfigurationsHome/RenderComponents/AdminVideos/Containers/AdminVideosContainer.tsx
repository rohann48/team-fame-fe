import { useContext } from "react";
import AdminVideos from "../Components/AdminVideos";
import { useImmer } from "use-immer";
import { LoginContext } from "../../../../context/LoginContext";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../../Common/Notify/NotificationMessages";

let initialState: {
  [key: string]: any;
} = {
  title: "",
  description: "",
  videoFiles: null,
};
function AdminVideosContainer() {
  const { userInfo } = useContext(LoginContext);

  //state maintained by AdminVideos
  const [uploadedVideoData, setUploadedData] = useImmer({ ...initialState });
  const handleChangeInput = (e: any, type: string) => {
    if (type === "videoInfo") {
      const files = e.target.files;
      if (files) {
        setUploadedData((draft) => {
          draft.videoFiles = files;
        });
      }
    } else {
      setUploadedData((draft) => {
        draft[type] = e.target.value;
      });
    }
  };
  console.log(uploadedVideoData.videoFiles[0], "sds");
  //save videos
  const handleSave = () => {
    try {
      let form = new FormData();
      form.append("title", uploadedVideoData.title);
      form.append("description", uploadedVideoData.description);
      form.append("clientId", userInfo._id);
      form.append("videoInfo", uploadedVideoData.videoFiles[0]);
      let response = ApiHandler.postVideoInfo(form);
      NotificationManager.success(Notify.ADD, "", 2000);

      console.log(response);
    } catch (err) {
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
  };
  return (
    <AdminVideos
      handleChangeInput={handleChangeInput}
      handleSave={handleSave}
    />
  );
}

export default AdminVideosContainer;
