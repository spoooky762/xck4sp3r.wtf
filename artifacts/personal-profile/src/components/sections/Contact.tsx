import { ArrowRight, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function Contact() {
  return (
    <section id="contact" className="pt-32 pb-12 relative overflow-hidden border-t border-border/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-display mb-8">Let's build something <span className="italic text-muted-foreground">extraordinary.</span></h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Available for freelance opportunities and select collaborations. Send me an email and we'll schedule a time to chat.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <a 
            href="mailto:hello@alexmorgan.design" 
            className="inline-flex items-center justify-center gap-4 text-2xl md:text-4xl lg:text-5xl font-display border-b border-primary/30 pb-2 hover:border-primary hover:text-primary transition-colors duration-500 group mb-24"
          >
            hello@alexmorgan.design
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
          </a>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              © {new Date().getFullYear()} Alex Morgan. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:hello@alexmorgan.design" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </FadeIn>
        
      </div>
    </section>
  );
}
