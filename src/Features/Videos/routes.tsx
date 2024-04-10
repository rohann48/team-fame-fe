import VideoCards from "./VideoCards";
import VideoDetails from "./VideoDetails";

export const videoRoutes = [
  {
    index: true,
    element: <VideoCards />,
  },
  {
    path: "/details/:id",
    element: <VideoDetails />,
  },
];
