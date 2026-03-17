import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import FeaturedGames from "@/components/FeaturedGames";
import Events from "@/components/Events";
import AboutUs from "@/components/AboutUs";
import WhyUs from "@/components/WhyUs";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandMarquee />
      <FeaturedGames />
      <Events />
      <AboutUs />
      <WhyUs />
      <CTABanner />
      <Footer />
    </main>
  );
}
