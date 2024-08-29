
"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { Word } from "@shared/types/words";

interface WordsContextProps {
  words: Word[];
  isLoading: boolean;
}

const WordsContext = createContext<WordsContextProps>({
  words: [],
  isLoading: true,
});

export const WordsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [words, setWords] = useState<Word[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API as string)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setWords(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the words:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <WordsContext.Provider value={{ words, isLoading }}>
      {children}
    </WordsContext.Provider>
  );
};

export const useWords = () => useContext(WordsContext);
