interface Race {
  name: string;
  type: string;
  date: string;
  location: string;
  stats: {
    label: string;
    value: string;
  }[];
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

const Medal = ({ finishTime }: { finishTime: string }) => (
  <div className="relative flex-shrink-0">
    {/* Ribbon */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-8 overflow-hidden">
      <div className="absolute left-0 w-6 h-10 bg-muted-foreground/30 -rotate-12 origin-top" />
      <div className="absolute right-0 w-6 h-10 bg-muted-foreground/20 rotate-12 origin-top" />
    </div>
    
    {/* Medal circle */}
    <div className="relative w-24 h-24 rounded-full border-4 border-muted-foreground/40 bg-background flex items-center justify-center">
      {/* Inner ring */}
      <div className="absolute inset-2 rounded-full border border-muted-foreground/20" />
      
      {/* Time display */}
      <span className="text-sm font-mono font-semibold text-foreground tracking-tight">
        {finishTime}
      </span>
    </div>
  </div>
);

const RacesSection = () => {
  return (
    <section id="races" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12">Races</h2>
        
        <div className="space-y-12">
          {races.map((race, index) => (
            <div key={index} className="flex items-center gap-8">
              <Medal finishTime={race.finishTime} />
              
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span>{race.type}</span>
                  <span>·</span>
                  <span>{race.location}</span>
                  <span>·</span>
                  <span>{race.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">{race.name}</h3>
                
                <div className="flex gap-6 text-sm">
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
