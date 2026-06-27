import { FiCheckCircle } from "react-icons/fi";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Continuous technical learning"
        description="Credential areas that reinforce practical Python, analytics, machine learning, SQL, and visualization skills."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {certifications.map((certification, index) => (
          <Reveal key={certification} delay={index * 0.04}>
            <article className="glass-card h-full rounded-lg p-5 transition hover:-translate-y-1">
              <FiCheckCircle className="text-2xl text-ocean dark:text-gold" aria-hidden />
              <h3 className="mt-4 text-base font-bold leading-6">{certification}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65 dark:text-white/65">
                Verified learning path with portfolio-ready project application.
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
