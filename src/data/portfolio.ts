import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaRobot,
  FaBrain,
  FaDatabase,
  FaTools,
  FaVial,
  FaGitAlt,
  FaHeartbeat,
  FaHelicopter,
} from 'react-icons/fa';

import type {
  Profile,
  SocialLink,
  NavItem,
  AboutContent,
  SkillCategory,
  ExperienceItem,
  Project,
  EducationItem,
  Certification,
  Achievement,
} from '@/types';

/**
 * Single source of truth for all portfolio content.
 * Every value here is derived strictly from the resume.
 * Placeholder links (LinkedIn / GitHub URLs) use "#" — update them here.
 */

export const profile: Profile = {
  name: 'Nandesh Murali',
  title: 'Software Engineer / AI Engineer',
  tagline: 'Building modern, AI-powered applications.',
  intro:
    'Software Engineering Intern with hands-on experience in enterprise application development, frontend engineering, backend integration, Quality Engineering, and AI-powered software solutions. Experienced in Angular, TypeScript, Python, FastAPI, REST APIs, Playwright, and Azure DevOps. Contributed to Angular framework migration, developed enterprise AI features, built reusable automation frameworks, authored comprehensive QE test suites, and supported CI/CD deployments across multiple environments. Passionate about building scalable software and Generative AI applications.',
  email: 'nandeshcoc3@gmail.com',
  phone: '+91 7200354665',
  github: 'https://github.com/Nandesh25',
  linkedin: 'https://www.linkedin.com/in/nandesh-murali-63824a319',
  resumeUrl: `${import.meta.env.BASE_URL}Nandesh_Murali_Resume.pdf`,
  availability: 'Open to Software / AI Engineering roles',
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
];

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const about: AboutContent = {
  summary:
    'Software Engineering Intern with hands-on experience in enterprise application development, frontend engineering, backend integration, Quality Engineering, and AI-powered software solutions. Experienced in Angular, TypeScript, Python, FastAPI, REST APIs, Playwright, and Azure DevOps. Contributed to Angular framework migration, developed enterprise AI features, built reusable automation frameworks, authored comprehensive QE test suites, and supported CI/CD deployments across multiple environments. Passionate about building scalable software and Generative AI applications.',
  objective:
    'Motivated Software Engineer with hands-on experience in enterprise application development, AI-powered solutions, frontend engineering, backend integration, and automation testing. Seeking a Software Engineer role where I can leverage my expertise in Angular, Python, FastAPI, Playwright, and Generative AI to build scalable, high-quality software solutions while continuously learning and contributing to innovative technologies.',
  highlights: [
    { value: 'Angular 18 - 22', label: 'ABB MCS Ai Assist' },
    { value: '3+', label: 'End-to-End Projects' },
    { value: '4', label: 'Professional Certifications' },
    { value: '1st', label: 'Place — CRESATHON\u201923' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    skills: ['Python', 'SQL', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    icon: FaLaptopCode,
    skills: ['Angular', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: ['REST APIs', 'API Integration', 'FastAPI', 'Flask'],
  },
  {
    title: 'AI / GenAI',
    icon: FaRobot,
    skills: ['AI-Powered Applications', 'Semantic Similarity Analysis', 'Prompt Management'],
  },
  {
    title: 'Machine Learning',
    icon: FaBrain,
    skills: ['YOLOv8', 'OpenCV', 'Computer Vision'],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'DevOps',
    icon: FaGitAlt,
    skills: ['Docker', 'CI/CD Pipelines', 'Git-based Version Control'],
  },
  {
    title: 'Testing & QA',
    icon: FaVial,
    skills: [
      'Python Automation',
      'Functional Testing',
      'Unit Testing',
      'Test Planning',
      'UI Automation',
    ],
  },
  {
    title: 'Tools',
    icon: FaTools,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'GitHub Copilot', 'DBeaver'],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'ABB India Ltd.',
    role: 'Software Engineering Intern',
    duration: 'Feb 2026 – July 2026',
    responsibilities: [
      'Contributed across Quality Engineering, Frontend Development, Backend Integration, Angular Migration, Deployment, and UI Automation for the enterprise MCS AI Assist application.',
      'Raised 15+ Pull Requests covering feature development, framework migration, bug fixes, automation enhancements, deployment support, and code improvements.',
      'Participated in migrating the MCS AI Assist application from Angular 18 to Angular 22, ensuring framework compatibility and application stability.',
      'Developed enterprise AI features including Custom Prompt Management with RBAC, personalization, and CRUD functionality.',
      'Implemented Download Transcript functionality for exporting AI conversations.',
      'Authored comprehensive QE test suites for 5 major AI Assist features, covering UI workflows, API validation, and regression scenarios.',
      'Built reusable Playwright UI automation and Python API automation frameworks, reducing manual testing effort.',
      'Integrated and validated FastAPI and REST APIs using Postman and Azure DevOps Test Plans.',
      'Performed deployment verification, environment validation, Docker image verification, and release testing across multiple environments.',
      'Collaborated in Agile Scrum teams, participated in sprint planning, code reviews, and daily stand-ups.',
    ],
    technologies: [
      'Angular 22',
      'TypeScript',
      'Python',
      'Playwright',
      'FastAPI',
      'REST APIs',
      'RBAC',
      'Postman',
      'Azure DevOps',
      'Docker',
      'Git',
    ],
    achievements: [
      'Delivered impact across engineering, quality, automation, migration, and deployment for an enterprise AI application.',
      'Strengthened release confidence through reusable automation and end-to-end API and UI validation.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Asset Health Monitoring System',
    summary:
      'A real-time asset monitoring solution with health classification and visualization dashboards.',
    problem:
      'Organizations lacked a real-time way to monitor asset health and surface degradation before failures occurred.',
    solution:
      'Developed a real-time asset monitoring solution using Flask, Streamlit, MongoDB, and Python, with asset health classification and visualization dashboards.',
    technologies: ['Python', 'Flask', 'MongoDB', 'Streamlit', 'REST APIs'],
    features: [
      'Real-time asset monitoring',
      'Asset health classification',
      'Interactive visualization dashboards',
      'REST API-driven data flow',
    ],
    challenges:
      'Designing a responsive real-time pipeline and reliable health classification across continuously streaming asset data.',
    outcome:
      'Delivered an end-to-end monitoring platform enabling real-time health insights through interactive dashboards.',
    github: '#',
    demo: '#',
    accent: 'from-rose-500/20 to-orange-500/20',
    icon: FaHeartbeat,
  },
  {
    title: 'AI-Based Drone Detection & Tracking System',
    summary:
      'A real-time drone detection and tracking system with multimodal sensor fusion and autonomous tracking.',
    problem:
      'Detecting and tracking drones in real time requires low-latency inference and reliable multimodal sensing on edge hardware.',
    solution:
      'Developed a real-time drone detection and tracking system implementing multimodal sensor fusion, autonomous tracking, live video streaming, and alert generation.',
    technologies: ['YOLOv8', 'OpenCV', 'Raspberry Pi 5', 'Python'],
    features: [
      'Real-time drone detection',
      'Multimodal sensor fusion',
      'Autonomous tracking',
      'Live video streaming & alert generation',
    ],
    challenges:
      'Achieving low-latency detection and stable autonomous tracking on resource-constrained edge hardware (Raspberry Pi 5).',
    outcome:
      'Built a functional real-time detection and tracking pipeline with live streaming and automated alerts.',
    github: '#',
    demo: '#',
    accent: 'from-cyan-500/20 to-blue-500/20',
    icon: FaHelicopter,
  },
  {
    title: 'AI Image Caption Generator',
    summary:
      'A multimodal AI application using Gemini Vision to generate intelligent image descriptions and contextual captions.',
    problem:
      'Generating rich, contextual image descriptions requires combining vision understanding with natural language output in a usable interface.',
    solution:
      'Built a multimodal AI application using Gemini Vision and integrated image upload, AI inference, and a responsive frontend with REST API communication.',
    technologies: ['Gemini Vision', 'Python', 'REST APIs', 'Frontend'],
    features: [
      'Intelligent image descriptions',
      'Scene summaries and object detection',
      'Contextual caption generation',
      'Image upload and AI inference workflow',
    ],
    challenges:
      'Designing reliable multimodal inference flows while maintaining responsive user experience and clear REST-based communication.',
    outcome:
      'Delivered an end-to-end AI captioning app that turns uploaded images into high-quality, context-aware descriptions.',
    github: '#',
    demo: '#',
    accent: 'from-emerald-500/20 to-teal-500/20',
    icon: FaRobot,
  },
];

export const education: EducationItem[] = [
  {
    degree: 'B.Tech — Electronics & Communication Engineering (ECE)',
    institution: 'B.S. Abdur Rahman Crescent Institute',
    duration: '2022 – 2026',
  },
  {
    degree: '12th — CBSE',
    institution: 'Vels Vidyashram',
    duration: '2021 – 2022',
  },
  {
    degree: '10th — CBSE',
    institution: 'Vels Vidyashram',
    duration: '2019 – 2020',
  },
];

export const certifications: Certification[] = [
  { title: 'Data Analytics with Python', organization: 'NPTEL' },
  { title: 'Introduction to Industry 4.0 and Industrial Internet of Things', organization: 'NPTEL' },
  { title: 'Computer Vision', organization: 'NPTEL' },
  { title: 'Cloud Computing Fundamentals', organization: 'Udemy' },
];

export const achievements: Achievement[] = [
  {
    title: "CRESATHON'23 — First Place",
    description: 'Secured First Place in CRESATHON\u201923, an intra-college hackathon.',
    date: '2023',
  },
];
