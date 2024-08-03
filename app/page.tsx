"use client"; // Marking this file as a Client Component

import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Pagination from './Pagination';

// Number of words per page
const wordsPerPage = 20; // Adjust as needed (4 words per row, 5 rows per page)

const Home = () => {
  const [words, setWords] = useState<{ word: string; appeared: number }[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Fetch words from the JSON file
    fetch('./assets/words.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Convert object to array
        const wordsArray : { word: string; appeared: number }[] = Object.values(data.words);
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
      <div className={styles.grid}>
        {currentWords.map((item, index) => (
          <div key={index} className={styles.wordItem}>
            <h2>{item.word}</h2>
            <p className={styles.appeared}>Appeared: {item.appeared}</p>
            {/* <p>Rank: {index +1 }</p> */}

          </div>
        ))}
      </div>
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </main>
  );
};

export default Home;
