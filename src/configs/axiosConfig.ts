import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    "Content-Type": "application/json-patch+json",
  },
});

AxiosInstance.interceptors.request.use((request) => {
  request.headers = {
    ...request.headers,
    Authorization: sessionStorage.getItem("Authorization") || "",
  };
  return request;
});
