"use client";
import { useEffect, useState } from "react";
import { Word } from "@shared/types/words";

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
    <main className="flex justify-center items-center min-h-screen bg-gray-950 text-cyan-300">
      <div className="bg-cyan-800 text-cyan-50 p-2 hover:cursor-pointer absolute top-0 left-0 m-4">
        <a href="/">back</a>
      </div>
      <div className="border-2 border-cyan-50 p-4 text-center bg-gray-800 rounded-md">
        <h1 className="bg-cyan-700 p-4 mb-2 rounded-t-md">
          <span className="text-6xl text-white">{word.word}</span>
        </h1>
        <h1 className="bg-cyan-200 p-4 mb-2">
          <span className="text-6xl text-cyan-800">{word.en}</span>
        </h1>
        <h1 className="bg-cyan-400 p-4 rounded-b-md">
          <span className="text-6xl text-cyan-800">{word.appeared}</span>
        </h1>
      </div>
    </main>
  );
};

export default WordDetails;
