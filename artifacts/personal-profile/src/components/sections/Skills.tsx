import { FadeIn } from "@/components/ui/fade-in";

const skillCategories = [
  {
    title: "Development",
    skills: ["TypeScript", "React & Next.js", "Node.js", "Rust", "Tailwind CSS", "Framer Motion", "PostgreSQL", "GraphQL"]
  },
  {
    title: "Design",
    skills: ["Figma", "Interaction Design", "Typography", "Wireframing", "Prototyping", "Design Systems", "Creative Direction"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "Docker", "Vercel", "AWS", "GitHub Actions", "Jest", "Vitest", "Webpack"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-display">Capabilities</h2>
            <p className="text-muted-foreground max-w-md">
              A comprehensive toolkit combining rigorous engineering with refined aesthetic sensibilities.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {skillCategories.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className="space-y-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary border-b border-border/50 pb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-4 py-2 rounded-full border border-border/50 bg-background text-sm text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
