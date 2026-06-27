import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeading
        eyebrow="Achievements"
        title="Signals of consistency"
        description="A quick snapshot of learning velocity, project activity, and problem-solving practice."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <Reveal key={achievement.label} delay={index * 0.04}>
              <article className="glass-card rounded-lg p-6 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-md bg-gold/18 text-xl text-coral dark:bg-white/10">
                  <Icon aria-hidden />
                </div>
                <p className="mt-5 text-4xl font-black gradient-text">{achievement.value}</p>
                <h3 className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-ink/65 dark:text-white/65">
                  {achievement.label}
                </h3>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
