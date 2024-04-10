import React from "react";
import VideoCards from "../Components/VideoCards";
import { useNavigate } from "react-router-dom";

function VideoCardsContainer() {
  const navigate = useNavigate();
  //handle navigate to vid details
  const handleNavigateToVidDetails = (_id: string) => {
    navigate(`/videos/details/${_id}`);
  };
  return <VideoCards handleNavigateToVidDetails={handleNavigateToVidDetails} />;
}

export default VideoCardsContainer;
