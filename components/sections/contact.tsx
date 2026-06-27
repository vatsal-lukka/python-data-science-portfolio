"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data";

const contactEndpoint = `https://formsubmit.co/${profile.email}`;

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something useful with data"
        description="Use the form for internship, entry-level, collaboration, or project opportunities."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="glass-card rounded-lg p-6">
          <h3 className="text-2xl font-bold">Connect</h3>
          <p className="mt-3 leading-7 text-ink/70 dark:text-white/70">
            Open to internships and entry-level roles in Data Science, Machine
            Learning, Data Analytics, and Python development.
          </p>
          <div className="mt-6 grid gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring flex items-center gap-3 rounded-md p-3 hover:bg-white/55 dark:hover:bg-white/5"
            >
              <FiMail aria-hidden />
              {profile.email}
            </a>
            <a
              href={profile.phoneHref}
              className="focus-ring flex items-center gap-3 rounded-md p-3 hover:bg-white/55 dark:hover:bg-white/5"
            >
              <FiPhone aria-hidden />
              {profile.phone}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-md p-3 hover:bg-white/55 dark:hover:bg-white/5"
            >
              <FaGithub aria-hidden />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-md p-3 hover:bg-white/55 dark:hover:bg-white/5"
            >
              <FaLinkedin aria-hidden />
              LinkedIn
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="glass-card rounded-lg p-6">
          <form
            action={contactEndpoint}
            method="POST"
            className="grid gap-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="New portfolio contact message"
              suppressHydrationWarning
            />
            <input
              type="hidden"
              name="_template"
              value="table"
              suppressHydrationWarning
            />
            <input
              type="hidden"
              name="_captcha"
              value="false"
              suppressHydrationWarning
            />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/#contact"
              suppressHydrationWarning
            />
            {[
              ["name", "Full Name", "text"],
              ["email", "Email", "email"],
              ["subject", "Subject", "text"]
            ].map(([name, label, type]) => (
              <label key={name} className="grid gap-2 text-sm font-bold">
                {label}
                <input
                  name={name}
                  type={type}
                  required
                  suppressHydrationWarning
                  className="focus-ring min-h-12 rounded-md border border-ink/10 bg-white/70 px-4 text-base font-normal text-ink outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-bold">
              Message
              <textarea
                name="message"
                required
                suppressHydrationWarning
                rows={5}
                className="focus-ring rounded-md border border-ink/10 bg-white/70 px-4 py-3 text-base font-normal text-ink outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </label>
            <button
              type="submit"
              suppressHydrationWarning
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-bold text-white transition hover:bg-ocean dark:bg-white dark:text-ink dark:hover:bg-gold"
            >
              <FiSend aria-hidden />
              Send Message
            </button>
            <p className="text-sm leading-6 text-ink/60 dark:text-white/60">
              Messages are sent to {profile.email}. The first submission may ask
              you to confirm this address by email.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
