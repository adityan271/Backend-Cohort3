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

  api.interceptors.response.use(async (config) => {
    if (config.status === 401) {
      const res = await api.post("/auth/refresh");
      authContext.setAccessToken(res.data.accessToken);

      config.headers.Authorization = `Bearer ${res.data.accessToken}`;

      return api(config);
    }
  });

  return api;
}
