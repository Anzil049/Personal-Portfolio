import userPhoto from '../assets/user_photo.jpg';
import projectMedcare from '../assets/project_medcare.png';
import projectTokyo from '../assets/project_tokyo.jpg';

export const portfolioData = {
  personal: {
    name: "Anzil K.",
    nickname: "Anzil",
    role: "MERN Stack Developer",
    tagline: "Architecting scalable full-stack applications with the MERN ecosystem.",
    bio: "Hi! I'm a MERN Stack Developer dedicated to building robust, scalable, and efficient web applications. I specialize in MongoDB, Express.js, React, and Node.js, focusing on clean architecture and high-performance backends. I love turning complex problems into simple, beautiful, and functional code.",
    location: "Kerala,India",
    birthDate: "19/06/2004",
    avatar: userPhoto,
    cta: "Anzil K. | Full-stack Developer"
  },

  skills: [
    { name: "Frontend", tools: ["React.js", "Redux", "Tailwind CSS", "Bootstrap"] },
    { name: "Backend", tools: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT"] },
    { name: "Database", tools: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL"] },
    { name: "DevOps", tools: ["Git", "GitHub Actions", "Vercel", "AWS"] }
  ],


  projects: [
    {
      title: "MedCare",
      description: "A full-stack healthcare platform with real-time video calls, appointment scheduling, and role-based access control.",
      image: projectMedcare,
      tags: ["MERN", "Socket.io", "WebRTC"],
      link: "#"
    },
    {
      title: "Tokyo E-Commerce",
      description: "A scalable online marketplace with Razorpay integration, admin dashboard, and advanced search functionality.",
      image: projectTokyo,
      tags: ["MongoDB", "Express", "HTML", "Node", "CSS", "JavaScript", "Bootstrap"],
      link: "https://tokyosports.online/"
    }

  ],

  socials: [
    { name: "Github", url: "https://github.com/anzil049", icon: "github" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/anzil049", icon: "linkedin" },
    { name: "Email", url: "mailto:anzil049@gmail.com", icon: "mail" }
  ]
};
