interface Race {
  name: string;
  type: string;
  date: string;
  location: string;
  stats: {
    label: string;
    value: string;
  }[];
  image: string;
  finishTime: string;
}

const races: Race[] = [
  {
    name: "Ironman 70.3",
    type: "Half Ironman",
    date: "Sep 2024",
    location: "Santa Cruz, CA",
    finishTime: "5:42:18",
    stats: [
      { label: "Swim", value: "32:15" },
      { label: "Bike", value: "2:48:22" },
      { label: "Run", value: "2:01:41" }
    ],
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80"
  },
  {
    name: "Bay to Breakers",
    type: "12K",
    date: "May 2024",
    location: "San Francisco, CA",
    finishTime: "52:34",
    stats: [
      { label: "Pace", value: "7:02/mi" },
      { label: "Elevation", value: "+420ft" },
      { label: "Place", value: "312/10K" }
    ],
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80"
  },
  {
    name: "Oakland Half Marathon",
    type: "Half Marathon",
    date: "Mar 2024",
    location: "Oakland, CA",
    finishTime: "1:38:22",
    stats: [
      { label: "Pace", value: "7:31/mi" },
      { label: "Splits", value: "Even" },
      { label: "PR", value: "Yes!" }
    ],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80"
  },
  {
    name: "Escape from Alcatraz",
    type: "Triathlon",
    date: "Jun 2023",
    location: "San Francisco, CA",
    finishTime: "3:12:45",
    stats: [
      { label: "Swim", value: "42:18" },
      { label: "Bike", value: "1:15:33" },
      { label: "Run", value: "1:08:54" }
    ],
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"
  }
];

const RacesSection = () => {
  return (
    <section id="races" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-mono text-sm text-accent mb-4">// races</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Training for endurance events teaches discipline, resilience, and the art of pacing—skills 
          that translate directly into building great software.
        </p>
        
        <div className="grid gap-8">
          {races.map((race, index) => (
            <div 
              key={index}
              className="group grid md:grid-cols-[280px_1fr] gap-6 p-6 bg-card border border-dashed border-grid hover:border-accent rounded-lg transition-all"
            >
              <div className="relative overflow-hidden rounded aspect-video md:aspect-square">
                <img 
                  src={race.image} 
                  alt={race.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 left-3 font-mono text-xs text-foreground">
                  {race.date}
                </div>
              </div>
              
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-mono rounded">
                      {race.type}
                    </span>
                    <span className="text-muted-foreground text-sm">{race.location}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-1">{race.name}</h3>
                  <p className="font-mono text-lg text-accent">{race.finishTime}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-dashed border-grid">
                  {race.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="font-mono text-xs text-muted-foreground uppercase">{stat.label}</p>
                      <p className="font-mono text-lg text-foreground">{stat.value}</p>
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

export default RacesSection;
