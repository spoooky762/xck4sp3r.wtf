import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a 
          href="#top" 
          className="font-display text-2xl tracking-wide uppercase font-medium hover:text-primary transition-colors"
        >
          AM.
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Work</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
