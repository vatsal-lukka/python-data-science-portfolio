import type { IconType } from "react-icons";

export type SkillCategory = {
  title: string;
  skills: string[];
  icon: IconType;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
};

export type NavItem = {
  label: string;
  href: string;
};
