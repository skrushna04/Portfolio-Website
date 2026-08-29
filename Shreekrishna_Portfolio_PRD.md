# Product Requirements Document (PRD)
## Personal Portfolio Website — Shreekrishna Gajanan Patil

**Document type:** Master PRD + Content Specification + Technical Implementation Requirements  
**Primary purpose:** Build a professional AI/ML-focused personal portfolio website suitable for recruiters, hiring managers, interviewers, and technical reviewers.  
**Source of truth:** User-provided resume (`shreekrushnai.pdf`).  
**Important:** Do not invent education, experience, project metrics, links, certifications, technologies, or achievements that are not supported by the resume.

---

# 1. Product Overview

Create a modern, responsive personal portfolio website for **Shreekrishna Gajanan Patil**, positioned as an **AI / Machine Learning Engineer (Fresher)**.

The website should communicate three major strengths:

1. AI/ML and NLP project experience
2. Computer Engineering academic background
3. Practical software/application development experience

The portfolio must be easy to scan in 30–60 seconds and should provide deeper project and technical information for users who want to learn more.

---

# 2. Target Audience

### Primary
- Recruiters
- HR professionals
- AI/ML hiring managers
- Software engineering hiring managers
- Internship coordinators

### Secondary
- Technical interviewers
- College faculty
- Developers and engineers
- Potential collaborators

---

# 3. Core Product Goals

The website must:

- Present Shreekrishna as an AI/ML-focused fresher.
- Clearly showcase machine learning, NLP, data processing, and classification skills.
- Highlight the strongest projects.
- Present education and internship experience clearly.
- Surface the research publication.
- Provide professional contact and profile links.
- Be responsive on desktop, tablet, and mobile.
- Have a clean, modern, professional visual identity.
- Load quickly and use accessible semantic HTML.
- Be easy to maintain and extend.

---

# 4. Source-of-Truth Personal Information

## Identity

**Name:** Shreekrishna Gajanan Patil

**Professional title:** AI / Machine Learning Engineer (Fresher)

**Phone:** +91-9322372250

**Email:** vpatil2752004@gmail.com

**LinkedIn:** linkedin.com/in/krushna-patil

## Professional Summary

AI/ML-focused Computer Engineering undergraduate with hands-on experience in machine learning, data mining, and NLP-based projects. Strong foundation in Python, data preprocessing, feature extraction, and classification models. Experienced in building real-world ML applications, analyzing datasets, and evaluating model performance. Passionate about applying AI techniques to solve practical problems and continuously upskilling in the AI/ML domain.

---

# 5. Website Information Architecture

Recommended navigation:

- Home
- About
- Skills
- Projects
- Experience
- Education
- Publication
- Certifications
- Contact

The navigation should remain simple. Avoid unnecessary pages unless content grows later.

---

# 6. Home / Hero Section

## Required content

Display:

**Shreekrishna Gajanan Patil**

**AI / Machine Learning Engineer (Fresher)**

A concise version of the professional positioning:

> AI/ML-focused Computer Engineering undergraduate building practical solutions with machine learning, NLP, data processing, and software development.

## Primary CTAs

- View Projects
- Contact Me

## Secondary CTA

- Download Resume

The resume download button should only be enabled when an actual resume file is supplied to the website project.

## Social links

- LinkedIn
- Email
- GitHub only if a GitHub URL is later supplied

Do not fabricate missing social URLs.

---

# 7. About Section

Create a concise professional story based strictly on the resume.

### Content themes

- Computer Engineering undergraduate
- AI/ML focus
- Machine learning and NLP experience
- Data preprocessing and feature extraction
- Classification and model evaluation
- Practical software/application development
- Interest in solving real-world problems with AI

Avoid exaggerated claims such as:
- "expert"
- "industry-leading"
- "10x engineer"
- "AI specialist with years of experience"

unless the user later provides evidence supporting them.

---

# 8. Skills Section

Organize skills into visual categories.

## Programming & Data

- Python
- Java
- C
- C++
- NumPy
- Pandas
- Matplotlib

