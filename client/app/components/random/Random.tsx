"use client";

import React from "react";
import { useWords } from "@/app/context/wordsContext";
import { Word } from "../../../../shared/types/words";

const Random = () => {
  const { words, isLoading } = useWords();

  if (isLoading || words.length === 0) return null;

  const randomWordId = getRandomWord(words);

  return (
    <div className="mt-4">
      <a
        href={`/word/${randomWordId}`}
        className="text-xs tracking-widest uppercase transition-colors duration-200 font-mono-custom"
        style={{ color: "#4a3a28", letterSpacing: "0.2em" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "#c9933a";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "#4a3a28";
        }}
      >
        ↝ random word
      </a>
    </div>
  );
};

export default Random;

function getRandomWord(words: Word[]): number {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex]._id;
}
