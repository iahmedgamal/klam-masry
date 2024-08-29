import React, { useEffect, useState } from "react";
import { Word } from "@shared/types/words";
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
    <div className="grid  grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-20 ">
      {words.length === 0 && (<><div></div><div className="text-cyan-200 text-3xl">Loading...</div> </>)}
      {currentWords.map((item) => (
        <div key={item._id} className="p-1 w-24 border-spacing-4 border-2 border-cyan-100 text-center text-cyan-200">
          <Tooltip text={item.appeared}>
            <Link href={`/word/${item._id}`} passHref>
              <h2 className="text-right text-cyan-100 text-3xl">{item.word} </h2>
              <br></br>
              <h2 className="text-left">{item.en}</h2>
            </Link>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Words;
