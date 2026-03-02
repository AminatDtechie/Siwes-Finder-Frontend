import { axiosClient } from "@/services/axios-client";
import { useAuthorize } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";

const usePlacement = () => {
  const { token } = useAuthorize();
  const client = axiosClient(token);

  const getPlacementMutation = useQuery({
    queryKey: ["placements", token], // refetches when token changes
    queryFn: async () => {
      const { data } = await client.get("/placements");
      if (!data) {
        throw new Error("Invalid response: Data not found");
      }
      return data.data;
    }
  });

  return {
    getPlacements: getPlacementMutation,
  };
};

export default usePlacement;