import { useState } from "react";
import Configuration from "../Components/configuration";
import images from "../../ImageVariables";

function ConfigurationContainer() {
  const sideNavLinks = [
    { title: "about us", img: images.aboutusIcon },
    { title: "events", img: images.eventIcon },
    { title: "testimonial", img: images.testimonialIcon },
    { title: "videos", img: images.videoIcon },
    { title: "news", img: images.newsIcon },
    { title: "gold scheme", img: images.schemeIcon },
  ];
  return (
    <>
      <Configuration sideNavLinks={sideNavLinks} />
    </>
  );
}
export default ConfigurationContainer;
