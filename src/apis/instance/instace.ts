import axios from "axios";
import { refreshToken } from "../token";

export const sinabro = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

sinabro.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

sinabro.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      const {
        status,
        data: { message, code },
      } = error.response;

      if (message) {
        if (status === 401 && code === "EXPIRED_TOKEN") {
          refreshToken();
        }
      }
    }
    return Promise.reject(error);
  }
);
