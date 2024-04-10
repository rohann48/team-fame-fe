import VideoHomePage from "../Components/VideoHomePage";
import { useRoutes } from "react-router-dom";
import { videoRoutes } from "../../routes";

function VideoHomePageContainer() {
  const renderRoutes = useRoutes(videoRoutes);
  return <VideoHomePage renderRoutes={renderRoutes} />;
}

export default VideoHomePageContainer;
