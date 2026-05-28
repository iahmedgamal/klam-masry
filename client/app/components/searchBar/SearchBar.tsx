"use client";

import { useState } from "react";
import { Word } from "@shared/types/words";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Word[]>([]);
  const router = useRouter();

  const onSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.length > 1) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}api/search?query=${e.target.value}`);
      const data: Word[] = await res.json();
      setResults(data);
    } else {
      setResults([]);
    }
  };

  const onSelectResult = (word: Word) => {
    router.push(`/word/${word._id}`);
  };

  return (
    <div className="relative mt-6 w-full max-w-md px-4">
      <input
        type="text"
        value={query}
        onChange={onSearch}
        className="w-full px-4 py-3 text-base outline-none rounded font-mono-custom tracking-wide bg-sand-card border border-sand-border text-cream focus:border-sand-border-hover transition-colors duration-200"
        style={{ caretColor: '#c9933a' }}
        placeholder="search words..."
      />
      {results.length > 0 && (
        <ul className="absolute w-full rounded mt-1 overflow-hidden dropdown-enter z-10 bg-sand-card-hover border border-sand-border">
          {results.map((result: Word) => (
            <li
              key={result._id}
              className="px-4 py-3 cursor-pointer flex items-center justify-between border-b border-sand-border hover:bg-sand-card transition-colors duration-150"
              onClick={() => onSelectResult(result)}
            >
              <span className="text-sm text-cream">{result.en}</span>
              <span className="text-lg text-gold-light" dir="rtl">{result.word}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
