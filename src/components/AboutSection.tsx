const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-mono text-sm text-accent mb-4">// about me</h2>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Hi, I'm <span className="text-accent">Your Name</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I'm a software engineer passionate about building elegant solutions to complex problems. 
            When I'm not coding, you'll find me training for my next triathlon or designing 3D prints 
            in my workshop. I believe in continuous learning, pushing physical limits, and creating 
            things that matter.
          </p>
          <div className="flex gap-4 pt-4 font-mono text-sm">
            <a href="mailto:hello@example.com" className="text-accent hover:underline underline-offset-4">
              email
            </a>
            <span className="text-muted-foreground">/</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
              github
            </a>
            <span className="text-muted-foreground">/</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
