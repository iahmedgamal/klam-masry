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
            <div className="h-full p-4 border rounded bg-sand-card border-sand-border transition-all duration-300 hover:bg-sand-card-hover hover:border-sand-border-hover">
              <h2 className="text-2xl sm:text-3xl font-medium text-right mb-1 leading-tight text-gold-light" dir="rtl">
                {item.word}
              </h2>
              <p className="text-xs text-right mb-3 font-mono-custom tracking-wide text-cream-muted">
                {item.franco}
              </p>
              <div className="mb-3 h-px bg-sand-border" />
              <p className="text-lg sm:text-xl font-medium tracking-wide text-cream-bright">
                {item.en}
              </p>
              <p className="text-xs mt-3 font-mono-custom text-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
