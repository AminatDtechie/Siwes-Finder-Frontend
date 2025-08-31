import Header from "@/components/PlacementDetails/header";
import { useParams } from "react-router-dom";

const PlacementDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Header />
    </>
  );
};

export default PlacementDetails;
