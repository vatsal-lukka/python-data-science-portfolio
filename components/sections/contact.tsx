"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data";

const WEB3FORMS_ACCESS_KEY = "90bee5ff-2612-4ca7-a1de-975c6e543d7a";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      WEB3FORMS_ACCESS_KEY
    );

    formData.append(
      "subject",
      "New Portfolio Contact Message"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccess(
          "✅ Message sent successfully!"
        );
        form.reset();
      } else {
        setError(
          result.message ||
            "Something went wrong."
        );
      }
    } catch {
      setError(
        "Unable to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-shell"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something useful with data"
        description="Use the form for internship, entry-level, collaboration, or project opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

        {/* Left Card */}

        <Reveal className="glass-card rounded-lg p-6">

          <h3 className="text-2xl font-bold">
            Connect
          </h3>

          <p className="mt-3 leading-7 text-ink/70 dark:text-white/70">
            Open to internships and entry-level
            roles in Data Science,
            Machine Learning,
            Data Analytics,
            and Python Development.
          </p>

          <div className="mt-6 grid gap-3">

            <a
              href={`mailto:${profile.email}`}
              className="focus-ring flex items-center gap-3 rounded-md p-3 hover:bg-white/55 dark:hover:bg-white/5"
            >
              <FiMail />
              {profile.email}
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-3 rounded-md p-3 hover:bg-white/55 dark:hover:bg-white/5"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-3 rounded-md p-3 hover:bg-white/55 dark:hover:bg-white/5"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

        </Reveal>

        {/* Contact Form */}

        <Reveal
          delay={0.08}
          className="glass-card rounded-lg p-6"
        >

          <form
            onSubmit={handleSubmit}
            className="grid gap-4"
          >

            <label className="grid gap-2 text-sm font-bold">

              Full Name

              <input
                type="text"
                name="name"
                required
                className="focus-ring min-h-12 rounded-md border border-ink/10 bg-white/70 px-4 text-base font-normal text-ink outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
              />

            </label>

            <label className="grid gap-2 text-sm font-bold">

              Email

              <input
                type="email"
                name="email"
                required
                className="focus-ring min-h-12 rounded-md border border-ink/10 bg-white/70 px-4 text-base font-normal text-ink outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
              />

            </label>

            <label className="grid gap-2 text-sm font-bold">

              Subject

              <input
                type="text"
                name="subject"
                required
                className="focus-ring min-h-12 rounded-md border border-ink/10 bg-white/70 px-4 text-base font-normal text-ink outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
              />

            </label>

            <label className="grid gap-2 text-sm font-bold">

              Message

              <textarea
                name="message"
                rows={5}
                required
                className="focus-ring rounded-md border border-ink/10 bg-white/70 px-4 py-3 text-base font-normal text-ink outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
              />

            </label>
                        {success && (
              <div className="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-600 dark:text-green-400">
                {success}
              </div>
            )}

            {error && (
              <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-bold text-white transition hover:bg-ocean disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-ink dark:hover:bg-gold"
            >
              <FiSend />

              {loading ? "Sending..." : "Send Message"}
            </button>

            <p className="text-sm leading-6 text-ink/60 dark:text-white/60">
              Messages will be sent directly to{" "}
              <strong>{profile.email}</strong>.
            </p>

          </form>

        </Reveal>

      </div>

    </section>
  );
}
