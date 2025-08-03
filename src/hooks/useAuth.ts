import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "@/services/axios-client";
import { AuthContext } from "@/context/AuthContext";
import { onFailure } from "@/utils/notifications/OnFailure";
import { onSuccess } from "@/utils/notifications/OnSuccess";
import { queryClient } from "@/services/query-client";
import { extractErrorMessage } from "@/utils/formmaters";
import { AxiosError } from "axios";

import type {
  APIResponse,
  AuthContextType,
  AuthUser,
  LoginCredentials,
  OtpData,
  OtpResponse,
  RegisterData,
} from "@/utils/types/auth.types";

const useAuth = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext) as unknown as AuthContextType | null;

  if (!context) {
    throw new Error(
      "AuthContext value is null. Make sure your component is wrapped in AuthContext.Provider."
    );
  }

  const { authDetails, updateAuth } = context;
  const [otpRequested, setOtpRequested] = useState(false);
  const client = axiosClient(authDetails?.token?.token ?? null);

  const storedUserEmail = (email?: string): string | null | void => {
    if (email) {
      localStorage.setItem("register_email", email);
    } else {
      return localStorage.getItem("register_email");
    }
  };

  const loginMutation = useMutation<
    APIResponse<AuthUser>,
    AxiosError,
    LoginCredentials
  >({
    mutationFn: async (credentials) => {
      const { data } = await client.post("/login", credentials);
      if (!data?.data?.user)
        throw new Error("Invalid response: User data not found");
      return data.data;
    },
    onSuccess: (userData) => {
      updateAuth(userData.data);
      onSuccess({
        message: "Login Successful!",
        success: "Continuing to dashboard",
      });
      if (userData.data.user.lastRoleId === 2) {
        navigate("/promoter/events");
      } else {
        navigate("/attendee/home");
      }
    },
    onError: (error) => {
      onFailure({ message: "Login Failed", error: extractErrorMessage(error) });
    },
  });

  const registerMutation = useMutation<
    APIResponse<unknown>,
    AxiosError,
    RegisterData
  >({
    mutationFn: async (userData) => {
      const { data } = await client.post("/register", userData);
      return data;
    },
    onSuccess: (userData) => {
      setOtpRequested(true);
      storedUserEmail((userData?.data as { email?: string })?.email);
      navigate("/email-verification");
      onSuccess({
        message: "Registration Successful!",
        success: userData?.message || "User created successfully",
      });
    },
    onError: (err) => {
      onFailure({
        message: "Registration Failed",
        error: extractErrorMessage(err),
      });
    },
  });

  const updateProfile = useMutation<APIResponse<unknown>, AxiosError, FormData>(
    {
      mutationFn: async (profileData) => {
        const userId = authDetails?.user?.profile?.userId;
        if (!userId) throw new Error("User ID not found");

        const { data } = await client.put(`/profile/${userId}`, profileData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (!data?.status)
          throw new Error(data?.message || "Error updating profile");
        return data.data;
      },
      onSuccess: (updatedUser) => {
        const { user, ...other } = authDetails!;
        updateAuth({ ...other, user: { ...user, ...updatedUser } });
        onSuccess({
          message: "Profile Update",
          success: "Profile updated successfully!",
        });
      },
      onError: (err) => {
        onFailure({
          message: "Failed to update profile",
          error: extractErrorMessage(err),
        });
      },
    }
  );

  const requestOtpMutation = useMutation<
    APIResponse<OtpResponse>,
    AxiosError,
    void
  >({
    mutationFn: async () => {
      const email = storedUserEmail() as string;
      if (!email) throw new Error("No email provided");

      const { data } = await client.post("/resend-otp", { email });
      if (!data?.success) throw new Error("An error occurred");
      return data;
    },
    onSuccess: (data) => {
      setOtpRequested(true);
      onSuccess({
        message: "OTP Requested!",
        success: data?.message || "Please check your mail",
      });
    },
    onError: (err) => {
      setOtpRequested(false);
      onFailure({
        message: "Can't Request OTP",
        error: extractErrorMessage(err),
      });
    },
  });

  const verifyOtpMutation = useMutation<
    APIResponse<AuthUser>,
    AxiosError,
    OtpData
  >({
    mutationFn: async (otpData) => {
      const email = storedUserEmail() as string;
      if (!email) throw new Error("No email provided");

      const { data } = await client.post("/verify-otp", { ...otpData, email });
      if (!data?.success)
        throw new Error("Invalid response: User data not found");
      return data.data;
    },
    onSuccess: (userData) => {
      updateAuth(userData.data);
      navigate("/login");
      onSuccess({ message: "OTP Verified!", success: "Proceeding to login" });
    },
    onError: (err) => {
      onFailure({
        message: "OTP Verification Failed",
        error: extractErrorMessage(err),
      });
    },
  });

  const logoutMutation = useMutation<void, AxiosError, void>({
    mutationFn: async () => {
      queryClient.clear();
    },
    onSuccess: () => {
      updateAuth(null);
      navigate("/login", { replace: true });
      onSuccess({
        message: "Logout successful",
        success: "You have been logged out.",
      });
    },
    onError: (err) => {
      onFailure({ message: "Logout Failed", error: err.message });
    },
  });

  const isLoading = {
    login: loginMutation.isPending,
    signUp: registerMutation.isPending,
    requestOtp: requestOtpMutation.isPending,
    verifyOtp: verifyOtpMutation.isPending,
    logout: logoutMutation.isPending,
    updateProfile: updateProfile.isPending,
    overall:
      loginMutation.isPending ||
      registerMutation.isPending ||
      requestOtpMutation.isPending ||
      verifyOtpMutation.isPending ||
      logoutMutation.isPending,
  };

  return {
    login: loginMutation.mutate,
    signUp: registerMutation.mutate,
    verifyOtp: verifyOtpMutation.mutateAsync,
    requestOtp: requestOtpMutation.mutateAsync,
    logout: logoutMutation.mutate,
    updateProfile: updateProfile.mutateAsync,
    otpRequested,
    isLoading,
    storedUserEmail,
  };
};

export default useAuth;
