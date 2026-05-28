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
        className="text-xs tracking-widest2 uppercase font-mono-custom text-gold-muted hover:text-gold transition-colors duration-200"
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
