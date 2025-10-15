import { axiosClient } from "@/services/axios-client";
import { onSuccess } from "@/utils/notifications/OnSuccess";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { onFailure } from "../utils/notifications/OnFailure";
import { useAuthorize } from "@/context/AuthContext";
import { extractErrorMessage } from "@/utils/formmaters";

const useWaitlist = () => {

  const client = axiosClient(null);

  const joinWaitlistMutation = useMutation({
    mutationFn: async (credentials: { email: string }) => {
      const { data } = await client.post("/waitlists/join", credentials);
     if (data.success !== true || !data.data) {
        throw new Error("Invalid response: Something went wrong");
      }
      return data;
    },
    onSuccess: (data) => {
      onSuccess({
        message: "You have been added to the waitlist",
        success: "Please check your email",
      });
    },
    onError: (error) => {
      console.log("error", error);
      onFailure({
        message: "Failed to join waitlist!",
        error: extractErrorMessage(error) || "Something went wrong",
      });
    },
  });


  return {
    joinWaitlist: joinWaitlistMutation,
  };
};

export default useWaitlist;
