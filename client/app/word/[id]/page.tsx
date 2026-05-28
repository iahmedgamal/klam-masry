// app/word/[id]/page.tsx

import { Word } from "@shared/types/words";

export async function generateStaticParams() {
  const ids: string[] = [];
  let page = 1;

  while (true) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}?page=${page}`);
    if (!res.ok) break;
    const words: Word[] = await res.json();
    if (!words.length) break;
    words.forEach((w) => ids.push(String(w._id)));
    if (words.length < 30) break;
    page++;
  }

  return ids.map((id) => ({ id }));
}

interface WordDetailsProps {
  params: {
    id: string;
  };
}

const WordDetails = async ({ params }: WordDetailsProps) => {
  const { id } = params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}word/${id}`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const word: Word = await response.json();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-sand-bg">
      <a
        href="/"
        className="absolute top-6 left-6 text-xs tracking-widest2 uppercase font-mono-custom text-gold-dim hover:text-gold transition-colors duration-200"
      >
        ← back
      </a>

      <div className="page-enter text-center max-w-lg w-full">
        <div className="mb-8 pb-8 border-b border-sand-border">
          <p
            className="text-8xl sm:text-9xl font-light leading-none mb-4 text-gold-light"
            dir="rtl"
          >
            {word.word}
          </p>
          <p className="text-xl tracking-widest font-mono-custom text-gold-muted">
            {word.franco}
          </p>
        </div>

        <p className="text-4xl sm:text-5xl font-medium mb-8 tracking-wide text-cream-bright">
          {word.en}
        </p>

        <p className="text-xs tracking-widest3 uppercase font-mono-custom text-sand-border">
          appeared {word.appeared}× in corpus
        </p>
      </div>
    </main>
  );
};

export default WordDetails;
