import { axiosClient } from "@/services/axios-client";
import { useQuery } from "@tanstack/react-query";

const usePlacement =()=>{

 const client= axiosClient(null);

const getPlacementMutation = useQuery({
  queryKey: ["placements"],
  queryFn: async () => {
    const { data } = await client.get("/placements");  
    if (!data) {
      throw new Error("Invalid response: Data not found");
    }
    return data.data;
  }
});


return {
  getPlacements:getPlacementMutation,
}

}

export default usePlacement;