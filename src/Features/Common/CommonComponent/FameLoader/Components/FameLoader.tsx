import React from "react";
import "../SCSS/styles.css";
import images from "../../../../ImageVariables";

export default function LogoLoader() {
  console.log("called");

  return (
    <div className="loader-wrapper">
      <img src={images.teamFameLogo} alt="loading..." className="loader-logo" />
    </div>
  );
}
