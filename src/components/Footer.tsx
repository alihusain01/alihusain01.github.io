const Footer = () => {
  return (
    <footer className="py-12 relative z-10 border-t border-dashed border-grid">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} — built with care
          </p>
          <div className="flex gap-6 font-mono text-sm">
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-accent transition-colors">
              email
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              github
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
