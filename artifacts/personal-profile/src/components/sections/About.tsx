import { FadeIn } from "@/components/ui/fade-in";

const stats = [
  { value: "5+", label: "Years Exp" },
  { value: "30+", label: "Projects" },
  { value: "10+", label: "Awards" },
  { value: "15+", label: "Clients" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="right">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden border border-border/50">
                {/* Unsplash portrait of a creative professional in a moody setting */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80" 
                  alt="Alex Morgan Portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent opacity-60" />
              </div>
            </FadeIn>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-display mb-8">
                Quiet design.<br />
                <span className="italic text-muted-foreground">Loud impact.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  I'm a multidisciplinary designer and creative developer based in New York. I specialize in building digital experiences that bridge the gap between high-end editorial aesthetics and modern web performance.
                </p>
                <p>
                  My approach is rooted in reduction—stripping away the unnecessary until only the essential remains. I believe that purposeful whitespace, meticulous typography, and subtle motion are the foundations of memorable interfaces.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 mt-12 border-t border-border/50">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-4xl md:text-5xl font-display text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
