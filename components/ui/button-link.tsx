import Link from "next/link";
import type { IconType } from "react-icons";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: IconType;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
};

const variants = {
  primary:
    "bg-ink text-white shadow-lg shadow-ocean/20 hover:-translate-y-0.5 hover:bg-ocean dark:bg-white dark:text-ink dark:hover:bg-gold",
  secondary:
    "border border-ink/10 bg-white/80 text-ink hover:-translate-y-0.5 hover:border-ocean/30 hover:text-ocean dark:border-white/10 dark:bg-white/10 dark:text-white",
  ghost:
    "text-ink hover:bg-ink/5 hover:text-ocean dark:text-white dark:hover:bg-white/10"
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  download
}: ButtonLinkProps) {
  const className = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition ${variants[variant]}`;

  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {Icon ? <Icon aria-hidden /> : null}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} download={download}>
      {Icon ? <Icon aria-hidden /> : null}
      {children}
    </Link>
  );
}
