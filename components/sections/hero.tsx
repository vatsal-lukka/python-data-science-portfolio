"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload, FiMail, FiFolder } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/lib/data";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setRoleIndex((index) => (index + 1) % profile.typingRoles.length),
      2100
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <p className="mb-4 inline-flex rounded-md border border-ocean/20 bg-white/70 px-3 py-2 text-sm font-bold text-ocean shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gold">
            {profile.tagline}
          </p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <div className="mt-4 min-h-10 text-2xl font-bold text-ink/80 dark:text-white/80">
            <span>{profile.title}</span>
            <span className="mx-3 text-ocean dark:text-gold">|</span>
            <motion.span
              key={profile.typingRoles[roleIndex]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="gradient-text"
            >
              {profile.typingRoles[roleIndex]}
            </motion.span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-ink/72 dark:text-white/72">
            {profile.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/resume.pdf" icon={FiDownload} download>
              Resume
            </ButtonLink>
            <ButtonLink href="#projects" icon={FiFolder} variant="secondary">
              View Projects
            </ButtonLink>
            <ButtonLink href="#contact" icon={FiMail} variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 mx-auto w-full max-w-lg"
        >
          <div className="glass-card rounded-lg p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-gradient-to-br from-ocean/20 via-white to-coral/20 dark:from-ocean/20 dark:via-white/5 dark:to-gold/10">
              <Image
                src="/profile.svg"
                alt="Professional profile placeholder"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="glass-card absolute -bottom-6 left-4 right-4 rounded-lg p-4 sm:left-auto sm:right-[-1rem] sm:w-72">
            <p className="text-sm font-bold text-ink dark:text-white">
              Internship-ready portfolio
            </p>
            <p className="mt-1 text-sm text-ink/65 dark:text-white/65">
              Analytics, ML projects, GitHub proof, and recruiter-friendly contact flow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
