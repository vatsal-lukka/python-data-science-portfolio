"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      suppressHydrationWarning
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`focus-ring fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-md bg-ink text-white shadow-glow transition dark:bg-white dark:text-ink ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <FiArrowUp aria-hidden />
    </button>
  );
}
