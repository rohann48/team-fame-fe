import { GlobalDataContextTypes } from "../../context/GlobalDataContextTypes";

export type VideoCardsTypes = {
  handleNavigateToVidDetails: (_id: string) => void;
  allVideos: GlobalDataContextTypes["allVideos"];
};
