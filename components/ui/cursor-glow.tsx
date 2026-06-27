"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean/10 blur-3xl lg:block"
      style={{ left: position.x, top: position.y }}
    />
  );
}
