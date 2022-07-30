import axios from "axios";
import { toast } from "react-toastify";

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

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      toast.error("Erro de requisição. Nova autenticação necessária.");
    }
    return Promise.reject(error);
  }
);
