import { useState } from 'react';
import { Word } from '@shared/types/words';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();

  const onSearch = async (e:any) => {
    setQuery(e.target.value);


    if (e.target.value.length > 1) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}api/search?query=${e.target.value}`);
      const data = await res.json();
      setResults(data);
    } else {
      setResults([]);
    }
  };

  const onSelectResult = (word : Word) => {
    router.push(`/word/${word._id}`);
  };

  return (
    <div className="relative mt-10 z-10">
      <input
        type="text"
        value={query}
        onChange={onSearch}
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="Search..."
      />
      {results.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1">
          {results.map((result: Word) => (
            <li
              key={result._id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => onSelectResult(result)}
            >
              {result.en} / {result.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
