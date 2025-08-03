import { createContext, useEffect, useState, type ReactNode } from "react";
import { useQueryClient } from "@tanstack/react-query";

type Token = {
  token: string;
  expiresAt: string; // ISO date string
};

type AuthUser = {
  [x: string]: any;
  id: string;
  name: string;
  email: string;
  token: Token;
};

type AuthContextType = {
  authDetails: AuthUser | null;
  updateAuth: (user: AuthUser | null) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();

  const [authDetails, setAuthDetails] = useState<AuthUser | null>(() => {
    const storedUser = sessionStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const isTokenExpired = (expiresAt: string) => {
    return new Date(expiresAt) <= new Date();
  };

  const refreshToken = async () => {
    if (!authDetails?.token?.token) return;

    try {
      const response = await fetch("/api/refresh-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authDetails.token.token}`,
        },
      });

      if (!response.ok) throw new Error("Token refresh failed");

      const newToken: Token = await response.json();
      updateAuth({ ...authDetails, token: newToken });
    } catch (error) {
      console.error("Failed to refresh token:", error);
      updateAuth(null);
    }
  };

  // Expired token cleanup
  useEffect(() => {
    if (
      authDetails?.token?.expiresAt &&
      isTokenExpired(authDetails.token.expiresAt)
    ) {
      updateAuth(null);
    }
  }, [authDetails]);

  // Refresh before token expires
  useEffect(() => {
    if (!authDetails?.token?.expiresAt) return;

    const expiresIn =
      new Date(authDetails.token.expiresAt).getTime() - Date.now();
    if (expiresIn > 0) {
      const timer = setTimeout(refreshToken, expiresIn - 60 * 1000); // refresh 1 minute early
      return () => clearTimeout(timer);
    }
  }, [authDetails]);

  const updateAuth = (user: AuthUser | null) => {
    setAuthDetails(user);
    if (user) {
      sessionStorage.setItem("authUser", JSON.stringify(user));
      queryClient.setQueryData(["authUser"], user);
    } else {
      sessionStorage.removeItem("authUser");
      queryClient.removeQueries({ queryKey: ["authUser"] });
    }
  };

  return (
    <AuthContext.Provider value={{ authDetails, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
