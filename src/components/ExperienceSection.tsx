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
    roles: [{ title: "Junior Associate", period: "May 2025 - Present", tech: ["Due Diligence", "Reporting"] }],
  },
];

interface Certification {
  name: string;
  date: string;
}

const certifications: Certification[] = [
  { name: "AWS Certified Developer Associate", date: "Sept 2025" },
  { name: "AWS Cloud Practitioner", date: "Sept 2024" },
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
        <h2 className="text-3xl font-bold text-foreground mb-4">Experience</h2>
        <p className="text-muted-foreground mb-12">
          I'm currently in the Early Career Digital Leadership Program (ECDLP) at United Airlines. Through this 2 year
          program, I gained exposure to 4 different teams throughout the Digital Technology and Customer Product
          departments at United.
          <br /><br />
          I'm also involved with Angel Star Ventures, where I help conduct due diligence for
          angel investors evaluating early-stage startups, from pre-seed through select Series A opportunities.
        </p>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
              <div className="space-y-4">
                {exp.roles.map((role, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <span className="text-sm text-muted-foreground">{role.title}</span>
                    <span className="text-sm text-muted-foreground">{role.period}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground mb-4">Certifications</h3>
          <div className="space-y-2">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <span className="text-sm text-muted-foreground">{cert.name}</span>
                <span className="text-sm text-muted-foreground">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
