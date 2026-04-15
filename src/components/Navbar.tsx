import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Moon, Zap } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 nav-blur">
      <div className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-6xl mx-auto gap-4">
        <Link to="/" className="shrink-0 flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight hover:opacity-70 transition-opacity">
          <Zap size={18} className="text-accent sm:size-5" />
          <span>RKP</span>
        </Link>
        
        <div className="flex items-center gap-4 sm:gap-8 min-w-0">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap",
                location.pathname === link.path 
                  ? "text-white" 
                  : "text-zinc-500 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden sm:block p-2 rounded-lg border border-white/10 bg-zinc-900/50 shrink-0">
          <Moon size={18} className="text-zinc-400" />
        </div>
      </div>
    </nav>
  );
}
