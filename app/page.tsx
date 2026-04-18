import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RCMOpportunity from "@/components/RCMOpportunity";
import TechAI from "@/components/TechAI";
import OurEdge from "@/components/OurEdge";
import Approach from "@/components/Approach";
import Insights from "@/components/Insights";
import Leadership from "@/components/Leadership";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <RCMOpportunity />
        <TechAI />
        <OurEdge />
        <Approach />
        <Insights />
        <Leadership />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
