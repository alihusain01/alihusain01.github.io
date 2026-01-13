import DashedBackground from "@/components/DashedBackground";
import Navigation from "@/components/Navigation";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <DashedBackground />
      <Navigation />
      <main>
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
