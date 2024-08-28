import React, { useEffect, useState } from "react";
import { Word } from "@shared/types/words";
import styles from "./words.module.css";
import Link from "next/link";
import Tooltip from "../tooltip/Tooltip";

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
      {words.length === 0 && <div>Loading...</div>}
      {currentWords.map((item, index) => (
        <div key={item._id} className={styles.wordItem}>
          <Tooltip text={item.appeared}>
            <Link href={`/word/${item._id}`} passHref>
              <h2 className={styles.theWord}>{item.word} </h2>
              <br></br>
              <h2>{item.en}</h2>
            </Link>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Words;
