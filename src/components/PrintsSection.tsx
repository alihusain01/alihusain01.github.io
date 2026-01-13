interface Print {
  name: string;
  description: string;
  specs: string[];
  image: string;
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
    <section id="prints" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12">3D Prints</h2>
        
        <div className="space-y-16">
          {prints.map((print, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src={print.image} 
                  alt={print.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{print.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {print.description}
                </p>
                
                <div className="flex gap-4 pt-1 text-sm text-muted-foreground">
                  {print.specs.map((spec, i) => (
                    <span key={i}>
                      {spec}{i < print.specs.length - 1 && " ·"}
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
