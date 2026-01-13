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
    company: "United Airlines",
    roles: [
      {
        title: "Full-Stack Software Engineer - Network Planning",
        period: "Feb 2026 - Present",
        tech: ["AWS", "Java", "React"],
      },
      {
        title: "Cloud Engineer - Pricing & Revenue Management",
        period: "Aug 2025 - Feb 2026",
        tech: ["AWS", "Python", "SQL"],
      },
      {
        title: "Product Analyst - Lobby Optimization",
        period: "Feb 2025 - Aug 2025",
        tech: ["Product Design", "SQL", "Communication"],
      },
      { title: "Gen AI Engineer", period: "Aug 2024 - Feb 2025", tech: ["RAG", "Gen AI", "Python"] },
    ],
  },
  {
    company: "Angel Star Ventures",
    roles: [
      { title: "Lead Engineer", period: "2021 - 2022", tech: ["Python", "Django", "AWS"] },
      { title: "Software Engineer", period: "2020 - 2021", tech: ["Python", "Django", "PostgreSQL", "Docker"] },
    ],
  },
  {
    company: "Agency Co",
    roles: [
      { title: "Developer", period: "2019 - 2020", tech: ["JavaScript", "Vue.js", "Node.js"] },
      { title: "Junior Developer", period: "2018 - 2019", tech: ["JavaScript", "PHP", "MySQL"] },
    ],
  },
];

const TechList = ({ tech }: { tech?: string[] }) => {
  if (!tech) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span key={i} className="text-xs text-muted-foreground">
          {t}
          {i < tech.length - 1 && " ·"}
        </span>
      ))}
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
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
