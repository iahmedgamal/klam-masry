import React from "react";

interface LoadMoreProps {
  onLoadMore: () => void;
  isLoadingMore: boolean;
  hasMore: boolean;
}

const LoadMore = ({ onLoadMore, isLoadingMore, hasMore }: LoadMoreProps) => {
  if (!hasMore) {
    return (
      <p className="py-10 text-xs tracking-widest3 uppercase font-mono-custom text-sand-border">
        all words loaded
      </p>
    );
  }

  return (
    <div className="py-10">
      <button
        onClick={onLoadMore}
        disabled={isLoadingMore}
        className="text-xs tracking-widest3 uppercase font-mono-custom text-cream hover:text-gold disabled:text-gold-muted disabled:cursor-not-allowed transition-colors duration-200 bg-transparent border-none cursor-pointer"
      >
        {isLoadingMore ? "loading..." : "↓ load more"}
      </button>
    </div>
  );
};

export default LoadMore;
