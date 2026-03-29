import { ArrowRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative my-8 md:my-12 animate-fade-in">
      {/* Main hero container with asymmetric layout */}
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left content */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium animate-slide-down">
            <Bookmark className="w-4 h-4" />
            <span>A journal for curious minds</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight animate-slide-up">
            Wander with
            <span className="block text-primary">purpose.</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg animate-slide-up stagger-1">
            Drift is a curated space for those who seek meaning in the mundane. 
            Stories about slowing down, creating with intention, and finding beauty in the everyday.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-2 animate-slide-up stagger-2">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium transition-all hover:scale-105 glow-effect group">
              Start Reading
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base font-medium border-2 hover:bg-primary/5 hover:border-primary transition-all">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-4 animate-slide-up stagger-3">
            <div>
              <p className="text-2xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Stories</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-2xl font-bold text-primary">12k</p>
              <p className="text-sm text-muted-foreground">Readers</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-2xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground">Categories</p>
            </div>
          </div>
        </div>

        {/* Right image - stacked cards effect */}
        <div className="lg:col-span-7 relative order-1 lg:order-2">
          <div className="relative">
            {/* Background decorative card */}
            <div className="absolute -right-4 -top-4 w-full h-full rounded-3xl bg-secondary/20 rotate-3 hidden md:block" />
            <div className="absolute -right-2 -top-2 w-full h-full rounded-3xl bg-primary/10 rotate-1 hidden md:block" />
            
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden animate-scale-in glow-effect">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
                alt="Mountain landscape at golden hour"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur-xl rounded-2xl p-5 border border-border/50">
                  <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-1">Featured</p>
                  <h3 className="font-serif text-lg font-semibold">The Art of Unhurried Living</h3>
                  <p className="text-sm text-muted-foreground mt-1">Finding stillness in a world that never stops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;