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
    <main
      className="flex flex-col items-center justify-center min-h-screen px-6"
      style={{ background: "#0b0806" }}
    >
      <a
        href="/"
        className="absolute top-6 left-6 text-xs tracking-widest uppercase transition-colors duration-200 text-[#3a2c18] hover:text-[#c9933a]"
        style={{ fontFamily: "var(--font-mono), monospace", letterSpacing: "0.2em" }}
      >
        ← back
      </a>

      <div className="page-enter text-center max-w-lg w-full">
        <div
          className="mb-8 pb-8"
          style={{ borderBottom: "1px solid #2a2018" }}
        >
          <p
            className="text-8xl sm:text-9xl font-light leading-none mb-4"
            dir="rtl"
            style={{ color: "#e8c87a" }}
          >
            {word.word}
          </p>
          <p
            className="text-xl tracking-widest"
            style={{
              color: "#4a3a28",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            {word.franco}
          </p>
        </div>

        <p
          className="text-4xl sm:text-5xl font-medium mb-8 tracking-wide"
          style={{ color: "#c9b090" }}
        >
          {word.en}
        </p>

        <p
          className="text-xs tracking-widest uppercase"
          style={{
            color: "#2a2018",
            fontFamily: "var(--font-mono), monospace",
            letterSpacing: "0.25em",
          }}
        >
          appeared {word.appeared}× in corpus
        </p>
      </div>
    </main>
  );
};

export default WordDetails;
