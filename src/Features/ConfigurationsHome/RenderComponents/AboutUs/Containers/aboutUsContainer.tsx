import { useContext, useState } from "react";
import AboutUs from "../Components/aboutUs";
import { GlobalDataContext } from "../../../../context/GlobalDataContext";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { Notify } from "../../../../Common/Notify/NotificationMessages";
import { NotificationManager } from "react-notifications";

function AboutUsContainer() {
  const { aboutUsData, setAboutUsData } = useContext(GlobalDataContext);

  // Validation function
  const validateForm = () => {
    if (!aboutUsData?.content || !aboutUsData.content.trim()) {
      NotificationManager.error("About Us content is required", "", 3000);
      return false;
    }

    return true;
  };

  const postAboutData = async () => {
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      const data = await ApiHandler.postAboutUs(aboutUsData);
      setAboutUsData(data.results);
      NotificationManager.success(Notify.ADD, "", 2000);
    } catch (err) {
      console.error(err);
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
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
