"use client";

import React from 'react';
import { useWords } from '@/app/context/wordsContext';
import { Word } from '../../../../shared/types/words';
import { useRouter } from 'next/navigation';

const Random = () => {
  const { words, isLoading } = useWords();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const randomWordId = words.length > 0 ? getRandomWord(words) : null;

  return (
    <div className='text-cyan-400 mt-4'>
      {randomWordId ? (
        <a href={`/word/${randomWordId}`} >Give me a random word to learn</a>
      ) : (
        <div>No words available</div>
      )}
    </div>
  );
};

export default Random;

function getRandomWord(words: Word[]): number {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex]._id;
}
