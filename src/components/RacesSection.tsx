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
    <section id="races" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-foreground mb-12">Races</h2>
        
        <div className="space-y-16">
          {races.map((race, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src={race.image} 
                  alt={race.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{race.type}</span>
                  <span>·</span>
                  <span>{race.location}</span>
                  <span>·</span>
                  <span>{race.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">{race.name}</h3>
                <p className="text-foreground">{race.finishTime}</p>
                
                <div className="flex gap-6 pt-2 text-sm">
                  {race.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-muted-foreground">{stat.label}</p>
                      <p className="text-foreground">{stat.value}</p>
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
