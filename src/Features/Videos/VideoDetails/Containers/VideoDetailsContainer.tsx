import React, { useEffect, useState } from "react";
import VideoDetails from "../Components/VideoDetails";
import { useParams } from "react-router-dom";
import { ApiHandler } from "../../../Constants/ApiHandler";

function VideoDetailsContainer() {
  const { id } = useParams() as { id: string | null };
  //state maintained for event and news info
  const [videoInfo, setVideoInfo] = useState({} as any);
  //get events and news
  useEffect(() => {
    const fetchVideoById = async () => {
      const response = await ApiHandler.getVideoById(
        "6616c637592961c0c89a319d"
      );
      setVideoInfo({ ...response.results });
    };
    if (id) {
      fetchVideoById();
    }
  }, [id]);
  console.log("videoInfo", videoInfo);

  return <VideoDetails videoInfo={videoInfo} />;
}

export default VideoDetailsContainer;
