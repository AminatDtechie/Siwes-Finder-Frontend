import Discussion from "@/components/Community/Discussion";
import Header from "@/components/Community/Header";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import GetStartedCTA from "@/components/Placements/GetStarted";

const Community = () => {
  return (
    <>
      <Navbar />
      <section className="p-3 lg:px-20 lg:py-5">
        <Header />
        <Discussion />
      </section>
      <GetStartedCTA />
      <Footer />
    </>
  );
};

export default Community;
