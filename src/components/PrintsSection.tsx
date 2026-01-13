interface Print {
  name: string;
  description: string;
  specs: string[];
  image: string;
  link?: string;
}

const prints: Print[] = [
  {
    name: "Modular Cable Organizer",
    description: "A snap-together cable management system with customizable compartments. Designed to keep desk cables tidy with easy access for adding or removing wires.",
    specs: ["PLA+", "12hr print", "No supports"],
    image: "https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?w=800&q=80"
  },
  {
    name: "Parametric Desk Lamp",
    description: "An adjustable articulating lamp with a geometric design. Features 3 degrees of freedom and accepts standard E26 bulbs.",
    specs: ["PETG", "18hr print", "M3 hardware"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  },
  {
    name: "Honeycomb Planter",
    description: "Self-watering planter with a honeycomb drainage system. The modular design allows connecting multiple units for a green wall effect.",
    specs: ["ASA", "8hr print", "Outdoor safe"],
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80"
  }
];

const PrintsSection = () => {
  return (
    <section id="prints" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-mono text-sm text-accent mb-4">// 3d prints</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Designing functional objects that solve real problems. All models are designed in 
          Fusion 360 and printed on a Prusa MK3S+.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prints.map((print, index) => (
            <div 
              key={index}
              className="group bg-card border border-dashed border-grid hover:border-accent rounded-lg overflow-hidden transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={print.image} 
                  alt={print.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{print.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {print.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {print.specs.map((spec, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-muted text-muted-foreground font-mono text-xs rounded"
                    >
                      {spec}
                    </span>
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
