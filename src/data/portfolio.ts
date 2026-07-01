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
  FaLeaf,
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
    'Software Engineering Intern with experience in Angular, TypeScript, Python, REST API integration, and AI-powered applications — passionate about frontend development, automation, and enterprise application modernization.',
  email: 'nandeshcoc3@gmail.com',
  phone: '+91 7200354665',
  github: '#',
  linkedin: '#',
  resumeUrl: '/Nandesh_Murali_Resume.pdf',
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
    'Software Engineering Intern with experience in Angular, TypeScript, Python, REST API integration, and AI-powered applications. Skilled in frontend development, automation, testing, enterprise application modernization, and CI/CD workflows.',
  objective:
    'Experienced in Agile development, code reviews, unit testing, Docker image creation, deployment pipeline execution, and application deployment across multiple environments using Git-based version control.',
  highlights: [
    { value: 'Angular 18→20', label: 'Enterprise App Migration' },
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
    duration: 'Feb 2026 – Present',
    responsibilities: [
      'Migrated the MCS AI Assist application from Angular 18 to Angular 20, ensuring compatibility with the latest framework features and improving maintainability.',
      'Developed a Custom Prompt Management feature with create, edit, delete, RBAC, and personalization capabilities.',
      'Implemented Download Transcript functionality for exporting AI conversations.',
      'Performed code reviews and collaborated with cross-functional teams.',
      'Participated in Agile sprint planning and daily stand-ups.',
      'Performed deployment verification, environment validation, and release testing across multiple instances.',
    ],
    technologies: ['Angular', 'TypeScript', 'Python', 'REST APIs', 'RBAC', 'CI/CD', 'Git'],
    achievements: [
      'Built a Python-based AI Response Consistency Validation framework using semantic similarity analysis.',
      'Successfully modernized an enterprise application across two major Angular versions.',
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
    title: 'Indoor Plant Monitoring',
    summary:
      'An IoT-based plant monitoring system enabling real-time environmental monitoring and fungal-risk estimation.',
    problem:
      'Indoor plants need continuous environmental monitoring to prevent fungal risk driven by temperature and humidity.',
    solution:
      'Developed an IoT-based plant monitoring system using ESP32 and DHT22, enabling real-time environmental monitoring and fungal-risk estimation.',
    technologies: ['ESP32', 'DHT22', 'ThingSpeak', 'Python'],
    features: [
      'Real-time environmental monitoring',
      'Fungal-risk estimation',
      'ESP32 + DHT22 sensor integration',
      'Cloud data logging via ThingSpeak',
    ],
    challenges:
      'Reliably capturing sensor data and estimating fungal risk from environmental readings in real time.',
    outcome:
      'Enabled continuous, real-time environmental monitoring with actionable fungal-risk insights.',
    github: '#',
    demo: '#',
    accent: 'from-emerald-500/20 to-teal-500/20',
    icon: FaLeaf,
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
