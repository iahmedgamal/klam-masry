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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}api/search?query=${e.target.value}`
      );
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
        className="w-full px-4 py-3 text-base outline-none transition-all duration-200 rounded font-mono-custom tracking-wide"
        style={{
          background: "#111009",
          border: "1px solid #2a2018",
          color: "#c9b090",
          caretColor: "#c9933a",
        }}
        placeholder="search words..."
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#6a4e28";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#2a2018";
        }}
      />
      {results.length > 0 && (
        <ul
          className="absolute w-full rounded mt-1 overflow-hidden dropdown-enter z-10"
          style={{ background: "#161209", border: "1px solid #2a2018" }}
        >
          {results.map((result: Word) => (
            <li
              key={result._id}
              className="px-4 py-3 cursor-pointer flex items-center justify-between transition-colors duration-150"
              style={{ borderBottom: "1px solid #1e1810" }}
              onClick={() => onSelectResult(result)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLLIElement).style.background = "#1e1810";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLLIElement).style.background = "transparent";
              }}
            >
              <span className="text-sm" style={{ color: "#9a8870" }}>
                {result.en}
              </span>
              <span
                className="text-lg"
                dir="rtl"
                style={{ color: "#e8c87a" }}
              >
                {result.word}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
