import { apiAuth } from "../../AuthenticateApi";
import { PostEventProps, PostTestimonialProps } from "./ApiHandlerTypes";
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
  getpostAboutUs: async () => {
    try {
      const response = await apiAuth.getApiwithoutAuth(Resource.url.getAboutUs);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  postAboutUs: async (data: any) => {
    try {
      const response = await apiAuth.postApiwithoutAuth(
        Resource.url.postAboutUs,
        data
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

  //post Events
  postEvents: async (data: PostEventProps) => {
    try {
      const response = await apiAuth.postApiwithoutAuth(
        Resource.url.postEvents,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  postTestimonial: async (data: PostTestimonialProps) => {
    try {
      const response = await apiAuth.postApiwithoutAuth(
        Resource.url.postTestimonial,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  postProductDetails: async (formData: any) => {
    const response = await apiAuth.postApiForFormDatawithoutEncryption(
      Resource.url.postProductInfo,
      formData
    );
    return response.data;
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
  postVideoInfo: async (formData: any) => {
    const response = await apiAuth.postApiForFormDatawithoutEncryption(
      Resource.url.postVideoInfo,
      formData
    );
    return response.data;
  },
};
