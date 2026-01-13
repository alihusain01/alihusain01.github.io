interface Role {
  title: string;
  period: string;
}

interface SingleExperience {
  type: 'single';
  title: string;
  company: string;
  period: string;
  tech?: string[];
}

interface MultiRoleExperience {
  type: 'multi';
  company: string;
  roles: Role[];
  tech?: string[];
}

type Experience = SingleExperience | MultiRoleExperience;

const experiences: Experience[] = [
  {
    type: 'multi',
    company: "Tech Company",
    roles: [
      { title: "Senior Software Engineer", period: "2023 - Present" },
      { title: "Software Engineer II", period: "2022 - 2023" },
      { title: "Software Engineer", period: "2021 - 2022" },
      { title: "Junior Software Engineer", period: "2020 - 2021" },
    ],
    tech: ["TypeScript", "React", "Node.js", "AWS"]
  },
  {
    type: 'single',
    title: "Software Engineer",
    company: "Startup Inc",
    period: "2020 - 2022",
    tech: ["Python", "Django", "PostgreSQL", "Docker"]
  },
  {
    type: 'single',
    title: "Junior Developer",
    company: "Agency Co",
    period: "2018 - 2020",
    tech: ["JavaScript", "Vue.js", "PHP", "MySQL"]
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
              {exp.type === 'multi' ? (
                <>
                  <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                  <div className="space-y-2">
                    {exp.roles.map((role, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                        <span className="text-sm text-muted-foreground">{role.title}</span>
                        <span className="text-sm text-muted-foreground">{role.period}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.company}</p>
                </>
              )}
              
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
