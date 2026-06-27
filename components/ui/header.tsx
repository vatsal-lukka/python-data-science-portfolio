"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navItems, profile } from "@/lib/data";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const sections = ["#home", ...navItems.map((item) => item.href)];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );

    sections.forEach((href) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/72 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1117]/78">
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-sm font-black text-white dark:bg-white dark:text-ink">
            VL
          </span>
          <span className="hidden text-sm font-bold sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-md px-3 py-2 text-sm font-semibold transition ${
                active === item.href
                  ? "bg-ocean/10 text-ocean dark:bg-white/10 dark:text-gold"
                  : "text-ink/70 hover:text-ocean dark:text-white/70 dark:hover:text-gold"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            suppressHydrationWarning
            onClick={toggleTheme}
            className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-ink/10 bg-white/70 text-ink transition hover:border-ocean/30 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {mounted ? (
              theme === "dark" ? (
                <FiSun aria-hidden />
              ) : (
                <FiMoon aria-hidden />
              )
            ) : (
              <span className="h-4 w-4" aria-hidden />
            )}
          </button>
          <button
            type="button"
            aria-label="Toggle navigation"
            suppressHydrationWarning
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-ink/10 bg-white/70 text-ink transition dark:border-white/10 dark:bg-white/10 dark:text-white lg:hidden"
          >
            {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-ink/10 bg-white/95 px-4 py-4 dark:border-white/10 dark:bg-[#0b1117]/95 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-ink/80 dark:text-white/80"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
