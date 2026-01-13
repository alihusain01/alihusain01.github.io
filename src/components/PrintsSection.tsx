interface Print {
  name: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

const prints: Print[] = [
  {
    name: "Modular Cable Organizer",
    description: "A snap-together cable management system with customizable compartments. Designed to keep desk cables tidy with easy access for adding or removing wires.",
    specs: [
      { label: "Material", value: "PLA+" },
      { label: "Print Time", value: "12hr" },
      { label: "Supports", value: "None" }
    ]
  },
  {
    name: "Parametric Desk Lamp",
    description: "An adjustable articulating lamp with a geometric design. Features 3 degrees of freedom and accepts standard E26 bulbs.",
    specs: [
      { label: "Material", value: "PETG" },
      { label: "Print Time", value: "18hr" },
      { label: "Hardware", value: "M3" }
    ]
  },
  {
    name: "Honeycomb Planter",
    description: "Self-watering planter with a honeycomb drainage system. The modular design allows connecting multiple units for a green wall effect.",
    specs: [
      { label: "Material", value: "ASA" },
      { label: "Print Time", value: "8hr" },
      { label: "Use", value: "Outdoor" }
    ]
  }
];

const ModelPlaceholder = () => (
  <div className="relative flex-shrink-0">
    {/* Base platform */}
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-2 bg-muted-foreground/20 rounded-full blur-sm" />
    
    {/* 3D model placeholder */}
    <div className="relative w-24 h-24 rounded-lg border-2 border-dashed border-muted-foreground/40 bg-background flex items-center justify-center">
      {/* Grid pattern */}
      <div className="absolute inset-2 grid grid-cols-3 grid-rows-3 gap-0.5 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bg-muted-foreground rounded-sm" />
        ))}
      </div>
      
      {/* 3D icon hint */}
      <div className="relative z-10 text-muted-foreground/50 text-xs font-mono">3D</div>
    </div>
  </div>
);

const PrintsSection = () => {
  return (
    <section id="prints" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12">3D Prints</h2>
        
        {/* Printer Info */}
        <div className="mb-16 p-6 rounded-lg border border-border bg-card">
          <h3 className="text-lg font-semibold text-foreground mb-2">My Printer</h3>
          <p className="text-xl font-bold text-foreground mb-3">Bambu Lab A1</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A fast, reliable CoreXY printer with automatic bed leveling, vibration compensation, and flow calibration. 
            Features a 256×256×256mm build volume with multi-color capability via the AMS Lite system.
          </p>
          <div className="flex gap-6 mt-4 text-sm">
            <div>
              <p className="text-muted-foreground">Build Volume</p>
              <p className="text-foreground">256³ mm</p>
            </div>
            <div>
              <p className="text-muted-foreground">Max Speed</p>
              <p className="text-foreground">500mm/s</p>
            </div>
            <div>
              <p className="text-muted-foreground">Nozzle</p>
              <p className="text-foreground">0.4mm</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-12">
          {prints.map((print, index) => (
            <div key={index} className="flex items-start gap-8">
              <ModelPlaceholder />
              
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{print.name}</h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {print.description}
                </p>
                
                <div className="flex gap-6 text-sm">
                  {print.specs.map((spec, i) => (
                    <div key={i}>
                      <p className="text-muted-foreground">{spec.label}</p>
                      <p className="text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintsSection;
