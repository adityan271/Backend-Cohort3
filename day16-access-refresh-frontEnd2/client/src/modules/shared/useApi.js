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

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        console.log("Unauthorized, neet refresh token");
        const res = await axios.post("/api/auth/refresh");
        console.log("Refreshing access token");
        authContext.setAccessToken(res.data.accessToken);
        error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return axios(error.config);
      }
      return Promise.reject(error);
    },
  );

  return api;
}
