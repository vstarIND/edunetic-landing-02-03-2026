import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TricolorIndia } from "./Common";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://i.ibb.co/GvRqYYDY/BGR-LOGO-EDIN.png";

export const Navbar = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'About Us', path: '/about', id: 'about-us' },
    { name: 'Ecosystem', path: '/ecosystem', id: 'ecosystem' },
    { name: 'Contact Us', path: '/contact', id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.id === 'home') {
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-[15px] left-[15px] right-[15px] z-50 flex flex-col items-end pointer-events-none gap-2">
      <div className="w-full flex justify-between items-center">
        <div className="glass rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-8 pointer-events-auto">
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Edunetic India" className="h-6 md:h-10" referrerPolicy="no-referrer" />
            <div className="flex items-center gap-2 leading-none">
              <span className="text-cyan-primary font-display font-bold text-base md:text-xl tracking-tight cyan-glow uppercase">Edunetic</span>
              <span className="font-display font-bold text-base md:text-xl tracking-widest uppercase"><TricolorIndia /></span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className="relative text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-cyan-primary transition-colors whitespace-nowrap group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3 pointer-events-auto">
          <button
            onClick={onOpenWaitlist}
            className="hidden md:block px-6 md:px-10 py-3 md:py-4 bg-cyan-primary text-black text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-light transition-all transform hover:scale-105 shadow-xl shadow-cyan-primary/30"
          >
            Join Waitlist
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden glass p-3 md:p-4 rounded-full text-white hover:text-cyan-primary transition-colors flex items-center justify-center"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full glass rounded-3xl p-6 flex flex-col gap-6 pointer-events-auto mt-2 border border-white/10 bg-zinc-950/90 backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => {
                  handleNavClick(e, item);
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-cyan-primary transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => {
              onOpenWaitlist();
              setIsMobileMenuOpen(false);
            }}
            className="w-full py-4 bg-cyan-primary text-black text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-cyan-light transition-all shadow-xl shadow-cyan-primary/30"
          >
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
};
