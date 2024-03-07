import { useContext, useState } from "react";
import AboutUs from "../Components/aboutUs";
import { GlobalDataContext } from "../../../../context/GlobalDataContext";
import { ApiHandler } from "../../../Constants/ApiHandler";

function AboutUsContainer() {
  const { aboutUsData, setAboutUsData } = useContext(GlobalDataContext);
  const postAboutData = async () => {
    const data = await ApiHandler.postAboutUs(aboutUsData);
    setAboutUsData(data.results);
  };

  const handleOnChange = (val: string) => {
    setAboutUsData({ content: val });
  };
  return (
    <AboutUs
      aboutUsData={aboutUsData}
      postAboutData={postAboutData}
      handleOnChange={handleOnChange}
    />
  );
}
export default AboutUsContainer;
