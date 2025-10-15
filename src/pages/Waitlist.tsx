import Hero from "@/components/Waitlist/HeroSection";
import WhySiwesFinder from "@/components/Waitlist/WhySiwesFinder";
import NewsletterSignupSection from "@/components/Waitlist/NewsletterSignupSection";

const logo_urls = [
  "/logos/dangote.png",
  "/logos/nb.png",
  "/logos/nta.png",
  "/logos/paystack.png",
];

const Home = () => {
  return (
    <>
      <Hero role="student" />
      <WhySiwesFinder role="student" />
      <NewsletterSignupSection />
    </>
  );
};

export default Home;
