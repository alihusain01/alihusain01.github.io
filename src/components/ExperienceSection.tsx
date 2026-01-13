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
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-mono text-sm text-accent mb-12">// professional experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group relative pl-6 border-l-2 border-dashed border-grid hover:border-accent transition-colors"
            >
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-background border-2 border-grid group-hover:border-accent transition-colors" />
              
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                </div>
                
                <p className="text-accent font-medium">{exp.company}</p>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-accent font-mono">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                {exp.tech && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-muted text-muted-foreground font-mono text-xs rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
