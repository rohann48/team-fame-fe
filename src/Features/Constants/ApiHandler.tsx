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
};