## Machine Learning

- Supervised Learning
- Unsupervised Learning
- Classification
- Regression
- Feature Engineering
- Model Evaluation

## Natural Language Processing

- Text Preprocessing
- Tokenization
- Bag of Words (BoW)
- TF-IDF
- Text Classification

## Databases & Tools

- MySQL
- MongoDB
- Jupyter Notebook
- Git
- VS Code

## Additional Exposure

- REST APIs
- Android Development (Basic)
- Problem Solving
- Debugging

### UI requirement

Use grouped skill cards/chips rather than a large wall of text.

Do not use fake percentage skill bars such as "Python 95%" because the resume does not provide proficiency measurements.

---

# 9. Projects Section

Projects are a major portfolio feature.

Each project card should contain:

- Project title
- Date, when available
- Category
- Short description
- Key contributions
- Technologies/skills explicitly supported by the resume
- Optional GitHub link if later supplied
- Optional live demo if later supplied

---

## Project 1 — Online Terrorism Detector Using Machine Learning (NLP)

**Date:** Jul 2025 – Dec 2025

### Description

An NLP-based machine learning system designed to identify terrorism-related content from online text.

### Key contributions

- Performed data preprocessing.
- Applied text cleaning.
- Used tokenization.
- Performed feature extraction using TF-IDF.
- Implemented classification algorithms.
- Evaluated model performance using accuracy and other evaluation metrics.
- Applied AI techniques to a real-world content moderation and security use case.

### Technology/skill tags

- Machine Learning
- NLP
- Python
- Text Preprocessing
- Tokenization
- TF-IDF
- Classification
- Model Evaluation

Only display technologies that are explicitly supported by the resume.

---

## Project 2 — Bus Tracking Application

### Description

A real-time bus tracking system using GPS and database connectivity.

### Key contributions

- Designed a real-time bus tracking system.
- Worked with GPS data.
- Implemented backend logic using Java and MySQL.
- Worked with data handling.
- Implemented/understood real-time updates.
- Worked with system integration.

### Technology/skill tags

- Java
- MySQL
- GPS
- Database Connectivity
- Backend Logic
- Real-Time Updates
- System Integration

Do not add React, Node.js, Firebase, Android, APIs, or other technologies to this project unless the user later confirms them.

---

## Project 3 — Agriculture Farm Management System

### Description

An Android-based platform connecting farmers directly with customers.

### Key contributions

- Developed an Android-based platform.
- Connected farmers and customers through the application.
- Managed data storage and retrieval using MySQL.
- Built understanding of data-driven application design.

### Technology/skill tags

- Android
- MySQL
- Data Storage
- Data Retrieval
- Application Development

---

# 10. Internship / Experience Section

## Mountreach Solutions Pvt. Ltd., Amravati

**Role:** Android Development Intern

**Duration:** Jul 2022 – Aug 2022

### Responsibilities / learning outcomes

- Worked on application development.
- Performed debugging using Android Studio.
- Understood backend connectivity.
- Worked with data flow and system logic.
- Gained exposure to a real-world software development lifecycle.
- Developed problem-solving experience.

### UI recommendation

Use a timeline/card component showing:

Company → Role → Duration → Responsibilities

Do not add an employer logo unless an official logo asset is supplied or verified.

---

# 11. Education Section

Use a vertical timeline.

## Keystone School of Engineering, Pune

**Degree:** Bachelor of Engineering – Computer Engineering  
**Duration:** 2023 – 2026

## Government Polytechnic, Murtizapur

**Degree:** Diploma – Information Technology  
**Duration:** 2020 – 2023  
**Score:** 80%

## 10th Standard

**Year:** 2020  
**Score:** 78.90%

Do not invent CGPA, university, board, grades, or subjects not included in the resume.

---

# 12. Publication Section

## Online Terrorism Detector Using Data Mining

**Published:** 15 Nov 2025

### Description

Research focused on machine learning and NLP techniques for text classification. The work demonstrates analytical thinking, experimentation, and model evaluation skills.

