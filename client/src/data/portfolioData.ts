export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  details: string[];
}

export const portfolioData = {
  skills: {
    programmingLanguages: [
      { name: "Python", level: 90 },
      { name: "Dart", level: 85 },
      { name: "Java", level: 80 },
      { name: "C#", level: 75 },
      { name: "SQL", level: 85 },
    ],
    frameworks: [
      { name: "Flutter", level: 90 },
      { name: "React.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 70 },
    ],
    cloudPlatforms: ["AWS", "Azure", "EKS", "S3", "ECR"],
    devOpsTools: ["Git", "GitHub Actions", "Terraform", "Ansible", "CI/CD"],
    softSkills: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Tech Support"],
  },
  
  experience: [
    {
      title: "Personal Shopper",
      company: "Loblaws Bowmanville",
      period: "May 2024 - Present",
      responsibilities: [
        "Provided excellent customer service by assisting customers with their shopping needs.",
        "Cross trained and regularly worked in Salad Bar, Dairy, Grocery departments.",
        "Maintained 100% accuracy in picking and loading customer orders.",
        "Assisted customers with inquiries regarding store products and services.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Script All DNA Technologies",
      period: "Dec 2022 - May 2023",
      responsibilities: [
        "Developed cross platform applications using Flutter framework with Dart programming language.",
        "Created a real time print queue management application using Supabase database for printing.",
        "Built server-side application for real time data processing in C#, making application 20% faster.",
        "Integrated Google WEBRTC API for real time audio and video calling functionality.",
        "Utilized Agile methodologies and Jira for workload management and team collaboration."
      ],
    },
  ],
  
  education: [
    {
      degree: "Cloud Architecture and Administration",
      institution: "Seneca Polytechnic, Toronto ON",
      period: "Sept 2024 - April 2025",
      description: "Advanced studies in cloud infrastructure, deployment strategies, and cloud security.",
    },
    {
      degree: "Cybersecurity with Honors",
      institution: "Durham College, Oshawa, ON",
      period: "Jan 2024 - Aug 2024",
      description: "Specialized training in security frameworks, threat detection, and vulnerability assessment.",
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Ganpat University, India",
      period: "2019 - 2023",
      description: "Comprehensive education in software development, database management, and IT systems.",
    },
  ],
  
  certifications: [
    {
      name: "President's Honors List",
      issuer: "Academic Achievement at Durham College",
    },
    {
      name: "Python",
      issuer: "HackerRank",
    },
    {
      name: "Problem Solving",
      issuer: "HackerRank",
    },
    {
      name: "SQL",
      issuer: "HackerRank",
    },
  ],
  
  projects: [
    {
      title: "Two-tier Web Application",
      description: "Containerized Flask application with MySQL deployed to Amazon EKS with persistent storage and auto-scaling.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
      category: "Cloud",
      technologies: ["AWS EKS", "Flask", "Docker", "CI/CD"],
      details: [
        "Designed and implemented scalable microservices architecture for high availability",
        "Set up CI/CD pipeline using GitHub Actions for automated testing and deployment",
        "Configured Kubernetes persistent volumes for database data persistence",
        "Implemented horizontal pod autoscaling based on CPU and memory metrics",
        "Secured application with proper IAM roles and security groups"
      ]
    },
    {
      title: "JobTrackr",
      description: "Scalable full-stack web app using React.js, Flask REST API, and MySQL for job application tracking.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80",
      category: "Web App",
      technologies: ["React.js", "Python", "MySQL", "Azure"],
      details: [
        "Created responsive UI with React.js and Material UI components",
        "Implemented RESTful API with Flask and SQLAlchemy ORM",
        "Set up secure user authentication with JWT tokens",
        "Developed dashboard with data visualization for application insights",
        "Deployed application to Azure App Service with Azure Database for MySQL"
      ]
    },
    {
      title: "Telemedicine System",
      description: "Platform connecting doctors, patients and hospitals with audio/video calling using WEBRTC API.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      category: "Mobile App",
      technologies: ["Flutter", "Dart", "C#", "SQL"],
      details: [
        "Built cross-platform mobile application with Flutter framework",
        "Integrated WebRTC API for real-time audio and video consultations",
        "Designed and implemented secure database schema for patient records",
        "Created appointment scheduling system with notifications",
        "Implemented HIPAA-compliant data encryption for patient information"
      ]
    },
  ],
};
