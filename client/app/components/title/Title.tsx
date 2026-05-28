import React from "react";

const Title = () => {
  return (
    <div className="page-enter text-center pt-10 pb-2 select-none">
      <p
        className="text-7xl sm:text-8xl font-light tracking-widest mb-1"
        style={{ color: "#2d2010", lineHeight: 1, userSelect: "none" }}
        aria-hidden="true"
      >
        كلام مصري
      </p>
      <h1
        className="text-4xl sm:text-5xl font-light tracking-[0.25em] uppercase"
        style={{ color: "#c9933a", letterSpacing: "0.3em" }}
      >
        Klam Masry
      </h1>
      <p
        className="mt-3 text-sm tracking-widest uppercase"
        style={{ color: "#6a5a40", letterSpacing: "0.2em" }}
      >
        Learn Key Egyptian Arabic Words &amp; Phrases
      </p>
      <div
        className="mx-auto mt-6 mb-2"
        style={{ width: "40px", height: "1px", background: "#3a2c18" }}
      />
    </div>
  );
};

export default Title;
