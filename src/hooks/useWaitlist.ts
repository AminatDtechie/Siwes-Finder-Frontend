import { axiosClient } from "@/services/axios-client";
import { onSuccess } from "@/utils/notifications/OnSuccess";
import { useMutation, useQuery } from "@tanstack/react-query";
import { onFailure } from "../utils/notifications/OnFailure";
import { extractErrorMessage } from "@/utils/formmaters";
import { queryClient } from "@/services/query-client";

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
    onSuccess: () => {
      queryClient.invalidateQueries(["waitlistUsers"]);
      onSuccess({
        message: "You're on the waitlist!",
        success: "Check your inbox for a confirmation email and updates soon.",
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

  const waitlistUserQuery = useQuery({
    queryKey: ["waitlistUsers"],
    queryFn: async () => {
      const { data } = await client.get("/waitlists");
      if (data.success !== true || !data.data) {
        throw new Error("Failed to fetch waitlist user");
      }
      return data.data;
    },
    retry: false,
  });

  return {
    joinWaitlist: joinWaitlistMutation,
    waitlistUser: waitlistUserQuery,
  };
};

export default useWaitlist;
