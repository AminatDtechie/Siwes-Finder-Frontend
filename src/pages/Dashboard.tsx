import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { useAuthorize } from "@/context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()

  const { isAuthenticated } = useAuthorize()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return (
    <>
      <Navbar />
      <h4> Dashboard goes here </h4>
      <Footer />
    </>
  );
};

export default Dashboard;
