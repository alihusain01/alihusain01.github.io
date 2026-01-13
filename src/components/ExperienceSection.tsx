interface Role {
  title: string;
  period: string;
  tech?: string[];
}

interface Experience {
  company: string;
  roles: Role[];
}

const experiences: Experience[] = [
  {
    company: "Tech Company",
    roles: [
      { title: "Senior Software Engineer", period: "2023 - Present", tech: ["TypeScript", "React", "AWS"] },
      { title: "Software Engineer II", period: "2022 - 2023", tech: ["TypeScript", "React", "Node.js"] },
      { title: "Software Engineer", period: "2021 - 2022", tech: ["JavaScript", "React", "Express"] },
      { title: "Junior Software Engineer", period: "2020 - 2021", tech: ["JavaScript", "HTML", "CSS"] },
    ]
  },
  {
    company: "Startup Inc",
    roles: [
      { title: "Lead Engineer", period: "2021 - 2022", tech: ["Python", "Django", "AWS"] },
      { title: "Software Engineer", period: "2020 - 2021", tech: ["Python", "Django", "PostgreSQL", "Docker"] },
    ]
  },
  {
    company: "Agency Co",
    roles: [
      { title: "Developer", period: "2019 - 2020", tech: ["JavaScript", "Vue.js", "Node.js"] },
      { title: "Junior Developer", period: "2018 - 2019", tech: ["JavaScript", "PHP", "MySQL"] },
    ]
  }
];

const TechList = ({ tech }: { tech?: string[] }) => {
  if (!tech) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span key={i} className="text-xs text-muted-foreground">
          {t}{i < tech.length - 1 && " ·"}
        </span>
      ))}
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-foreground mb-12">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
              <div className="space-y-4">
                {exp.roles.map((role, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <span className="text-sm text-muted-foreground">{role.title}</span>
                      <span className="text-sm text-muted-foreground">{role.period}</span>
                    </div>
                    <TechList tech={role.tech} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
