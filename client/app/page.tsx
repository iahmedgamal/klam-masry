"use client";

import { useState } from "react";
import Pagination from "./components/pagination/Pagination";
import Title from "./components/title/Title";
import Words from "./components/words/Words";
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
      <Title/>
      <Words currentPage={currentPage} wordsPerPage={wordsPerPage}/>
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </main>
  );
};

export default Home;
