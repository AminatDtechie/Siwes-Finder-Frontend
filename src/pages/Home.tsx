import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Home/HeroSection";
import Footer from "@/components/layout/Footer";
import WhySiwesFinder from "@/components/Home/WhySiwesFinder";
import LogoCarousel from "@/components/Home/LogoCarousel";
import TestimonialsCarousel from "@/components/Home/TestimonialCarousel";
import PlacementsCarousel from "@/components/Home/PlacementCarousel";
import CTASection from "@/components/Home/CTASection";
import JoinDiscussionsSection from "@/components/Home/JoinDiscussionsSection";
import NewsletterSignupSection from "@/components/Home/NewsletterSignupSection";

const logo_urls = [
  "/logos/dangote.png",
  "/logos/nb.png",
  "/logos/nta.png",
  "/logos/paystack.png",
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero role="student" />
      <LogoCarousel logos={logo_urls} />
      <WhySiwesFinder role="student" />
      <TestimonialsCarousel role="student" />
      <PlacementsCarousel />
      <CTASection role="student" />
      <JoinDiscussionsSection />
      <NewsletterSignupSection />
      <Footer />
    </>
  );
};

export default Home;
