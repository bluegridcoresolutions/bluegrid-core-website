import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { branches } from "../data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Home", "/"],
    ["Branches", "/branches"],
    ["Process", "/process"],
    ["Why Us", "/why"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="max-w-screen-2xl 2xl:max-w-full mx-auto px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src="/logo-full-dark.svg" alt="BlueGrid Core" className="h-8 sm:h-10 w-auto" />
        </Link>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 max-w-sm mx-4 lg:mx-8 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-secondary/20 border border-border rounded-sm px-4 py-1.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors pl-9"
          />
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors"
          >
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 py-4 flex flex-col gap-4">
          {navItems.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors w-fit"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </nav>
  );
}