### UI

Present this as a featured research/publication card.

Possible fields:

- Publication title
- Publication date
- Research area
- Short description
- Publication link — only if the user later provides a valid URL

Do not invent a journal name, conference name, DOI, publisher, or paper URL.

---

# 13. Certifications Section

The resume lists:

- Industrial Training Certificate – Android Development
- Full Stack Development

Do not invent issuing organizations, dates, credential IDs, or verification URLs.

---

# 14. Languages Section

Display:

- Marathi
- Hindi
- English

Avoid assigning proficiency percentages unless the user provides them.

---

# 15. Contact Section

Primary contact information:

**Email:** vpatil2752004@gmail.com  
**Phone:** +91-9322372250  
**LinkedIn:** linkedin.com/in/krushna-patil

### Contact form

A contact form may include:

- Name
- Email
- Message
- Submit

The form should not pretend to send messages unless a real backend/email service is configured.

For the first version, use either:
1. a mailto-based workflow, or
2. a clearly documented placeholder integration.

---

# 16. Footer

Footer should contain:

- Shreekrishna Gajanan Patil
- AI / Machine Learning Engineer (Fresher)
- LinkedIn
- Email
- Copyright notice

Example:

> © 2026 Shreekrishna Gajanan Patil. All rights reserved.

---

# 17. Visual Design Requirements

## Overall style

Recommended direction:

**Modern AI/ML developer portfolio**

Visual characteristics:

- Clean
- Minimal
- Professional
- Modern
- Technical
- Recruiter-friendly
- Subtle animation
- Strong typography
- High readability

Avoid excessive:
- Neon effects
- 3D animations
- Particle overload
- Huge gradients
- Distracting background animations
- Unnecessary loading screens

## Color system

Use a restrained professional palette. Prefer:
- dark or neutral base
- one primary accent
- one secondary accent
- high-contrast text

The exact colors can be selected during implementation, but the design should remain professional rather than gaming-oriented.

---

# 18. UX Requirements

## Responsive design

The website must work on:

- Desktop
- Laptop
- Tablet
- Mobile

## Navigation

Desktop:
- Horizontal navigation

Mobile:
- Hamburger/menu navigation

## Scrolling

Use smooth scrolling for internal sections where appropriate.

## Interaction

Use subtle hover effects for:

- Project cards
- Skill cards
- Buttons
- Social links

Animations must not reduce usability.

---

# 19. Accessibility Requirements

The implementation must include:

- Semantic HTML
- Proper heading hierarchy
- Descriptive button/link text
- Keyboard accessibility
- Visible focus states
- Sufficient text/background contrast
- Alt text for meaningful images
- Reduced-motion consideration

Do not make important information dependent only on animation.

---

# 20. SEO Requirements

Use:

### Page title

`Shreekrishna Gajanan Patil | AI / Machine Learning Engineer`

### Meta description

`Portfolio of Shreekrishna Gajanan Patil, an AI/ML-focused Computer Engineering undergraduate with experience in machine learning, NLP, data processing, and software development.`

Use appropriate:

- `<title>`
- `<meta name="description">`
- Open Graph metadata
- Semantic headings

Do not add fake keywords or misleading claims.

---

# 21. Performance Requirements

Target:

- Fast initial load
- Optimized images
- Lazy loading for non-critical images
- Minimized unnecessary JavaScript
- No unnecessary third-party libraries
- Responsive layout without layout shifts

The site should remain lightweight.

---

# 22. Technical Architecture

Antigravity should select a maintainable modern frontend architecture.

Recommended baseline:

- HTML5
- CSS3
- JavaScript

A framework such as React may be used if it improves maintainability, but do not add unnecessary complexity.

If React is selected:

Suggested structure:

```text
src/
  components/
    Navbar
    Hero
    About
    Skills
    Projects
    Experience
    Education
    Publication
    Certifications
    Contact
    Footer

  data/
    portfolio.js

  assets/
    images/
    resume/

  App
  main
```

