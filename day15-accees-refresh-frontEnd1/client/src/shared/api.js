import axios from "axios";
import { useAuth } from "../context/UserContext";

const api = axios.create({
  baseURL: "http://localhost:5173/api",

  //cookies ka data include hoga
  withCredentials: true,
});

const useApi = () => {
  const { accessToken } = useAuth();

  api.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};
