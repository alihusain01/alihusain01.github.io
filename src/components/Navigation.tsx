const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-dashed border-grid">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-muted-foreground">~/portfolio</span>
          <ul className="flex gap-6 font-mono text-sm">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
              >
                about
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
              >
                experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('races')}
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
              >
                races
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('prints')}
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
              >
                prints
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
