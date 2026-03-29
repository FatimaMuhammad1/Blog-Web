import { useState } from "react";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { articles } from "@/data/articles";
import { Feather, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSubscription } from "@/hooks/useSubscription";

const Index = () => {
  const [email, setEmail] = useState("");
  const { isSubscribed, subscribe } = useSubscription();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    subscribe(email);
    toast.success("Welcome! You'll receive our best story every Sunday.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* Editorial Layout - Featured Story */}
        <section id="articles" className="py-12 md:py-20">
          <div className="mb-16 animate-slide-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Latest Stories</p>
            </div>
            
            {/* Featured Article - Full Width */}
            <ArticleCard 
              {...articles[0]} 
              variant="featured"
            />
          </div>

          {/* Two Column Editorial Layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Column - Horizontal Cards */}
            <div className="lg:col-span-7 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-border" />
                Recent
              </h3>
              {articles.slice(1, 4).map((article) => (
                <ArticleCard 
                  key={article.id} 
                  {...article} 
                  variant="horizontal"
                />
              ))}
            </div>

            {/* Sidebar - Quick Reads */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-3">
                  <span className="w-6 h-px bg-border" />
                  Quick reads
                </h3>
                <div className="space-y-4">
                  {articles.slice(4, 6).map((article) => (
                    <ArticleCard 
                      key={article.id} 
                      {...article} 
                      variant="minimal"
                    />
                  ))}
                </div>

                {/* Decorative Quote */}
                <div className="mt-10 p-8 bg-primary/5 border-l-4 border-primary">
                  <p className="font-serif text-xl italic leading-relaxed text-foreground/80">
                    "The art of living well is found in the pauses between doing."
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">— The Drift Philosophy</p>
                </div>
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="mt-16 text-center">
            <a 
              href="/stories" 
              className="inline-flex items-center gap-3 text-primary font-medium hover:gap-4 transition-all group"
            >
              <span className="w-12 h-px bg-primary group-hover:w-16 transition-all" />
              Browse all stories
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Newsletter Section - More Editorial */}
        <section className="my-16 md:my-24 relative animate-scale-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Mail className="w-5 h-5 text-secondary" />
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary">The Sunday Letter</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif leading-tight">
                One story.<br />
                <span className="text-primary">Every Sunday.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-md">
                A single, carefully chosen piece delivered to your inbox. 
                No noise. No algorithms. Just words worth your time.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 md:p-10">
              {isSubscribed ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">You're subscribed!</h3>
                  <p className="text-muted-foreground">
                    Check your inbox every Sunday for our latest story.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-0 py-4 border-0 border-b-2 border-border bg-transparent focus:outline-none focus:border-primary transition-colors text-lg"
                  />
                  <Button 
                    type="submit"
                    className="w-full py-6 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all text-base"
                  >
                    Join 12,000+ readers
                  </Button>
                </form>
              )}
              {!isSubscribed && (
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Unsubscribe anytime. We respect your inbox.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Simplified */}
      <footer className="border-t border-border mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <a href="/" className="flex items-center gap-2 mb-6">
                <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                  <Feather className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold font-serif">drift</span>
              </a>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                A journal for those who believe in slowing down. 
                Stories, ideas, and invitations to live with more intention.
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-4">Read</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><a href="/wellness" className="hover:text-primary transition-colors">Rituals</a></li>
                  <li><a href="/travel" className="hover:text-primary transition-colors">Places</a></li>
                  <li><a href="/creativity" className="hover:text-primary transition-colors">Craft</a></li>
                  <li><a href="/growth" className="hover:text-primary transition-colors">Mindset</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">About</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><a href="/about" className="hover:text-primary transition-colors">Our Story</a></li>
                  <li><a href="/authors" className="hover:text-primary transition-colors">Writers</a></li>
                  <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Legal</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy</a></li>
                  <li><a href="/terms" className="hover:text-primary transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Drift</p>
            <p className="font-serif italic">Wander with purpose.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
