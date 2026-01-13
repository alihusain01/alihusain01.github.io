import DashedBackground from "@/components/DashedBackground";
import Navigation from "@/components/Navigation";
import RacesSection from "@/components/RacesSection";
import Footer from "@/components/Footer";

const Races = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <DashedBackground />
      <Navigation />
      <main>
        <RacesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Races;
