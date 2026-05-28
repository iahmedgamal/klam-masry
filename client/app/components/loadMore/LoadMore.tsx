import React from "react";

interface LoadMoreProps {
  onLoadMore: () => void;
  isLoadingMore: boolean;
  hasMore: boolean;
}

const LoadMore = ({ onLoadMore, isLoadingMore, hasMore }: LoadMoreProps) => {
  if (!hasMore) {
    return (
      <p
        className="py-10 text-xs tracking-widest uppercase font-mono-custom"
        style={{ color: "#2a2018", letterSpacing: "0.25em" }}
      >
        all words loaded
      </p>
    );
  }

  return (
    <div className="py-10">
      <button
        onClick={onLoadMore}
        disabled={isLoadingMore}
        className="text-xs tracking-widest uppercase font-mono-custom transition-colors duration-200 disabled:cursor-not-allowed"
        style={{
          color: isLoadingMore ? "#3a2c18" : "#6a5a40",
          letterSpacing: "0.25em",
          background: "none",
          border: "none",
          cursor: isLoadingMore ? "not-allowed" : "pointer",
        }}
        onMouseEnter={(e) => {
          if (!isLoadingMore)
            (e.currentTarget as HTMLButtonElement).style.color = "#c9933a";
        }}
        onMouseLeave={(e) => {
          if (!isLoadingMore)
            (e.currentTarget as HTMLButtonElement).style.color = "#6a5a40";
        }}
      >
        {isLoadingMore ? "loading..." : "↓ load more"}
      </button>
    </div>
  );
};

export default LoadMore;
