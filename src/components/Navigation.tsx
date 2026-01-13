import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <ul className="flex gap-8 text-sm">
          <li>
            <Link 
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              home
            </Link>
          </li>
          <li>
            <Link 
              to="/experience"
              className={`transition-colors ${isActive('/experience') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              experience
            </Link>
          </li>
          <li>
            <Link 
              to="/races"
              className={`transition-colors ${isActive('/races') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              races
            </Link>
          </li>
          <li>
            <Link 
              to="/prints"
              className={`transition-colors ${isActive('/prints') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              prints
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
