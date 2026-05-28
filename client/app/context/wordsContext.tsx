"use client";

import React, { createContext, useState, useEffect, useContext, useCallback, useRef } from "react";
import { Word } from "@shared/types/words";

interface WordsContextProps {
  words: Word[];
  isLoading: boolean;
  isLoadingMore: boolean;
  hasMore: boolean;
  currentPage: number;
  loadMore: () => void;
}

const WordsContext = createContext<WordsContextProps>({
  words: [],
  isLoading: true,
  isLoadingMore: false,
  hasMore: true,
  currentPage: 1,
  loadMore: () => {},
});

interface WordsProviderProps {
  children: React.ReactNode;
  initialPage?: number;
}

async function fetchPage(page: number): Promise<Word[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}?page=${page}`);
  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  return res.json();
}

export function WordsProvider({ children, initialPage = 1 }: WordsProviderProps) {
  const [words, setWords] = useState<Word[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const loadInitialPages = async () => {
      try {
        // Fetch all pages 1..initialPage to restore scroll position on refresh
        const fetches = Array.from({ length: initialPage }, (_, i) => fetchPage(i + 1));
        const pages = await Promise.all(fetches);
        const allWords = pages.flat();
        setWords(allWords);
        // If last page returned fewer than 30, no more pages
        const lastPage = pages[pages.length - 1];
        if (lastPage.length < 30) setHasMore(false);
      } catch (error) {
        console.error("Error fetching words:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialPages();
  }, [initialPage]);

  const loadMore = useCallback(async () => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);
    try {
      const nextPage = currentPage + 1;
      const newWords = await fetchPage(nextPage);
      setWords((prev) => [...prev, ...newWords]);
      setCurrentPage(nextPage);
      if (newWords.length < 30) setHasMore(false);
    } catch (error) {
      console.error("Error loading more words:", error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [currentPage, isLoadingMore, hasMore]);

  return (
    <WordsContext.Provider value={{ words, isLoading, isLoadingMore, hasMore, currentPage, loadMore }}>
      {children}
    </WordsContext.Provider>
  );
}

export const useWords = () => useContext(WordsContext);
