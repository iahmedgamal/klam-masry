"use client";
import { useEffect, useState } from "react";
import { Word } from "@shared/types/words";
import styles from "../../page.module.css";
interface WordDetailsProps {
  params: {
    id: string; 
  };
}

const WordDetails = ({ params }: WordDetailsProps) => {
  const { id } = params;  
  const [word, setWord] = useState<Word | null>(null);
  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API}word/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setWord(data);
        })
        .catch((error) => console.error("Error fetching the word details:", error));
    }
  }, [id]);

  if (!word) return <p>Loading...</p>;

  return (
    <main className={styles.main}>
      <h1>{word.word}</h1>
      <h2>{word.en}</h2>
      <p>Appeared: {word.appeared}</p>
      <p>Details about the word can go here.</p>
    </main>
  );
};

export default WordDetails;
