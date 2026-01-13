interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  tech?: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored team of 5 junior developers on best practices",
      "Reduced API response times by 40% through optimization"
    ],
    tech: ["TypeScript", "React", "Node.js", "AWS"]
  },
  {
    title: "Software Engineer",
    company: "Startup Inc",
    period: "2020 - 2022",
    description: [
      "Built real-time collaboration features from scratch",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Contributed to open-source projects with 500+ stars"
    ],
    tech: ["Python", "Django", "PostgreSQL", "Docker"]
  },
  {
    title: "Junior Developer",
    company: "Agency Co",
    period: "2018 - 2020",
    description: [
      "Developed responsive web applications for 20+ clients",
      "Collaborated with design team on UI/UX improvements",
      "Maintained legacy codebases and performed migrations"
    ],
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
