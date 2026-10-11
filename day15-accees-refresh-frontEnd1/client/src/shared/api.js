import axios from "axios";
import { useMemo } from "react";
import { useAuth } from "../context/UserContext";

const useApi = () => {
  const { accessToken } = useAuth();

  return useMemo(
    () =>
      axios.create({
        baseURL: "/api",
        withCredentials: true,
        headers: accessToken
          ? { Authorization: `Bearer ${accessToken}` }
          : {},
      }),
    [accessToken],
  );
};

export default useApi;
