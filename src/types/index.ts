import type { IconType } from 'react-icons';

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  location?: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  availability: string;
}

export interface AboutContent {
  summary: string;
  objective: string;
  highlights: Highlight[];
}

export interface Highlight {
  value: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Project {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  challenges: string;
  outcome: string;
  github: string;
  demo: string;
  accent: string;
  icon: IconType;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score?: string;
}

export interface Certification {
  title: string;
  organization: string;
  date?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
}
