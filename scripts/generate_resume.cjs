const fs = require('fs');
const PDFDocument = require('pdfkit');

const resumeText = `Nandesh Murali

Phone: +91 7200354665
Email: nandeshcoc3@gmail.com
LinkedIn: https://www.linkedin.com/in/nandesh-murali-63824a319
GitHub: https://github.com/Nandesh25

Professional Summary
Software Engineering graduate with internship experience developing enterprise AI applications using Angular, TypeScript, Python, FastAPI, and REST APIs. Skilled in full-stack development, SDLC, unit testing, integration testing, CI/CD, Docker, version control, and building scalable AI-powered software solutions.

Experience
ABB India Ltd.            Feb 2026 – Jul 2026
Software Engineering Intern          Bengaluru, India
• Developed enterprise AI applications using Angular, TypeScript, FastAPI, and REST APIs.
• Migrated the enterprise application from Angular 18 to Angular 22 and implemented AI-powered features.
• Built reusable Playwright and Python automation frameworks for UI, API, unit, and integration testing.
• Created and merged 15+ pull requests using Git, Azure DevOps, version control, and Agile software development practices.
• Performed deployment validation, Docker image verification, CI/CD support, release testing, and SDLC activities across multiple environments.

Technical Skills
Languages: Python, TypeScript, JavaScript, SQL, C++
Frontend: Angular, HTML, CSS, SCSS, Responsive Web Development
Backend: FastAPI, Flask, REST APIs, JSON
AI & Automation: Generative AI, Gemini API, Playwright, Prompt Engineering
Testing: UI Testing, API Testing, Unit Testing, Integration Testing
DevOps & Tools: Git, GitHub, Azure DevOps, Docker, CI/CD, Version Control
Databases: MongoDB, MySQL
Methodologies: Agile Scrum, Software Development Lifecycle (SDLC)

Projects
Asset Health Monitoring System | Python, Flask, Streamlit, MongoDB, REST APIs
• Developed a predictive asset health monitoring platform using Flask, MongoDB, Streamlit, and REST APIs with real-time dashboards and equipment health classification.

AI-Based Drone Detection & Tracking System | YOLOv8, OpenCV, Raspberry Pi 5, Python
• Built an AI-powered drone detection and tracking system using YOLOv8, OpenCV, and multimodal sensor fusion for autonomous UAV monitoring and real-time alerts.

VisionAI Multimodal Image Caption Generator | Gemini Vision API, FastAPI, Python, HTML, CSS, JavaScript
• Developed a multimodal AI application using Gemini Vision API and FastAPI for image captioning, scene understanding, object detection, and AI-powered visual analysis.

Education
B. S. Abdur Rahman Crescent Institute of Science and Technology      2022 – 2026
Bachelor of Technology (B.Tech) in Electronics and Communication Engineering

Vels Vidyashram, Chennai      2021 – 2022
Central Board of Secondary Education (CBSE) – Class XII

Achievements
First Place – CRESATHON’23 (Intra-College Hackathon) 2023
`;

// Ensure output directory exists
const outPath = 'public/Nandesh_Murali_Resume.pdf';
const doc = new PDFDocument({autoFirstPage: true, size: 'A4', margin: 50});
const stream = fs.createWriteStream(outPath);

doc.pipe(stream);

// Simple formatting: Title
doc.font('Helvetica-Bold').fontSize(18).text('Nandesh Murali', {align: 'left'});
doc.moveDown(0.5);

// Contact info
doc.font('Helvetica').fontSize(10).text('Phone: +91 7200354665    Email: nandeshcoc3@gmail.com');
doc.text('LinkedIn: https://www.linkedin.com/in/nandesh-murali-63824a319    GitHub: https://github.com/Nandesh25');
doc.moveDown(0.8);

// Body text
const paragraphs = resumeText.split('\n\n').slice(1); // skip the first title (we already added it)
paragraphs.forEach((p) => {
  doc.font('Helvetica').fontSize(11).text(p, {align: 'left', lineGap: 2});
  doc.moveDown(0.5);
});

doc.end();

stream.on('finish', () => {
  console.log('PDF written to', outPath);
});
