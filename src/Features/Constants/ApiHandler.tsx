import { apiAuth } from "../AuthenticateApi";
import { loginParams } from "./ApiHandlerTypes";
import { Resource } from "./ResourceVariable";

export const ApiHandler = {
  //login
  authenticateUser: async (body: loginParams) => {
    const response = await apiAuth.postApiwithoutAuth(
      Resource.url.authenticateUser,
      body
    );
    return response.data;
  },
  getSessionInfo: async () => {
    const response = await apiAuth.getApiwithoutEncryption(
      Resource.url.sessionInfo
    );
    return response.data;
  },
  //logout
  logoutUser: async () => {
    const response = await apiAuth.getApiwithoutAuth(Resource.url.logout);
    return response.data;
  },
  //forgot password
  forgotPassword: async (modifiedData: { email: string }) => {
    const response = await apiAuth.postApiwithoutAuth(
      Resource.url.forgotPassword,
      modifiedData
    );
    return response.data;
  },
};
