import React from "react";

const Title = () => {
  return (
    <div className="page-enter text-center pt-10 pb-2 select-none">
      <p
        className="text-7xl sm:text-8xl font-light mb-1 text-sand-border"
        aria-hidden="true"
        style={{ lineHeight: 1 }}
      >
        كلام مصري
      </p>
      <h1 className="text-4xl sm:text-5xl font-light tracking-widest2 uppercase text-gold">
        Klam Masry
      </h1>
      <p className="mt-3 text-sm tracking-widest2 uppercase text-gold-dim">
        Learn Key Egyptian Arabic Words &amp; Phrases
      </p>
      <div className="mx-auto mt-6 mb-2 h-px w-10 bg-sand-border" />
    </div>
  );
};

export default Title;
