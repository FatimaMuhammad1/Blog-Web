import { ArrowUpRight, Bookmark } from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { toast } from "sonner";

interface ArticleCardProps {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  image: string;
  variant?: "featured" | "horizontal" | "minimal" | "standard";
}

const ArticleCard = ({ id, title, subtitle, category, date, image, variant = "standard" }: ArticleCardProps) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(id);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(id);
    toast.success(bookmarked ? "Removed from bookmarks" : "Saved to bookmarks");
  };

  // Featured - large hero-style card
  if (variant === "featured") {
    return (
      <a href={`/article/${id}`} className="group block relative">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                {category}
              </span>
              <span className="w-8 h-px bg-background/40" />
              <span className="text-xs text-background/60">{date}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-background leading-tight max-w-2xl font-serif">
              {title}
            </h2>
            {subtitle && (
              <p className="text-background/70 mt-3 text-lg max-w-xl">{subtitle}</p>
            )}
          </div>

          <button
            onClick={handleBookmark}
            className="absolute top-6 left-6 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-all z-10"
            aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-primary text-primary" : "text-foreground"}`} />
          </button>

          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-foreground" />
          </div>
        </div>
      </a>
    );
  }

  // Horizontal - side-by-side layout
  if (variant === "horizontal") {
    return (
      <a href={`/article/${id}`} className="group flex gap-6 items-center py-6 border-b border-border hover:border-primary/30 transition-colors">
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <button
            onClick={handleBookmark}
            className="absolute top-2 left-2 w-8 h-8 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-all z-10"
            aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark className={`w-3 h-3 ${bookmarked ? "fill-primary text-primary" : "text-foreground"}`} />
          </button>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {category}
            </span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold leading-snug font-serif group-hover:text-primary transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-muted-foreground mt-2 text-sm line-clamp-2 hidden sm:block">{subtitle}</p>
          )}
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 hidden md:block" />
      </a>
    );
  }

  // Minimal - text-focused with small image
  if (variant === "minimal") {
    return (
      <a href={`/article/${id}`} className="group block p-6 bg-card rounded-xl border border-transparent hover:border-primary/20 transition-all relative">
        <button
          onClick={handleBookmark}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-all z-10"
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <Bookmark className={`w-3 h-3 ${bookmarked ? "fill-primary text-primary" : "text-muted-foreground"}`} />
        </button>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold leading-snug font-serif group-hover:text-primary transition-colors mb-2 pr-10">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{date}</p>
      </a>
    );
  }

  // Standard - vertical card with image
  return (
    <a href={`/article/${id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <button
          onClick={handleBookmark}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-all z-10"
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-primary text-primary" : "text-foreground"}`} />
        </button>
        
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-foreground" />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h3 className="text-xl font-bold leading-snug font-serif group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </a>
  );
};

export default ArticleCard;
