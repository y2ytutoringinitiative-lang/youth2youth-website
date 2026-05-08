/*
 * Youth2Youth — Home Page
 * Assembles all sections in order:
 * Hero → Stats → About → Programs → Team → Get Involved → Contact → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import TeamSection from "@/components/TeamSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import SchedulingSection from "@/components/SchedulingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf6ee]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <TeamSection />
      <GetInvolvedSection />
      <SchedulingSection />
      <Footer />
    </div>
  );
}
