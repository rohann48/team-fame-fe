import React, { useContext, useEffect } from "react";
import VideoCards from "../Components/VideoCards";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import { GlobalDataContext } from "../../../context/GlobalDataContext";

function VideoCardsContainer() {
  const navigate = useNavigate();
  const { allVideos, setAllVideos } = useContext(GlobalDataContext);
  //handle navigate to vid details
  const handleNavigateToVidDetails = (_id: string) => {
    navigate(`/videos/details/${_id}`);
  };

  return (
    <VideoCards
      handleNavigateToVidDetails={handleNavigateToVidDetails}
      allVideos={allVideos}
    />
  );
}

export default VideoCardsContainer;
