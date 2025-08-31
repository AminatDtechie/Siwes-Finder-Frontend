import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/Home/CTASection";
import Hero from "@/components/Home/HeroSection";
import JoinDiscussionsSection from "@/components/Home/JoinDiscussionsSection";
import LogoCarousel from "@/components/Home/LogoCarousel";
import NewsletterSignupSection from "@/components/Home/NewsletterSignupSection";
import PlacementsCarousel from "@/components/Home/PlacementCarousel";
import WhySiwesFinder from "@/components/Home/WhySiwesFinder";
import TestimonialsCarousel from "@/components/Home/TestimonialCarousel";
import FAQ from "@/components/Company/FAQ";
import { useAuthorize } from "@/context/AuthContext";
import PlacementForm from "@/components/Company/PlacementForm";

const logo_urls = [
  "/logos/mastercard.png",
  "/logos/stripe.png",
  "/logos/google_logo.png",
  "/logos/visa.png",
  "/logos/stripe.png",
  "/logos/google_logo.png",
  "/logos/microsoft.png",
];

const Companies = () => {
  const { isAuthenticated, role } = useAuthorize();

  return (
    <>
      <Navbar />
      <Hero role="company" />
      <LogoCarousel logos={logo_urls} />
      <WhySiwesFinder role="company" />
      {isAuthenticated && role === "Recruiter" ? (
        <PlacementForm />
      ) : (
        <CTASection role="company" />
      )}
      <FAQ />
      <TestimonialsCarousel role="company" />
      <NewsletterSignupSection />
      <Footer />
    </>
  );
};

export default Companies;
