import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Texture overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}images/bg-texture.png`} 
          alt="texture" 
          className="w-full h-full object-cover" 
        />
        {/* Vignette fade to blend into background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <FadeIn delay={0.2} direction="down">
          <span className="text-primary font-semibold tracking-[0.3em] uppercase text-sm mb-6 block">
            Portfolio 2025
          </span>
        </FadeIn>
        
        <FadeIn delay={0.3} className="max-w-5xl">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display uppercase tracking-tighter leading-[0.85] text-foreground mb-8">
            Alex <span className="text-muted-foreground italic">Morgan</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-12">
            Designer & Developer crafting thoughtful digital experiences through refined typography and purposeful minimalism.
          </p>
        </FadeIn>

        <FadeIn delay={0.7} className="flex flex-col sm:flex-row items-center gap-6">
          <Button onClick={() => scrollTo("projects")} className="group">
            View Selected Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" onClick={() => scrollTo("contact")}>
            Get in Touch
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
