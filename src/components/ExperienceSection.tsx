interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  tech?: string[];
}

const experiences: Experience[] = [
  {
    title: "Role 4",
    company: "Company Name",
    period: "2023 - Present",
    description: [],
    tech: []
  },
  {
    title: "Role 3",
    company: "Company Name",
    period: "2021 - 2023",
    description: [],
    tech: []
  },
  {
    title: "Role 2",
    company: "Company Name",
    period: "2019 - 2021",
    description: [],
    tech: []
  },
  {
    title: "Role 1",
    company: "Company Name",
    period: "2017 - 2019",
    description: [],
    tech: []
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-foreground mb-12">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              
              <p className="text-muted-foreground">{exp.company}</p>
              
              {exp.tech && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-xs text-muted-foreground"
                    >
                      {t}{i < exp.tech!.length - 1 && " ·"}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
