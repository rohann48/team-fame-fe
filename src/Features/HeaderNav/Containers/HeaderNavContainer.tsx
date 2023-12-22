import { useState } from "react";
import HeaderNav from "../Components/HeaderNav";

function HeaderNavContainer() {
  // let host = window.location.host;
  // let pattern = /localhost/;
  // let isLocallyHosted = pattern.test(host);

  const [activeTab, setActiveTab] = useState("home");
  return (
    <>
      {/* {process.env.NODE_ENV === "development" && isLocallyHosted && ( */}
      <HeaderNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* )} */}
    </>
  );
}
export default HeaderNavContainer;
