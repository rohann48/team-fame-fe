import { apiAuth } from "../../AuthenticateApi";
import { Resource } from "./ResourceVaribale";
export const ApiHandler = {
  getGoldRate: async () => {
    try {
      const response = await apiAuth.getApiwithoutAuth(
        Resource.url.getGoldRate()
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  JoinScheme: async (modifiedData: { [key: string]: any }) => {
    try {
      const response = await apiAuth.postApiwithoutAuth(
        Resource.url.joinScheme,
        modifiedData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  fetchUserInfo: async (userId: string | null) => {
    try {
      const response = await apiAuth.getApiwithoutAuth(
        Resource.url.fetchUserInfo(userId)
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
