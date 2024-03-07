import { useState } from "react";
import Configuration from "../Components/configuration";
import images from "../../../ImageVariables";
import { useRoutes } from "react-router-dom";
import { configRoutes } from "../../routes";

function ConfigurationContainer() {
  const sideNavLinks = [
    { title: "about us", img: images.aboutusIcon, path: "/config/about-us" },
    { title: "events", img: images.eventIcon, path: "events" },
    { title: "testimonial", img: images.testimonialIcon, path: "testimonial" },
    { title: "videos", img: images.videoIcon, path: "videos" },
    { title: "news", img: images.newsIcon, path: "about-us" },
    { title: "gold scheme", img: images.schemeIcon, path: "scheme" },
  ];

  const configurationRoutes = useRoutes(configRoutes);

  return (
    <Configuration
      configurationRoutes={configurationRoutes}
      sideNavLinks={sideNavLinks}
    />
  );
}
export default ConfigurationContainer;
