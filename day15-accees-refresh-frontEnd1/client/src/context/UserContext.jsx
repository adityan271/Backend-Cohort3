import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = {
    user,
    accessToken,
    loading,
    isAuthenticated: !!user,
    setUser,
    setAccessToken,
    setLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useAuth() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }

  return context;
}

export const useUser = useAuth;

export default UserContext;
