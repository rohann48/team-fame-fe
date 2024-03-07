import { useContext, useState } from "react";
import HomePage from "../Components/homePage";
import { GlobalDataContext } from "../../context/GlobalDataContext";

function HomePageContainer() {
  const { aboutUsData } = useContext(GlobalDataContext);
  return (
    <>
      <HomePage aboutUsData={aboutUsData} />
    </>
  );
}
export default HomePageContainer;
