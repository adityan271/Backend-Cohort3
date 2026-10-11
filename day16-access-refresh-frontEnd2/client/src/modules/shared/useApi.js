import axios from "axios";
import { useAuthContext } from "../auth/context/useAuthContext";

export default function useApi() {
  const authContext = useAuthContext();

  const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
  });

  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${authContext.accessToken}`;
    return config;
  });

  return api;
}
