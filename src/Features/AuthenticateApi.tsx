import axios from "axios";
import cryptoEncryption from "./Common/CommonFunctions/EncryptDecrypt";
import { interceptedMessageTypes } from "../Features/Common/Enums.types";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
axios.defaults.withCredentials = true;

export const initSessionInterceptor = (onSessionEnd: any) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: any) => {
      if (
        error?.response?.data?.error?.message ===
        interceptedMessageTypes.SESSION_END
      ) {
        onSessionEnd();
        // Return a resolved Promise with the default response
        error.interceptedMessage = interceptedMessageTypes.SESSION_END;
      }
      return Promise.reject(error);
    }
  );
};

export const apiAuth = {
  /**api method with encyrption */
  getApiwithoutAuth: async (url: string) => {
    let options = {};
    if (!process.env.REACT_APP_ISDEVENV)
      options = { headers: { endpoint: cryptoEncryption(url) } };
    return axios.get(
      `${process.env.REACT_APP_BASE_URL}tf${
        !process.env.REACT_APP_ISDEVENV ? "" : url
      }`,
      options
    );
  },
  postApiwithoutAuth: async (url: string, data: any) => {
    let options = {};
    if (!process.env.REACT_APP_ISDEVENV)
      options = { headers: { endpoint: cryptoEncryption(url) } };

    return axios.post(
      `${process.env.REACT_APP_BASE_URL}tf${
        !process.env.REACT_APP_ISDEVENV ? "" : url
      }`,
      !process.env.REACT_APP_ISDEVENV
        ? { data: cryptoEncryption({ ...data }) }
        : data,
      options
    );
  },
  putApiwithoutAuth: async (url: string, data?: any) => {
    let options = {};
    if (!process.env.REACT_APP_ISDEVENV)
      options = { headers: { endpoint: cryptoEncryption(url) } };
    return axios.put(
      `${process.env.REACT_APP_BASE_URL}${
        !process.env.REACT_APP_ISDEVENV ? "" : url
      }`,
      !process.env.REACT_APP_ISDEVENV
        ? { data: cryptoEncryption({ ...data }) }
        : data,
      options
    );
  },
  deleteApiwithoutAuth: async (url: string, data?: any) => {
    let options = {};
    if (!process.env.REACT_APP_ISDEVENV)
      options = { headers: { endpoint: cryptoEncryption(url) } };

    return await axios.delete(
      `${process.env.REACT_APP_BASE_URL}${
        !process.env.REACT_APP_ISDEVENV ? "" : url
      }`,
      options
    );
  },

  /**api method with out encyrption */
  getApiwithoutEncryption: async (url: string) => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}${url}`);
  },
  postApiwithoutEncryption: async (url: string, data?: any) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}${url}`, data);
  },
  putApiwithoutEncryption: async (url: string, data: any) => {
    return axios.put(`${process.env.REACT_APP_BASE_URL}${url}`, data);
  },
  postApiForFormDatawithoutEncryption: async (url: string, data?: any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    return axios.post(`${process.env.REACT_APP_BASE_URL}${url}`, data, config);
  },
};
