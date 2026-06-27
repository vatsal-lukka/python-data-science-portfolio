import { FaGithub } from "react-icons/fa";
import { FiGitCommit, FiStar } from "react-icons/fi";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data";

const languageBars = [
  { name: "Python", value: "52%" },
  { name: "Jupyter Notebook", value: "24%" },
  { name: "SQL", value: "14%" },
  { name: "TypeScript", value: "10%" }
];

export function GitHubShowcase() {
  return (
    <section id="github" className="section-shell">
      <SectionHeading
        eyebrow="GitHub"
        title="Code activity and project proof"
        description="Designed for easy GitHub username integration with stats, contribution rhythm, top languages, and repository highlights."
      />
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="glass-card rounded-lg p-6">
          <FaGithub className="text-4xl" aria-hidden />
          <h3 className="mt-5 text-2xl font-bold">GitHub Stats</h3>
          <p className="mt-3 text-ink/70 dark:text-white/70">
            Connect your username to replace these recruiter-friendly stat cards with live data.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Repositories", "10+"],
              ["Commit Streak", "30 days"],
              ["Top Language", "Python"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md bg-white/60 p-4 dark:bg-white/5">
                <p className="text-2xl font-black">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-ink/55 dark:text-white/55">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-5 text-sm font-bold text-white transition hover:bg-ocean dark:bg-white dark:text-ink dark:hover:bg-gold"
          >
            <FaGithub aria-hidden />
            View GitHub
          </a>
        </Reveal>
        <Reveal delay={0.08} className="glass-card rounded-lg p-6">
          <div className="grid gap-5">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-ocean dark:text-gold">
                <FiGitCommit aria-hidden />
                Contribution Graph
              </div>
              <div className="mt-4 grid grid-cols-12 gap-1">
                {Array.from({ length: 72 }, (_, index) => (
                  <span
                    key={index}
                    className={`h-4 rounded-[3px] ${
                      index % 7 === 0
                        ? "bg-coral/80"
                        : index % 5 === 0
                          ? "bg-ocean/70"
                          : index % 3 === 0
                            ? "bg-gold/80"
                            : "bg-ink/10 dark:bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-ocean dark:text-gold">
                <FiStar aria-hidden />
                Top Languages
              </div>
              <div className="mt-4 grid gap-3">
                {languageBars.map((language) => (
                  <div key={language.name}>
                    <div className="mb-1 flex justify-between text-sm font-semibold">
                      <span>{language.name}</span>
                      <span>{language.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-ink/10 dark:bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-ocean via-coral to-gold"
                        style={{ width: language.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
