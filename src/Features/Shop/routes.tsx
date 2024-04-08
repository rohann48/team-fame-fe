import ShoppingCart from "./ShoppingCart/";
import ViewProduct from "./ViewProduct";

export const shopRoutes = [
  {
    index: true,
    element: <ShoppingCart />,
  },
  {
    path: "/product/:productId",
    element: <ViewProduct />,
  },
];
