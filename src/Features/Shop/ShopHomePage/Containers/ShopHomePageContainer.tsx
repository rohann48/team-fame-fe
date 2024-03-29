import ShopHomePage from "../Components/ShopHomePage";
import { useRoutes } from "react-router-dom";
import { shopRoutes } from "../../routes";

function ShopHomePageContainer() {
  const renderRoutes = useRoutes(shopRoutes);
  return <ShopHomePage renderRoutes={renderRoutes} />;
}

export default ShopHomePageContainer;
