import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Portfolio work recruiters can scan quickly"
        description="Each card highlights the problem, tools, outcomes, and technical proof points for data-focused roles."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04}>
            <article className="glass-card group h-full overflow-hidden rounded-lg transition hover:-translate-y-1 hover:shadow-glow">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 leading-7 text-ink/70 dark:text-white/70">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-coral/10 px-3 py-1.5 text-xs font-bold text-coral dark:bg-coral/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-ink/72 dark:text-white/72 sm:grid-cols-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="rounded-md bg-white/50 px-3 py-2 dark:bg-white/5">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md bg-ink px-4 text-sm font-bold text-white transition hover:bg-ocean dark:bg-white dark:text-ink dark:hover:bg-gold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub aria-hidden />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-ink/10 px-4 text-sm font-bold text-ink transition hover:border-ocean/30 hover:text-ocean dark:border-white/10 dark:text-white dark:hover:text-gold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink aria-hidden />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
