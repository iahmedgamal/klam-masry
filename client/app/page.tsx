"use client";

import { useState } from "react";
import Pagination from "./components/pagination/Pagination";
import Title from "./components/title/Title";
import Words from "./components/words/Words";
import SearchBar from "./components/searchBar/SearchBar";
import Link from "next/link";
import { WordsProvider } from "./context/wordsContext";
const wordsPerPage = 16;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  // TODO: Calculate the total number of pages
  const pageCount = Math.ceil(3000 / wordsPerPage);

  return (
    <main className="flex flex-col justify-between items-center p-2 bg-gray-950 min-h-screen ">
      <WordsProvider>
        <Title />
        <SearchBar />
        <Link className="text-cyan-400 mt-4" href={"random"}>Random</Link>
        <Words currentPage={currentPage} wordsPerPage={wordsPerPage} />
        <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
      </WordsProvider>
    </main>
  );
};

export default Home;
