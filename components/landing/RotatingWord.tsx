"use client";

import { useEffect, useState } from "react";

const WORDS = ["friends", "the pros"];

export function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-emerald-600 transition-opacity duration-300">
      {WORDS[index]}
    </span>
  );
}

