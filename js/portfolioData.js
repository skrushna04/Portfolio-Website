/**
 * Shreekrishna Gajanan Patil - Personal Portfolio Data
 * Single Source of Truth matching Shreekrishna_Portfolio_PRD.md strictly
 */

const portfolioData = {
  profile: {
    name: "Shreekrishna Gajanan Patil",
    title: "AI / Machine Learning Engineer (Fresher)",
    shortBio: "AI/ML-focused Computer Engineering undergraduate building practical solutions with machine learning, NLP, data processing, and software development.",
    summary: "AI/ML-focused Computer Engineering undergraduate with hands-on experience in machine learning, data mining, and NLP-based projects. Strong foundation in Python, data preprocessing, feature extraction, and classification models. Experienced in building real-world ML applications, analyzing datasets, and evaluating model performance. Passionate about applying AI techniques to solve practical problems and continuously upskilling in the AI/ML domain.",
    email: "vpatil2752004@gmail.com",
    phone: "+91-9322372250",
    linkedin: "https://linkedin.com/in/krushna-patil",
    linkedinDisplay: "linkedin.com/in/krushna-patil",
    resumeUrl: "./assets/Shreekrishna_Gajanan_Patil_Resume.pdf",
    location: "Pune / Amravati, Maharashtra, India"
  },

  skills: [
    {
      category: "Programming & Data",
      icon: "code",
      skills: ["Python", "Java", "C", "C++", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      category: "Machine Learning",
      icon: "cpu",
      skills: ["Supervised Learning", "Unsupervised Learning", "Classification", "Regression", "Feature Engineering", "Model Evaluation"]
    },
    {
      category: "Natural Language Processing",
      icon: "file-text",
      skills: ["Text Preprocessing", "Tokenization", "Bag of Words (BoW)", "TF-IDF", "Text Classification"]
    },
    {
      category: "Databases & Tools",
      icon: "database",
      skills: ["MySQL", "MongoDB", "Jupyter Notebook", "Git", "VS Code"]
    },
    {
      category: "Additional Exposure",
      icon: "layers",
      skills: ["REST APIs", "Android Development (Basic)", "Problem Solving", "Debugging"]
    }
  ],

  projects: [
    {
      id: "project-1",
      number: "01",
      title: "Online Terrorism Detector Using Machine Learning (NLP)",
      date: "Jul 2025 – Dec 2025",
      category: "AI / Machine Learning & NLP",
      shortDescription: "An NLP-based machine learning system designed to identify terrorism-related content from online text.",
      contributions: [
        "Performed data preprocessing.",
        "Applied text cleaning.",
        "Used tokenization.",
        "Performed feature extraction using TF-IDF.",
        "Implemented classification algorithms.",
        "Evaluated model performance using accuracy and other evaluation metrics.",
        "Applied AI techniques to a real-world content moderation and security use case."
      ],
      tags: [
        "Machine Learning",
        "NLP",
        "Python",
        "Text Preprocessing",
        "Tokenization",
        "TF-IDF",
        "Classification",
        "Model Evaluation"
      ]
    },
    {
      id: "project-2",
      number: "02",
      title: "Bus Tracking Application",
      date: "",
      category: "Database & Systems",
      shortDescription: "A real-time bus tracking system using GPS and database connectivity.",
      contributions: [
        "Designed a real-time bus tracking system.",
        "Worked with GPS data.",
        "Implemented backend logic using Java and MySQL.",
        "Worked with data handling.",
        "Implemented/understood real-time updates.",
        "Worked with system integration."
      ],
      tags: [
        "Java",
        "MySQL",
        "GPS",
        "Database Connectivity",
        "Backend Logic",
        "Real-Time Updates",
        "System Integration"
      ]
    },
    {
      id: "project-3",
      number: "03",
      title: "Agriculture Farm Management System",
      date: "",
      category: "Application Development",
      shortDescription: "An Android-based platform connecting farmers directly with customers.",
      contributions: [
        "Developed an Android-based platform.",
        "Connected farmers and customers through the application.",
        "Managed data storage and retrieval using MySQL.",
        "Built understanding of data-driven application design."
      ],
      tags: [
        "Android",
        "MySQL",
        "Data Storage",
        "Data Retrieval",
        "Application Development"
      ]
    }
  ],

  experience: [
    {
      company: "Mountreach Solutions Pvt. Ltd., Amravati",
      role: "Android Development Intern",
      duration: "Jul 2022 – Aug 2022",
      responsibilities: [
        "Worked on application development.",
        "Performed debugging using Android Studio.",
        "Understood backend connectivity.",
        "Worked with data flow and system logic.",
        "Gained exposure to a real-world software development lifecycle.",
        "Developed problem-solving experience."
      ]
    }
  ],

  education: [
    {
      institution: "Keystone School of Engineering, Pune",
      degree: "Bachelor of Engineering – Computer Engineering",
      duration: "2023 – 2026",
      score: ""
    },
    {
      institution: "Government Polytechnic, Murtizapur",
      degree: "Diploma – Information Technology",
      duration: "2020 – 2023",
      score: "80%"
    },
    {
      institution: "10th Standard",
      degree: "Secondary School Certificate",
      duration: "2020",
      score: "78.90%"
    }
  ],

  publication: {
    title: "Online Terrorism Detector Using Data Mining",
    date: "Published 15 Nov 2025",
    description: "Research focused on machine learning and NLP techniques for text classification. The work demonstrates analytical thinking, experimentation, and model evaluation skills."
  },

  certifications: [
    "Industrial Training Certificate – Android Development",
    "Full Stack Development"
  ],

  languages: [
    "Marathi",
    "Hindi",
    "English"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
