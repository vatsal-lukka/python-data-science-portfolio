import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Core tools for data work"
        description="A focused technical stack for analysis, modeling, visualization, and Python-based development."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delay={index * 0.04}>
              <article className="glass-card h-full rounded-lg p-6 transition hover:-translate-y-1 hover:shadow-glow">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-ocean/10 text-xl text-ocean dark:bg-white/10 dark:text-gold">
                  <Icon aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-bold">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-ink/10 bg-white/60 px-3 py-1.5 text-sm font-semibold text-ink/75 dark:border-white/10 dark:bg-white/5 dark:text-white/75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
