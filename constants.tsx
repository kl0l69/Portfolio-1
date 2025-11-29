import { Project, Skill, SocialLink } from './types';
import { 
  Github, 
  MessageCircle, // عشان الواتساب
} from 'lucide-react';

// دي البيانات الأساسية اللي بتظهر في الموقع
export const CLIENT_INFO = {
  name: "Omar Wageh",
  role: "Full Stack Developer",
  education: "Borg Al Arab Technological University (Second Year)",
  major: "Information Technology",
  phoneDisplay: "+20 155 460 0228", // الرقم الجديد
  emailDisplay: "ayrn194@gmail.com",
  location: "Egypt",
  bio: "I am a passionate 19-year-old IT student and Full Stack Developer. With a strong foundation in both frontend and backend technologies, I build scalable web applications that solve real-world problems. I enjoy turning complex ideas into clean, efficient code."
};

// هنا مشاريعك.. ممكن تعدلها براحتك بعدين
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully responsive online store with product filtering, cart functionality, and secure checkout integration.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["React", "Node.js", "Tailwind", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "University Portal",
    description: "Student management system allowing course registration, grade tracking, and schedule planning.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    link: "#"
  },
  {
    id: 3,
    title: "Task Master AI",
    description: "Productivity application leveraging AI to prioritize tasks and suggest schedules based on user habits.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["JavaScript", "Gemini API", "CSS3", "Firebase"],
    link: "#"
  }
];

// مهاراتك التقنية
export const SKILLS: Skill[] = [
  { name: "HTML5", level: "Expert" },
  { name: "CSS3", level: "Expert" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Git & GitHub", level: "Advanced" },
  { name: "SQL", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" }
];

// لينكات التواصل الاجتماعي: جيت هب وواتساب بس زي ما طلبت
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Omardiablo22" // اليوزر نيم الجديد
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/201554600228" // الرقم الجديد
  }
];