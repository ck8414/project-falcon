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

function Divider() {
  return <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, #D4C08A, transparent)" }} />;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divider />
        <RCMOpportunity />
        <Divider />
        <TechAI />
        <Divider />
        <OurEdge />
        <Divider />
        <Approach />
        <Divider />
        <Insights />
        <Divider />
        <Leadership />
        <Divider />
        <Vision />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
