import React from "react";
import SchemeHomePage from "../Components/SchemeHomePage";
import { useRoutes } from "react-router-dom";
import { schemeRoutes } from "../../routes";

function SchemeHomePageContainer() {
  const renderRoutes = useRoutes(schemeRoutes);
  return <SchemeHomePage renderRoutes={renderRoutes} />;
}

export default SchemeHomePageContainer;
