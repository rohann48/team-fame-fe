import { apiAuth } from "../AuthenticateApi";
// import { loginParams } from "./ApiHandlerTypes";
import { Resource } from "./ResourceVariable";

export const ApiHandler = {
  //login
  // authenticateUser: async (body: loginParams) => {
  //   const response = await apiAuth.postApiwithoutAuth(
  //     Resource.url.authenticateUser,
  //     body
  //   );
  //   return response.data;
  // },
  getAboutUs: async () => {
    try {
      const response = await apiAuth.getApiwithoutAuth(Resource.url.getAboutUs);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getEvents: async () => {
    try {
      const response = await apiAuth.getApiwithoutAuth(Resource.url.getEvents);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getTestimonials: async () => {
    try {
      const response = await apiAuth.getApiwithoutAuth(
        Resource.url.getTestimonials
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  registerUser: async (data: { [key: string]: string }) => {
    try {
      const response = await apiAuth.postApiwithoutAuth(
        Resource.url.registerUser,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  authenticateUser: async (data: { [key: string]: string }) => {
    try {
      const response = await apiAuth.postApiwithoutAuth(
        Resource.url.authenticateUser,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getProductDetails: async () => {
    try {
      const response = await apiAuth.getApiwithoutAuth(
        Resource.url.getProductDetails
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getCartDataByClientId: async (clientId: string | null) => {
    try {
      const response = await apiAuth.getApiwithoutAuth(
        Resource.url.getCartDataByClientId(clientId)
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  updateProdQuantity: async (
    clientId: string | null,
    data: { [key: string]: object }
  ) => {
    try {
      const response = await apiAuth.putApiwithoutAuth(
        Resource.url.updateProdQuantity(clientId),
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  removeProductFromCart: async (
    clientId: string | null,
    productId: string | null
  ) => {
    try {
      const response = await apiAuth.putApiwithoutAuth(
        Resource.url.removeProdFromCart(clientId, productId)
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getVideoById: async (videoId: string | null) => {
    try {
      const response = await apiAuth.getApiwithoutAuth(
        Resource.url.getVideoById(videoId)
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  // //logout
  // logoutUser: async () => {
  //   const response = await apiAuth.getApiwithoutAuth(Resource.url.logout);
  //   return response.data;
  // },
  // //forgot password
  // forgotPassword: async (modifiedData: { email: string }) => {
  //   const response = await apiAuth.postApiwithoutAuth(
  //     Resource.url.forgotPassword,
  //     modifiedData
  //   );
  //   return response.data;
  // },
  getEventAndNewsDetails: async (id: string | null) => {
    try {
      const response = await apiAuth.getApiwithoutAuth(
        Resource.url.getEventAndNewsDetails(id)
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getAllVideos: async () => {
    try {
      const response = await apiAuth.getApiwithoutAuth(
        Resource.url.getAllVideos
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
