import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { navItems, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white/55 py-10 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto_auto] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-sm font-black text-white dark:bg-white dark:text-ink">
              VL
            </span>
            <span className="font-bold">{profile.name}</span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-ink/65 dark:text-white/65">
            Designed and developed by {profile.name} as a personal portfolio for data-focused roles.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          {navItems.slice(0, 5).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-2 py-1 text-sm font-semibold text-ink/65 hover:text-ocean dark:text-white/65 dark:hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2 lg:justify-end">
          {[
            [FaGithub, profile.github, "GitHub"],
            [FaLinkedin, profile.linkedin, "LinkedIn"],
            [FiMail, `mailto:${profile.email}`, "Email"],
            [FiPhone, profile.phoneHref, "Phone"]
          ].map(([Icon, href, label]) => {
            const SocialIcon = Icon as typeof FaGithub;
            return (
              <a
                key={label as string}
                href={href as string}
                aria-label={label as string}
                className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-ink/10 text-ink/70 hover:text-ocean dark:border-white/10 dark:text-white/70 dark:hover:text-gold"
              >
                <SocialIcon aria-hidden />
              </a>
            );
          })}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-4 text-sm text-ink/55 dark:text-white/55 sm:px-6 lg:px-8">
        Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
