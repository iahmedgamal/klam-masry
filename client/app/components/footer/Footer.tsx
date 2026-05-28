import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full py-6" style={{ borderTop: "1px solid #1e1810" }}>
      <div className="flex items-center justify-between px-6 mx-auto max-w-5xl">
        <Link
          href="https://www.linkedin.com/in/ahmadgmustafa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase font-mono-custom transition-colors duration-200"
          style={{ color: "#3a2c18", letterSpacing: "0.2em" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#6a5a40";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#3a2c18";
          }}
        >
          LinkedIn
        </Link>
        <p className="text-xs font-mono-custom" style={{ color: "#2a2018" }}>
          كلام مصري
        </p>
        <Link
          href="https://ko-fi.com/shankat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase font-mono-custom transition-colors duration-200"
          style={{ color: "#3a2c18", letterSpacing: "0.2em" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#c9933a";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#3a2c18";
          }}
        >
          Support
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
