import DashedBackground from "@/components/DashedBackground";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import RacesSection from "@/components/RacesSection";
import PrintsSection from "@/components/PrintsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <DashedBackground />
      <Navigation />
      <main>
        <AboutSection />
        <ExperienceSection />
        <RacesSection />
        <PrintsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
