import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-dashed border-grid">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-mono text-sm text-muted-foreground hover:text-accent transition-colors">
            ~/portfolio
          </Link>
          <ul className="flex gap-6 font-mono text-sm">
            <li>
              <Link 
                to="/"
                className={`transition-colors ${isActive('/') ? 'text-accent' : 'text-muted-foreground hover:text-accent'}`}
              >
                about
              </Link>
            </li>
            <li>
              <Link 
                to="/experience"
                className={`transition-colors ${isActive('/experience') ? 'text-accent' : 'text-muted-foreground hover:text-accent'}`}
              >
                experience
              </Link>
            </li>
            <li>
              <Link 
                to="/races"
                className={`transition-colors ${isActive('/races') ? 'text-accent' : 'text-muted-foreground hover:text-accent'}`}
              >
                races
              </Link>
            </li>
            <li>
              <Link 
                to="/prints"
                className={`transition-colors ${isActive('/prints') ? 'text-accent' : 'text-muted-foreground hover:text-accent'}`}
              >
                prints
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
