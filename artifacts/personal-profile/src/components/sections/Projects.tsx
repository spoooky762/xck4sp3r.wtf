import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const projects = [
  {
    id: 1,
    title: "Aura Architecture",
    description: "A digital flagship for a luxury architectural firm, featuring seamless WebGL integrations and editorial typography.",
    tech: ["Next.js", "Three.js", "Tailwind", "GSAP"],
    // minimal interior architecture
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Lumina Studio",
    description: "E-commerce experience for an artisanal lighting brand. Focus on fluid transitions and extreme performance.",
    tech: ["React", "Framer Motion", "Shopify", "Sanity"],
    // moody lighting design
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Onyx FinTech",
    description: "Dashboard interface redesign for a modern wealth management platform, prioritizing data clarity and dark mode excellence.",
    tech: ["TypeScript", "Recharts", "Radix UI", "Tailwind"],
    // dark abstract financial or geometric
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&h=800&fit=crop&q=80",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-display mb-16 md:mb-24">Selected Work</h2>
        </FadeIn>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={0.1}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                {/* Project Image */}
                <div className={`lg:col-span-8 overflow-hidden rounded-sm border border-border/40 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="aspect-[4/3] lg:aspect-[16/10] relative bg-muted overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-display mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs uppercase tracking-widest text-muted-foreground">
                        {t}{i < project.tech.length - 1 && <span className="mx-2 opacity-50">/</span>}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="#" 
                    onClick={(e) => e.preventDefault()} 
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-semibold text-foreground hover:text-primary transition-colors w-fit"
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
