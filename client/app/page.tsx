"use client";

import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Pagination from './Pagination';
import {Word} from "@shared/types/words"
const wordsPerPage = 20;

const Home = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const wordsArray : Word[] = data
        setWords(wordsArray);
      })
      .catch((error) => console.error('Error fetching the words:', error));
  }, []);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(words.length / wordsPerPage);
  const startIndex = currentPage * wordsPerPage;
  const endIndex = startIndex + wordsPerPage;
  const currentWords = words.slice(startIndex, endIndex);

  return (
    <main className={styles.main}>
      <h1 >Klam Masry</h1>
      <p className="text-2xl">
      Learn Egyptian Arabic by most used appearance words and sentances
      </p>
      <div className={styles.grid}>
        {currentWords.map((item, index) => (
          <div key={index} className={styles.wordItem}>
            <h2 className={styles.theWord}>{item.word}  </h2>
            <br></br>
            <h2>{item.en}</h2>
            <br></br>
            <p className={styles.appeared}>Appeared: {item.appeared}</p>
          </div>
        ))}
      </div>
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </main>
  );
};

export default Home;
