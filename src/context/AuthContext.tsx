import { createContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const AuthContext = createContext(null);

import { ReactNode } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();

  // Load auth details from sessionStorage
  const [authDetails, setAuthDetails] = useState(() => {
    const storedUser = sessionStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Check if the token is expired
  const isTokenExpired = (expiresAt) => {
    return expiresAt && new Date(expiresAt) <= new Date();
  };

  // Refresh token function
  const refreshToken = async () => {
    if (!authDetails || !authDetails.token?.token) return; // Stop if no user or token

    try {
      const response = await fetch("/api/refresh-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authDetails.token.token}`,
        },
      });

      if (!response.ok) throw new Error("Token refresh failed");

      const newToken = await response.json();
      updateAuth({ ...authDetails, token: newToken });
    } catch (error) {
      console.error("Failed to refresh token:", error);
      updateAuth(null); // Logout user if refresh fails
    }
  };

  // Auto-logout if token expires
  useEffect(() => {
    if (!authDetails || !authDetails.token?.expiresAt) return;

    if (isTokenExpired(authDetails.token.expiresAt)) {
      updateAuth(null);
    }
  }, [authDetails]);

  // Schedule token refresh only if a valid user exists
  useEffect(() => {
    if (!authDetails || !authDetails.token?.expiresAt) return;

    const expiresIn = new Date(authDetails?.token?.expiresAt) - new Date();
    if (expiresIn > 0) {
      const timer = setTimeout(refreshToken, expiresIn - 60000); // Refresh 1 min before expiry
      return () => clearTimeout(timer);
    }
  }, [authDetails]);

  // Function to update auth state
  const updateAuth = (newUser) => {
    setAuthDetails(newUser);
    if (newUser) {
      sessionStorage.setItem("authUser", JSON.stringify(newUser));
      queryClient.setQueryData(["authUser"], newUser);
    } else {
      sessionStorage.removeItem("authUser");
      queryClient.removeQueries(["authUser"]);
    }
  };

  return (
    <AuthContext.Provider value={{ authDetails, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
