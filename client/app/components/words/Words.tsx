import React from "react";
import Link from "next/link";
import Tooltip from "../tooltip/Tooltip";
import { useWords } from "@/app/context/wordsContext";

interface WordsProps {
  currentPage: number;
  wordsPerPage: number;
}
const Words = ({ currentPage, wordsPerPage }: WordsProps) => {
  const {words, isLoading} =  useWords();

  const startIndex = currentPage * wordsPerPage;
  const endIndex = startIndex + wordsPerPage;
  const currentWords = words.slice(startIndex, endIndex);

  return (
    <div className='grid grid-cols-2 gap-4 pt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {isLoading && (
        <div className='text-center col-span-full'>
          <div className='text-3xl text-cyan-200'>Loading...</div>
        </div>
      )}
      {currentWords.map((item) => (
        <div
          key={item._id}
          className='p-4 text-center transition-colors duration-300 border-2 rounded-lg border-cyan-100 text-cyan-200 hover:bg-cyan-900'>
          <Tooltip text={item.appeared}>
            <Link href={`/word/${item._id}`} passHref className='block'>
              <h2 className='mb-2 text-2xl font-bold text-right sm:text-3xl text-cyan-50'>
                {item.word}
              </h2>
              <p className='mb-2 text-lg italic text-right sm:text-xl text-cyan-300'>
                {item.franco}
              </p>
              <p className='text-sm text-left sm:text-base text-cyan-200'>
                {item.en}
              </p>
            </Link>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Words;
