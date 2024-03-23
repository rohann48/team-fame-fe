import { SchemeHomePageTypes } from "../SchemeHomePageTypes";

function SchemeHomePage({ renderRoutes }: Readonly<SchemeHomePageTypes>) {
  return <>{renderRoutes}</>;
}

export default SchemeHomePage;
