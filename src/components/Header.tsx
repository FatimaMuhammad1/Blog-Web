import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSubscription } from "@/hooks/useSubscription";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isSubscribed, subscribe } = useSubscription();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSubscribe = () => {
    if (!isSubscribed) {
      subscribe();
      toast.success("Subscribed! You'll receive our weekly Sunday letter.");
    }
  };

  return (
    <header className={`sticky top-0 z-50 py-3 transition-all duration-300 ${scrolled ? 'py-2' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-5 sm:px-8">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <a href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-12">
                <Feather className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold font-serif tracking-tight">drift</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="/" className="text-sm font-medium hover:bg-primary/10 rounded-full px-4 py-2 transition-all hover:text-primary">
              Home
            </a>
            <a href="/#articles" className="text-sm font-medium hover:bg-primary/10 rounded-full px-4 py-2 transition-all hover:text-primary">
              Stories
            </a>
            <a href="/wellness" className="text-sm font-medium hover:bg-primary/10 rounded-full px-4 py-2 transition-all hover:text-primary">
              Rituals
            </a>
            <a href="/travel" className="text-sm font-medium hover:bg-primary/10 rounded-full px-4 py-2 transition-all hover:text-primary">
              Places
            </a>
            <a href="/about" className="text-sm font-medium hover:bg-primary/10 rounded-full px-4 py-2 transition-all hover:text-primary">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary/10 transition-all hover:text-primary"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
            
            <Button 
              onClick={handleSubscribe}
              disabled={isSubscribed}
              className={`hidden md:flex rounded-full px-6 py-2 hover:scale-105 transition-all font-medium ${
                isSubscribed 
                  ? "bg-muted text-muted-foreground cursor-default hover:scale-100" 
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
            >
              {isSubscribed ? "Subscribed ✓" : "Subscribe"}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pill-nav p-6 animate-fade-in">
            <nav className="flex flex-col gap-3">
              <a href="/" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="/#articles" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Stories
              </a>
              <a href="/wellness" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Rituals
              </a>
              <a href="/travel" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Places
              </a>
              <a href="/about" className="text-sm font-medium hover:text-primary transition-colors py-2">
                About
              </a>
              <Button 
                onClick={handleSubscribe}
                disabled={isSubscribed}
                className={`rounded-full w-full mt-2 ${
                  isSubscribed 
                    ? "bg-muted text-muted-foreground cursor-default" 
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                {isSubscribed ? "Subscribed ✓" : "Subscribe"}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
