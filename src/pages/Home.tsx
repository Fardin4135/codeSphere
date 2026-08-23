import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import KidsZone from "../sections/KidsZone";
import AdultPrograms from "../sections/JobReady";
import WhyUs from "../sections/WhyUs";
import Trainers from "../sections/Trainers";
import Projects from "../sections/Projects";
import HowItWorks from "../sections/HowItWorks";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import InquirySection from "../sections/InquirySection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <KidsZone />
      <AdultPrograms />
      <WhyUs />
      <Trainers />
      <Projects />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <InquirySection />
    </>
  );
}