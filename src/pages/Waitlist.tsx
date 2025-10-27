import Hero from "@/components/Waitlist/HeroSection";
import WhySiwesFinder from "@/components/Waitlist/WhySiwesFinder";
import NewsletterSignupSection from "@/components/Waitlist/NewsletterSignupSection";

const Home = () => {
  return (
    <>
      <Hero />
      <WhySiwesFinder role="student" />
      <NewsletterSignupSection />
    </>
  );
};

export default Home;
