'use client';

import { useEffect, useState } from "react";

const RotatingPhrase: React.FC = () => {
  const phrases = ["your friends", "the pros"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex(prev => (prev + 1) % phrases.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="
        inline-block
        align-baseline
        whitespace-nowrap
        text-emerald-600
        font-semibold
        transition-opacity
        duration-300
      "
      style={{ minWidth: "8.2rem" }}
    >
      {phrases[index]}
    </span>
  );
};

export default RotatingPhrase;
