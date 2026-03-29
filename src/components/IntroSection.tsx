import { Compass, Palette, Sparkles, Heart } from "lucide-react";

const IntroSection = () => {
  const features = [
    {
      icon: Compass,
      title: "Places",
      description: "Slow travel stories from hidden corners of the world"
    },
    {
      icon: Palette,
      title: "Craft",
      description: "The joy of making things with your hands"
    },
    {
      icon: Sparkles,
      title: "Rituals",
      description: "Daily practices that bring meaning and calm"
    },
    {
      icon: Heart,
      title: "Mindset",
      description: "Ideas that shift how you see the world"
    }
  ];

  return (
    <section className="py-16 md:py-24 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
        <p className="text-sm font-medium text-secondary uppercase tracking-widest animate-slide-up">What we explore</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-slide-up stagger-1">
          Stories that invite you to slow down, 
          <span className="text-primary"> look closer</span>, 
          and live more intentionally.
        </h2>
      </div>

      {/* Feature cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className={`group p-6 rounded-2xl bg-card hover:bg-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer animate-slide-up stagger-${index + 1}`}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;