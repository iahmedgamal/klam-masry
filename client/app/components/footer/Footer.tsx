import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full py-6 border-t border-sand-border">
      <div className="flex items-center justify-between px-6 mx-auto max-w-5xl">
        <Link
          href="https://www.linkedin.com/in/ahmadgmustafa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest2 uppercase font-mono-custom text-gold-dim hover:text-cream transition-colors duration-200"
        >
          LinkedIn
        </Link>
        <p className="text-xs font-mono-custom text-sand-border">كلام مصري</p>
        <Link
          href="https://ko-fi.com/shankat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest2 uppercase font-mono-custom text-gold-dim hover:text-gold transition-colors duration-200"
        >
          Support
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
