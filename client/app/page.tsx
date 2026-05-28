"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Title from "./components/title/Title";
import Words from "./components/words/Words";
import SearchBar from "./components/searchBar/SearchBar";
import { useWords, WordsProvider } from "./context/wordsContext";
import Random from "./components/random/Random";
import Footer from "./components/footer/Footer";
import LoadMore from "./components/loadMore/LoadMore";

function HomeContent() {
  const router = useRouter();
  const { words, isLoading, isLoadingMore, hasMore, currentPage, loadMore } = useWords();

  const handleLoadMore = () => {
    loadMore();
    router.push(`?page=${currentPage + 1}`, { scroll: false });
  };

  return (
    <>
      <Title />
      <SearchBar />
      <Random />
      {isLoading ? (
        <div className="flex items-center justify-center py-32">
          <p
            className="text-lg tracking-widest uppercase animate-pulse font-mono-custom"
            style={{ color: "#3a2c18", letterSpacing: "0.3em" }}
          >
            Loading
          </p>
        </div>
      ) : (
        <>
          <Words words={words} />
          <LoadMore
            onLoadMore={handleLoadMore}
            isLoadingMore={isLoadingMore}
            hasMore={hasMore}
          />
        </>
      )}
      <Footer />
    </>
  );
}

function HomeWithProvider() {
  const searchParams = useSearchParams();
  const initialPage = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));

  return (
    <WordsProvider initialPage={initialPage}>
      <HomeContent />
    </WordsProvider>
  );
}

const Home = () => {
  return (
    <main
      className="flex flex-col items-center min-h-screen"
      style={{ background: "#0b0806" }}
    >
      <Suspense>
        <HomeWithProvider />
      </Suspense>
    </main>
  );
};

export default Home;
