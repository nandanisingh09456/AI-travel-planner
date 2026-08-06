import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import DestinationsSection from "@/components/DestinationsSection";
import TripPlannerSection from "@/components/TripPlannerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <DestinationsSection />
      <TripPlannerSection />
      <TestimonialsSection/>
      <FAQSection />
      
    </>
  );
}