Keep portfolio content in a structured data file where practical so it can be updated without editing every component.

---

# 23. Content Data Model

Use a structure similar to:

```text
profile
  name
  title
  phone
  email
  linkedin
  summary

skills
  programmingAndData[]
  machineLearning[]
  nlp[]
  databasesAndTools[]
  additionalExposure[]

projects[]
  title
  date
  description
  contributions[]
  tags[]
  github
  demo

experience[]
  company
  location
  role
  duration
  responsibilities[]

education[]
  institution
  location
  degree
  duration
  score

publication[]
  title
  date
  description
  url

certifications[]
languages[]
```

Empty optional URLs should not render as broken links.

---

# 24. Project Card UX

Each project card should have:

1. Project number or category
2. Project name
3. One-line description
4. 3–6 key technology tags
5. Short list of contributions
6. "View Details" or expandable interaction

If no GitHub/live-demo URL exists, do not show fake buttons.

---

# 25. Resume Integration

Provide a **Download Resume** CTA.

Implementation requirement:

- Use the user's actual resume file.
- Give it a clean filename such as `Shreekrishna_Gajanan_Patil_Resume.pdf`.
- Ensure the link works after deployment.
- Do not create a fake resume URL.

---

# 26. Security & Privacy

Do not expose unnecessary personal information.

Required public information can include:

- Name
- Professional email
- Professional phone
- LinkedIn

Avoid exposing:
- private credentials
- API keys
- personal documents other than intended resume
- internal configuration
- passwords

Never commit secrets to source control.

---

# 27. Functional Acceptance Criteria

The website is complete when:

- [ ] Home section clearly identifies Shreekrishna.
- [ ] Professional title is visible.
- [ ] About section reflects the resume accurately.
- [ ] All major skills from the resume are categorized.
- [ ] Three projects are displayed.
- [ ] Project descriptions match the resume.
- [ ] Internship is displayed.
- [ ] Education is displayed.
- [ ] Publication is displayed.
- [ ] Certifications are displayed.
- [ ] Languages are displayed.
- [ ] Contact information is displayed.
- [ ] LinkedIn link works.
- [ ] Email link works.
- [ ] Resume download works when the file is included.
- [ ] No broken links are present.
- [ ] No invented credentials or achievements are displayed.
- [ ] Mobile layout works.
- [ ] Desktop layout works.
- [ ] Keyboard navigation works.
- [ ] Animations do not block content.
- [ ] Website has a professional visual appearance.
- [ ] Content is easy for recruiters to scan.

---

# 28. Content Accuracy Rules for Antigravity

These rules are mandatory.

### Rule 1 — Resume is the source of truth

Do not infer missing information as fact.

### Rule 2 — Do not invent links

GitHub, project demo, publication URL, certification verification links, etc. must only be added when supplied.

### Rule 3 — Do not invent metrics

Do not claim:
- 95% accuracy
- X users
- X% improvement
- X dataset records
- X milliseconds latency

unless the user provides those numbers.

### Rule 4 — Do not overstate expertise

Use "foundation", "experience", "exposure", and "hands-on experience" where appropriate.

### Rule 5 — Preserve technical terminology

Keep terms such as:
- TF-IDF
- Bag of Words
- Tokenization
- Feature Engineering
- Classification
- Model Evaluation
- MySQL
- MongoDB

### Rule 6 — No fake testimonials

Do not create testimonials.

### Rule 7 — No fake experience

Do not convert academic projects into professional employment experience.

---

# 29. Recommended Homepage Flow

