import Axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";
import { newAccessToken } from "../services/token";

const api = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequset = error.config;
    if (error.response.status === 401 && !originalRequset._retry) {
      originalRequset._retry = true;
      const response = await newAccessToken();
      if (!response?.response) return;
      setCookie(response.response.data);
      console.log(response);
      return api(originalRequset);
    }
  }
);

export default api;
