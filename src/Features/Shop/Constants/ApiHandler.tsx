import { apiAuth } from "../../AuthenticateApi";
// import { loginParams } from "./ApiHandlerTypes";
import { Resource } from "./ResourceVariable";

export const ApiHandler = {
  getProductDetails: async (prodId: string | undefined) => {
    try {
      const response = await apiAuth.getApiwithoutAuth(
        Resource.url.getProductDetails(prodId)
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
