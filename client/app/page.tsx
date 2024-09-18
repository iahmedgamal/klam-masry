"use client";

import { useState } from "react";
import Pagination from "./components/pagination/Pagination";
import Title from "./components/title/Title";
import Words from "./components/words/Words";
import SearchBar from "./components/searchBar/SearchBar";
import { useWords, WordsProvider } from "./context/wordsContext";
import Random from "./components/random/Random";
import Footer from "./components/footer/Footer";
const wordsPerPage = 16;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { words } = useWords();

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  // TODO: Calculate the total number of pages
  const pageCount = Math.ceil(words.length / wordsPerPage);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-2 bg-gray-950 ">
      <WordsProvider>
        <Title />
        <SearchBar />
        <Random/>
        <Words currentPage={currentPage} wordsPerPage={wordsPerPage} />
        <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        <Footer/>
      </WordsProvider>
    </main>
  );
};

export default Home;
