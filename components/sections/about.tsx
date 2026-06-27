import { FiMapPin, FiTarget } from "react-icons/fi";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data";

const strengths = ["Python", "Data Analysis", "Machine Learning", "Visualization", "Problem Solving"];

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="A practical builder with a data-first mindset"
        description="Focused on turning raw datasets into clear insights, useful models, and business-ready stories."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
        <Reveal className="glass-card rounded-lg p-6 sm:p-8">
          <h3 className="text-2xl font-bold">About Me</h3>
          <p className="mt-4 leading-8 text-ink/72 dark:text-white/72">
            Passionate Python Developer with a strong interest in Data Science,
            Machine Learning, advanced analytics, and Data Analytics.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {strengths.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-ocean/10 px-3 py-2 text-sm font-semibold text-ocean dark:bg-white/10 dark:text-gold"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="grid gap-6">
          <div className="glass-card rounded-lg p-6">
            <FiTarget className="text-2xl text-coral" aria-hidden />
            <h3 className="mt-4 text-xl font-bold">Career Goal</h3>
            <p className="mt-3 leading-7 text-ink/70 dark:text-white/70">
              To contribute to impactful projects where data can drive intelligent
              decisions and business growth while continuously expanding my
              expertise in Data Science, analytics, and intelligent systems.
            </p>
          </div>
          <div className="glass-card rounded-lg p-6">
            <FiMapPin className="text-2xl text-ocean dark:text-gold" aria-hidden />
            <h3 className="mt-4 text-xl font-bold">Location</h3>
            <p className="mt-3 text-ink/70 dark:text-white/70">{profile.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