```text
------------------------------------------------
NAVBAR
Home | About | Skills | Projects | Experience
Education | Publication | Contact
------------------------------------------------

HERO
Shreekrishna Gajanan Patil
AI / Machine Learning Engineer (Fresher)

Short professional statement

[View Projects] [Contact Me]

LinkedIn | Email
------------------------------------------------

ABOUT
Professional summary
------------------------------------------------

SKILLS
Programming & Data
Machine Learning
NLP
Databases & Tools
Additional Exposure
------------------------------------------------

FEATURED PROJECTS
1. Online Terrorism Detector
2. Bus Tracking Application
3. Agriculture Farm Management System
------------------------------------------------

EXPERIENCE
Mountreach Solutions Pvt. Ltd.
Android Development Intern
------------------------------------------------

EDUCATION
B.E. Computer Engineering
Diploma IT
10th
------------------------------------------------

PUBLICATION
Online Terrorism Detector Using Data Mining
------------------------------------------------

CERTIFICATIONS
Android Development
Full Stack Development
------------------------------------------------

LANGUAGES
Marathi | Hindi | English
------------------------------------------------

CONTACT
Email | Phone | LinkedIn
------------------------------------------------

FOOTER
------------------------------------------------
```

---

# 30. Future Enhancements

These are NOT required for version 1.

Potential future additions:

- GitHub project integration
- Live project demos
- Blog/articles
- AI/ML notebooks
- Kaggle profile
- LeetCode profile
- Detailed project case studies
- Skills filtering
- Dark/light mode
- Downloadable project reports
- Publication DOI/link
- Certification verification links
- Contact form backend
- Analytics

Only implement these after the necessary links/data are provided.

---

# 31. Antigravity Implementation Prompt

Use the following as the implementation instruction:

> Build a production-quality responsive personal portfolio website for Shreekrishna Gajanan Patil using this PRD as the single product specification.
>
> The portfolio is for an AI/ML-focused Computer Engineering fresher. Prioritize recruiter readability, professional presentation, accessibility, responsive design, performance, and accurate content.
>
> Implement the complete information architecture: Home, About, Skills, Projects, Experience, Education, Publication, Certifications, Languages, Contact, and Footer.
>
> Use only the facts and technologies specified in this PRD. Do not invent project metrics, GitHub URLs, live demos, certification issuers, publication URLs, employers, universities, technologies, or achievements.
>
> Build reusable components and keep content separated from presentation where practical.
>
> Ensure the site works on desktop, tablet, and mobile.
>
> Add subtle professional animations but never let animation interfere with content or accessibility.
>
> Use semantic HTML, accessible controls, keyboard navigation, responsive layouts, SEO metadata, optimized assets, and clean code.
>
> Include a resume download button only when the supplied resume file is actually present.
>
> Before finalizing, run a content accuracy review against this PRD and remove any unsupported claims.

---

# 32. Definition of Done

The portfolio is considered production-ready when:

1. All required sections are implemented.
2. Content exactly reflects the approved source information.
3. No unsupported claims appear.
4. All navigation works.
5. Contact links work.
6. Resume download works if the resume asset is included.
7. Mobile and desktop layouts are polished.
8. Accessibility basics pass review.
9. SEO metadata is present.
10. No console errors remain.
11. No broken images or links remain.
12. The codebase is organized and maintainable.
13. The visual design looks professional enough for a job application.
14. A recruiter can understand the candidate's profile and strongest projects within approximately one minute.

---

# Appendix A — Resume Facts Used

The PRD was derived from the supplied resume.

- Name: Shreekrishna Gajanan Patil
- Title: AI / Machine Learning Engineer (Fresher)
- Email: vpatil2752004@gmail.com
- Phone: +91-9322372250
- LinkedIn: linkedin.com/in/krushna-patil
- Education: B.E. Computer Engineering, Keystone School of Engineering, Pune, 2023–2026
- Diploma: Information Technology, Government Polytechnic, Murtizapur, 2020–2023, 80%
- 10th Standard: 2020, 78.90%
- Internship: Mountreach Solutions Pvt. Ltd., Amravati, Android Development Intern, Jul 2022–Aug 2022
- Projects: Online Terrorism Detector Using Machine Learning (NLP), Bus Tracking Application, Agriculture Farm Management System
- Publication: Online Terrorism Detector Using Data Mining, published 15 Nov 2025
- Certifications: Industrial Training Certificate – Android Development; Full Stack Development
- Languages: Marathi, Hindi, English

