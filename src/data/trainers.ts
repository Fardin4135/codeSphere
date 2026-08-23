export interface Trainer {
  id: number;
  name: string;
  role: string;
  experience: string;
  image: string;
  skills: string[];
  description: string;
}

export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Full Stack Developer",
    experience: "8+ Years Experience",
    image: "/trainers/trainer-1.jpg",
    skills: ["React", "TypeScript", "Node.js", "MongoDB"],
    description:
      "Industry professional helping students build real-world web applications.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "AI & Machine Learning Engineer",
    experience: "7+ Years Experience",
    image: "/trainers/trainer-2.jpg",
    skills: ["Python", "Machine Learning", "AI", "Data Science"],
    description:
      "AI professional teaching students practical machine learning and AI concepts.",
  },
  {
    id: 3,
    name: "David Smith",
    role: "DevOps Engineer",
    experience: "9+ Years Experience",
    image: "/trainers/trainer-3.jpg",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    description:
      "DevOps specialist helping learners understand cloud and deployment technologies.",
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "DSA &  Programming Mentor",
    experience: "6+ Years Experience",
    image: "/trainers/trainer-4.jpg",
    skills: ["C++", "Algorithms", "Data Structures"],
    description:
      "Former FAANG engineer passionate about simplifying complex algorithms and technical interview prep.",
  },
];