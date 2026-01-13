import DashedBackground from "@/components/DashedBackground";
import Navigation from "@/components/Navigation";
import PrintsSection from "@/components/PrintsSection";
import Footer from "@/components/Footer";

const Prints = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <DashedBackground />
      <Navigation />
      <main>
        <PrintsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Prints;
