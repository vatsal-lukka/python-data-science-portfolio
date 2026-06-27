import { FiAward, FiBookOpen } from "react-icons/fi";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation"
        description="A computer engineering background paired with applied analytics and machine learning practice."
      />
      <Reveal>
        <div className="glass-card rounded-lg p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="grid h-14 w-14 place-items-center rounded-md bg-ocean/10 text-2xl text-ocean dark:bg-white/10 dark:text-gold">
                <FiBookOpen aria-hidden />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Bachelor of Technology</h3>
              <p className="mt-2 text-lg font-semibold text-coral">Computer Engineering</p>
            </div>
            <div className="relative border-l border-ocean/25 pl-6 dark:border-white/15">
              {[
                "Built a strong foundation in programming, algorithms, databases, and software engineering.",
                "Applied Python and statistical thinking to data analysis, visualization, and ML model workflows.",
                "Focused on practical projects that demonstrate business insight, clean code, and communication."
              ].map((item) => (
                <div key={item} className="relative mb-6 last:mb-0">
                  <span className="absolute -left-[31px] top-1 grid h-3 w-3 rounded-full bg-coral" />
                  <p className="leading-7 text-ink/72 dark:text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Data Structures", "Database Systems", "Applied Machine Learning"].map((highlight) => (
              <div
                key={highlight}
                className="rounded-md border border-ink/10 bg-white/55 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <FiAward className="text-coral" aria-hidden />
                <p className="mt-3 text-sm font-bold">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
