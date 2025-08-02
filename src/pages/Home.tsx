import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/Home/HeroSection'
import Footer from '@/components/layout/Footer'
import WhySiwesFinder from '@/components/Home/WhySiwesFinder'
import LogoCarousel from '@/components/Home/LogoCarousel'
import TestimonialsCarousel from '@/components/Home/TestimonialCarousel'
import PlacementsCarousel from '@/components/Home/PlacementCarousel'
import CTASection from '@/components/Home/CTASection'
import JoinDiscussionsSection from '@/components/Home/JoinDiscussionsSection'
import NewsletterSignupSection from '@/components/Home/NewsletterSignupSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <WhySiwesFinder />
      <TestimonialsCarousel />
      <PlacementsCarousel />
      <CTASection />
      <JoinDiscussionsSection />
      <NewsletterSignupSection />
      <Footer />
    </>
  )
}
