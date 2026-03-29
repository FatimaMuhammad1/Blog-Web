import { useState, useEffect } from "react";

const BOOKMARKS_KEY = "drift_bookmarks";

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(BOOKMARKS_KEY);
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const toggleBookmark = (articleId: string) => {
    setBookmarks((prev) => {
      const isBookmarked = prev.includes(articleId);
      const updated = isBookmarked
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId];
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const isBookmarked = (articleId: string) => bookmarks.includes(articleId);

  return { bookmarks, toggleBookmark, isBookmarked };
};
