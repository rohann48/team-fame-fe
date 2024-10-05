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
  postEvents: async (data: FormData) => {
    try {
      const response = await apiAuth.postApiForFormDatawithoutEncryption(
        Resource.url.postEvents,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  postTestimonial: async (data: FormData) => {
    const response = await apiAuth.postApiForFormDatawithoutEncryption(
      Resource.url.postTestimonial,
      data
    );
    return response.data;
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
  deleteProductDetails: async (docId: string, fileKey: string) => {
    const response = await apiAuth.deleteApiwithoutAuth(
      Resource.url.deleteProductDetails(docId, fileKey)
    );
    return response.data;
  },
  deleteTestimonial: async (docId: string, fileKey: string) => {
    const response = await apiAuth.deleteApiwithoutAuth(
      Resource.url.deleteTestimonial(docId, fileKey)
    );
    return response.data;
  },
  deleteEvent: async (docId: string, fileKey: string) => {
    const response = await apiAuth.deleteApiwithoutAuth(
      Resource.url.deleteEvent(docId, fileKey)
    );
    return response.data;
  },
  getSchemeDetails: async (clientId: string) => {
    const response = await apiAuth.getApiwithoutAuth(
      Resource.url.getSchemeDetails(clientId)
    );
    return response.data;
  },
  getTestiMonialData: async () => {
    const response = await apiAuth.getApiwithoutAuth(
      Resource.url.getTestiMonialData
    );
    return response.data;
  },
  getEventsData: async () => {
    const response = await apiAuth.getApiwithoutAuth(
      Resource.url.getEventsData
    );
    return response.data;
  },
};
