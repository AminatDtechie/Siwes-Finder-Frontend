import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Header from "@/components/PlacementDetails/header";
import { useParams } from "react-router-dom";

const PlacementDetails = (  ) => {
    const {id} = useParams()
    console.log( id )
    return (
        <>
         <Navbar />
         <Header />
         <Footer />
        </>
    )
}

export default PlacementDetails;