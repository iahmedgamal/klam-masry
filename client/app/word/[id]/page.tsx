// app/word/[id]/page.tsx

import { Word } from "@shared/types/words";

interface WordDetailsProps {
  params: {
    id: string;
  };
}

const WordDetails = async ({ params }: WordDetailsProps) => {
  const { id } = params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}word/${id}`, {
    cache: 'force-cache'
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const word: Word = await response.json();

  return (
    <main className='flex items-center justify-center min-h-screen bg-gray-950 text-cyan-300'>
      <div className='absolute top-0 left-0 p-2 m-4 bg-cyan-800 text-cyan-50 hover:cursor-pointer'>
        <a href='/'>back</a>
      </div>
      <div className='p-4 text-center bg-gray-800 border-2 rounded-md border-cyan-50'>
        <h1 className='p-4 mb-2 bg-cyan-700 rounded-t-md'>
          <span className='text-6xl text-white'>{word.word}</span>
        </h1>

        <h1 className='p-4 mb-2 bg-cyan-200'>
          <span className='text-6xl text-cyan-800'>{word.franco}</span>
        </h1>
        <h1 className='p-4 mb-2 bg-cyan-200'>
          <span className='text-6xl text-cyan-800'>{word.en}</span>
        </h1>
        <h1 className='p-4 bg-cyan-400 rounded-b-md'>
          <span className='text-6xl text-cyan-800'>{word.appeared}</span>
        </h1>
      </div>
    </main>
  );
};

export default WordDetails;
