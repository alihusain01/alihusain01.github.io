const Footer = () => {
  return (
    <footer className="py-12 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
