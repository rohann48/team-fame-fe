import { allVideos } from "../../../context/GlobalDataContextTypes";

export type AdminVideosTypes = {
  handleChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string
  ) => void;
  handleSave: () => void;
  allVideos: allVideos;
};
