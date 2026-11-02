"use client";

import { useEffect, useState } from "react";
import styles from "./YearTicker.module.css";

type YearTickerProps = {
  years?: number[];
};

export function YearTicker({ years = [2026, 2028, 2030, 2035, 2040] }: YearTickerProps) {
  const [yearIndex, setYearIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setYearIndex((currentIndex) => (currentIndex + 1) % years.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [years.length]);

  const year = years[yearIndex];

  return (
    <span className={styles.ticker} aria-live="polite" aria-label={`Opening year ${year}`}>
      <span className={styles.year} key={year}>{year}</span>
    </span>
  );
}
