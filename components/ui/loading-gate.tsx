"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingGate({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-mist dark:bg-[#0b1117]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="h-14 w-14 rounded-full border-4 border-ocean/20 border-t-ocean" />
            <span className="sr-only">Loading portfolio</span>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </>
  );
}
