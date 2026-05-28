import React from "react";
import Link from "next/link";
import { Word } from "@shared/types/words";

interface WordsProps {
  words: Word[];
}

const Words = ({ words }: WordsProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-5xl px-4">
      {words.map((item, index) => (
        <div
          key={item._id}
          className="card-enter"
          style={{ "--i": index % 30 } as React.CSSProperties}
        >
          <Link href={`/word/${item._id}`} className="block h-full group">
            <div
              className="h-full p-4 transition-all duration-300 border rounded"
              style={{ background: "#111009", borderColor: "#2a2018" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#6a4e28";
                (e.currentTarget as HTMLDivElement).style.background = "#161209";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#2a2018";
                (e.currentTarget as HTMLDivElement).style.background = "#111009";
              }}
            >
              <h2
                className="text-2xl sm:text-3xl font-medium text-right mb-1 leading-tight"
                dir="rtl"
                style={{ color: "#e8c87a" }}
              >
                {item.word}
              </h2>
              <p
                className="text-xs text-right mb-3 font-mono-custom tracking-wide"
                style={{ color: "#6a5a40" }}
              >
                {item.franco}
              </p>
              <div style={{ height: "1px", background: "#2a2018" }} className="mb-3" />
              <p className="text-lg sm:text-xl font-medium tracking-wide" style={{ color: "#ede3cd" }}>
                {item.en}
              </p>
              <p
                className="text-xs mt-3 font-mono-custom opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "#4a3a28" }}
              >
                ×{item.appeared}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Words;
