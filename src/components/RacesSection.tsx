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
    name: "Chicago Fall Half Marathon",
    type: "Half Marathon",
    date: "Sep 2025",
    location: "Chicago, IL",
    finishTime: "1:43:56",
    stats: [
      { label: "Pace", value: "7:55/mi" }
    ]
  },
  {
    name: "Chicago Triathlon",
    type: "Olympic",
    date: "Aug 2025",
    location: "Chicago, IL",
    finishTime: "3:05:54",
    stats: [
      { label: "Swim", value: "36:47" },
      { label: "Bike", value: "1:20:53" },
      { label: "Run", value: "55:25" }
    ]
  },
  {
    name: "Ironman 70.3",
    type: "Half Ironman",
    date: "Jul 2025",
    location: "Muncie, IN",
    finishTime: "7:34:08",
    stats: [
      { label: "Swim", value: "53:54" },
      { label: "Bike", value: "3:36:39" },
      { label: "Run", value: "2:53:14" }
    ]
  },
  {
    name: "Chicago Spring Half Marathon",
    type: "Half Marathon",
    date: "May 2025",
    location: "Chicago, IL",
    finishTime: "1:48:11",
    stats: [
      { label: "Pace", value: "8:15/mi" }
    ]
  },
  {
    name: "Yosemite Half Marathon",
    type: "Half Marathon",
    date: "May 2025",
    location: "Bass Lake, CA",
    finishTime: "1:51:52",
    stats: [
      { label: "Pace", value: "8:32/mi" }
    ]
  },
  {
    name: "Bank of America Shamrock Shuffle",
    type: "8K",
    date: "Mar 2025",
    location: "Chicago, IL",
    finishTime: "37:56",
    stats: [
      { label: "Pace", value: "7:37/mi" }
    ]
  },
  {
    name: "Schaumburg Turkey Trot",
    type: "Half Marathon",
    date: "Nov 2024",
    location: "Schaumburg, IL",
    finishTime: "1:58:17",
    stats: [
      { label: "Pace", value: "9:01/mi" },
      { label: "Temp", value: "15°F" }
    ]
  },
  {
    name: "UIUC Half Marathon",
    type: "Half Marathon",
    date: "Apr 2024",
    location: "Champaign, IL",
    finishTime: "1:59:44",
    stats: [
      { label: "Pace", value: "9:07/mi" }
    ]
  }
];

const Medal = () => (
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
            <div key={index} className="flex items-start gap-8">
              <Medal />
              
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{race.name}</h3>
                
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span>{race.type}</span>
                  <span>·</span>
                  <span>{race.location}</span>
                  <span>·</span>
                  <span>{race.date}</span>
                </div>
                
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="text-muted-foreground">Time</p>
                    <p className="text-foreground">{race.finishTime}</p>
                  </div>
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
