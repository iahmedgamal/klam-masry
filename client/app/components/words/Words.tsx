import React, { useEffect, useState } from "react";
import { Word } from "@shared/types/words";
import styles from "./words.module.css";

interface WordsProps {
  currentPage: number;
  wordsPerPage: number;
}
const Words = ({ currentPage, wordsPerPage }: WordsProps) => {
  const [words, setWords] = useState<Word[]>([]);

  console.log(process.env.NEXT_PUBLIC_API);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API as string)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const wordsArray: Word[] = data;
        setWords(wordsArray);
      })
      .catch((error) => console.error("Error fetching the words:", error));
  }, []);

  const startIndex = currentPage * wordsPerPage;
  const endIndex = startIndex + wordsPerPage;
  const currentWords = words.slice(startIndex, endIndex);

  return (
    <div className={styles.grid}>
      {currentWords.map((item, index) => (
        <div key={item._id} className={styles.wordItem}>
          <h2 className={styles.theWord}>{item.word} </h2>
          <br></br>
          <h2>{item.en}</h2>
          <br></br>
          <p className={styles.appeared}>Appeared: {item.appeared}</p>
        </div>
      ))}
    </div>
  );
};

export default Words;
