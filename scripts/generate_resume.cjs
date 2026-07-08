const fs = require('fs');
const PDFDocument = require('pdfkit');

const data = {
  name: 'Nandesh Murali',
  contact: {
    phone: '+91 7200354665',
    email: 'nandeshcoc3@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nandesh-murali-63824a319',
    github: 'https://github.com/Nandesh25',
  },
  summary:
    'Software Engineering graduate with internship experience developing enterprise AI applications using Angular, TypeScript, Python, FastAPI, and REST APIs. Skilled in full-stack development, SDLC, unit testing, integration testing, CI/CD, Docker, version control, and building scalable AI-powered software solutions.',
  experience: [
    {
      employer: 'ABB India Ltd.',
      duration: 'Feb 2026 – Jul 2026',
      role: 'Software Engineering Intern',
      location: 'Bengaluru, India',
      bullets: [
        'Developed enterprise AI applications using Angular, TypeScript, FastAPI, and REST APIs.',
        'Migrated the enterprise application from Angular 18 to Angular 22 and implemented AI-powered features.',
        'Built reusable Playwright and Python automation frameworks for UI, API, unit, and integration testing.',
        'Created and merged 15+ pull requests using Git, Azure DevOps, version control, and Agile practices.',
        'Performed deployment validation, Docker image verification, CI/CD support, release testing, and SDLC activities across multiple environments.',
      ],
    },
  ],
  skills: {
    languages: 'Python, TypeScript, JavaScript, SQL, C++',
    frontend: 'Angular, HTML, CSS, SCSS, Responsive Web Development',
    backend: 'FastAPI, Flask, REST APIs, JSON',
    ai: 'Generative AI, Gemini API, Playwright, Prompt Engineering',
    testing: 'UI Testing, API Testing, Unit Testing, Integration Testing',
    devops: 'Git, GitHub, Azure DevOps, Docker, CI/CD',
    db: 'MongoDB, MySQL',
  },
  projects: [
    {
      title: 'Asset Health Monitoring System',
      tech: 'Python, Flask, Streamlit, MongoDB, REST APIs',
      desc: 'Predictive asset health monitoring platform with real-time dashboards and equipment health classification.',
    },
    {
      title: 'AI-Based Drone Detection & Tracking System',
      tech: 'YOLOv8, OpenCV, Raspberry Pi 5, Python',
      desc: 'Real-time drone detection and tracking with multimodal sensor fusion and alerts.',
    },
    {
      title: 'VisionAI Multimodal Image Caption Generator',
      tech: 'Gemini Vision API, FastAPI, Python, HTML, CSS, JavaScript',
      desc: 'Multimodal image captioning and scene understanding using Gemini Vision.',
    },
  ],
  education: [
    {
      school: 'B. S. Abdur Rahman Crescent Institute of Science and Technology',
      degree: 'B.Tech in Electronics and Communication Engineering',
      years: '2022 – 2026',
    },
    {
      school: 'Vels Vidyashram, Chennai',
      degree: 'Class XII — CBSE',
      years: '2021 – 2022',
    },
  ],
  achievements: ['First Place – CRESATHON’23 (Intra-College Hackathon) 2023'],
};

// Ensure output directory exists
const outPath = 'public/Nandesh_Murali_Resume.pdf';
const doc = new PDFDocument({autoFirstPage: true, size: 'A4', margin: 50});
const stream = fs.createWriteStream(outPath);

doc.pipe(stream);

doc.font('Helvetica-Bold').fontSize(18).text('Nandesh Murali', {align: 'left'});
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(10).text('Phone: +91 7200354665    Email: nandeshcoc3@gmail.com');
doc.text('LinkedIn: https://www.linkedin.com/in/nandesh-murali-63824a319    GitHub: https://github.com/Nandesh25');
doc.moveDown(0.8);
// Header
doc.font('Helvetica-Bold').fontSize(20).text(data.name, {align: 'left'});
doc.moveDown(0.3);
doc.font('Helvetica').fontSize(10).text(`${data.contact.phone}    |    ${data.contact.email}`);
doc.text(`${data.contact.linkedin}    |    ${data.contact.github}`);
doc.moveDown(0.6);

function section(title) {
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(12).text(title);
  doc.moveDown(0.1);
}

section('Professional Summary');
doc.font('Helvetica').fontSize(11).text(data.summary, {lineGap: 3});

section('Experience');
data.experience.forEach((exp) => {
  doc.font('Helvetica-Bold').fontSize(11).text(`${exp.role} — ${exp.employer}`, {continued: false});
  doc.font('Helvetica').fontSize(10).text(`${exp.duration} | ${exp.location}`);
  doc.moveDown(0.2);
  exp.bullets.forEach((b) => {
    doc.list([b], {bulletIndent: 10});
  });
});

section('Technical Skills');
Object.keys(data.skills).forEach((k) => {
  doc.font('Helvetica-Bold').fontSize(10).text(k.charAt(0).toUpperCase() + k.slice(1) + ': ', {continued: true});
  doc.font('Helvetica').fontSize(10).text(data.skills[k]);
});

section('Projects');
data.projects.forEach((p) => {
  doc.font('Helvetica-Bold').fontSize(11).text(p.title);
  doc.font('Helvetica').fontSize(10).text(p.tech);
  doc.font('Helvetica').fontSize(10).text(p.desc, {lineGap: 2});
  doc.moveDown(0.2);
});

section('Education');
data.education.forEach((edu) => {
  doc.font('Helvetica-Bold').fontSize(11).text(edu.school);
  doc.font('Helvetica').fontSize(10).text(`${edu.degree}    |    ${edu.years}`);
  doc.moveDown(0.2);
});

section('Achievements');
data.achievements.forEach((a) => {
  doc.font('Helvetica').fontSize(10).text('• ' + a);
});

doc.end();

stream.on('finish', () => {
  console.log('PDF written to', outPath);
});
