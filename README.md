# Shreekrishna Gajanan Patil — AI / Machine Learning Engineer Portfolio

A modern, responsive, high-performance personal portfolio website built for **Shreekrishna Gajanan Patil**, positioned as an **AI / Machine Learning Engineer (Fresher)**.

---

## 🌟 Key Features

- **Recruiter-Focused Hierarchy:** Easy-to-scan 30–60 second overview of candidate strengths, skills, projects, and contact info.
- **Strict Content Accuracy:** 100% compliant with candidate resume. Zero fabricated metrics, fake skill bars, or unverified links.
- **Flagship AI/ML Projects:** Clear presentation of NLP text moderation (*Online Terrorism Detector*), real-time systems (*Bus Tracking Application*), and mobile applications (*Agriculture Farm Management System*).
- **Interactive Modals:** Detailed project contributions accessible via modal dialogs.
- **Functional Resume Download:** Integrated direct resume download CTA (`Shreekrishna_Gajanan_Patil_Resume.pdf`).
- **Responsive & Accessible:** Built with clean mobile drawer navigation, semantic HTML5, focus indicators, and reduced-motion support.
- **SEO Ready:** Page metadata, OpenGraph tags, and Schema.org JSON-LD Person structured data included.

---

## 📁 Project Structure

```text
Portfolio/
├── assets/
│   └── resume.pdf                           # Candidate resume PDF copy
├── css/
│   └── styles.css                           # Main stylesheet (Dark AI/ML developer theme, CSS variables)
├── js/
│   ├── portfolioData.js                     # Single Source of Truth candidate data object
│   └── main.js                              # Interactive DOM hydration, scrollspy, modal & form controller
├── public/
│   └── Shreekrishna_Gajanan_Patil_Resume.pdf      # Public downloadable resume asset
├── index.html                               # Semantic HTML5 root layout
├── README.md                                # Project documentation
└── Shreekrishna_Portfolio_PRD.md            # Master PRD specification
```

---

## 🚀 How to Run Locally

Since the project uses pure HTML5, CSS3, and JavaScript, it can be served using any standard local HTTP server:

### Option 1: Python HTTP Server (Recommended)
```bash
python -m http.server 8000
```
Then open `http://localhost:8000/index.html` in your web browser.

### Option 2: VS Code Live Server
Right-click `index.html` in VS Code and select **Open with Live Server**.

---

## 🛠️ Updating Candidate Content

To update skills, project details, certifications, or contact info, simply modify `js/portfolioData.js`. All UI sections automatically hydrate from this file.

```javascript
// Example: Adding a project link when available in the future
projects: [
  {
    id: "project-1",
    // ...
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  }
]
```

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages
1. Push the repository to GitHub.
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**.

### Deploy to Netlify / Vercel
Simply import the repository into Netlify or Vercel with build settings:
- **Build Command:** *(leave empty)*
- **Publish Directory:** `.` (root)

---

## 📄 License & Attribution

© 2026 Shreekrishna Gajanan Patil. All rights reserved.
