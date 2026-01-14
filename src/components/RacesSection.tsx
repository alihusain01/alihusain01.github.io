import chicagoFallHalf from "@/assets/medals/chicago-fall-half.png";
import chicagoTri from "@/assets/medals/chicago-tri.png";
import ironmanMuncie from "@/assets/medals/ironman-muncie.png";
import chicagoSpringHalf from "@/assets/medals/chicago-spring-half.png";
import yosemiteHalf from "@/assets/medals/yosemite-half.png";
import shamrockShuffle from "@/assets/medals/shamrock-shuffle.png";
import schaumburgTT from "@/assets/medals/schaumburg-tt.png";
import uiucHalf from "@/assets/medals/uiuc-half.png";

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
  medalImage: string;
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
    ],
    medalImage: chicagoFallHalf
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
    ],
    medalImage: chicagoTri
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
    ],
    medalImage: ironmanMuncie
  },
  {
    name: "Chicago Spring Half Marathon",
    type: "Half Marathon",
    date: "May 2025",
    location: "Chicago, IL",
    finishTime: "1:48:11",
    stats: [
      { label: "Pace", value: "8:15/mi" }
    ],
    medalImage: chicagoSpringHalf
  },
  {
    name: "Yosemite Half Marathon",
    type: "Half Marathon",
    date: "May 2025",
    location: "Bass Lake, CA",
    finishTime: "1:51:52",
    stats: [
      { label: "Pace", value: "8:32/mi" }
    ],
    medalImage: yosemiteHalf
  },
  {
    name: "Bank of America Shamrock Shuffle",
    type: "8K",
    date: "Mar 2025",
    location: "Chicago, IL",
    finishTime: "37:56",
    stats: [
      { label: "Pace", value: "7:37/mi" }
    ],
    medalImage: shamrockShuffle
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
    ],
    medalImage: schaumburgTT
  },
  {
    name: "UIUC Half Marathon",
    type: "Half Marathon",
    date: "Apr 2024",
    location: "Champaign, IL",
    finishTime: "1:59:44",
    stats: [
      { label: "Pace", value: "9:07/mi" }
    ],
    medalImage: uiucHalf
  }
];

const RacesSection = () => {
  return (
    <section id="races" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12">Races</h2>
        
        <div className="space-y-12">
          {races.map((race, index) => (
          <div key={index} className="flex gap-8">
              <div className="w-32 flex-shrink-0">
                <img 
                  src={race.medalImage} 
                  alt={`${race.name} medal`}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="flex-1 space-y-3 pt-1">
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
