export interface Course {
  id: string;
  title: string;
  description: string;
  category: "kids" | "adult";
  level: string;
  icon: string;
  color: string;
}

export const courses: Course[] = [
  // Kids
  {
    id: "kids-c",
    title: "C Programming",
    description:
      "Build strong programming fundamentals through practical exercises and projects.",
    category: "kids",
    level: "Beginner",
    icon: "C",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "kids-cpp",
    title: "C++ Programming",
    description:
      "Learn programming logic, problem solving and object-oriented concepts.",
    category: "kids",
    level: "Beginner",
    icon: "C++",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "kids-python",
    title: "Python",
    description:
      "Learn Python through fun examples, coding challenges and practical projects.",
    category: "kids",
    level: "Beginner",
    icon: "🐍",
    color: "from-yellow-400 to-blue-500",
  },
  {
    id: "kids-java",
    title: "Java",
    description:
      "Understand Java programming and develop strong object-oriented thinking.",
    category: "kids",
    level: "Beginner",
    icon: "☕",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "kids-html",
    title: "HTML",
    description:
      "Create your first websites and understand how the web works.",
    category: "kids",
    level: "Beginner",
    icon: "🌐",
    color: "from-orange-500 to-pink-500",
  },
  {
    id: "kids-css",
    title: "CSS",
    description:
      "Learn how to style beautiful, responsive and interactive websites.",
    category: "kids",
    level: "Beginner",
    icon: "🎨",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: "kids-javascript",
    title: "JavaScript",
    description:
      "Make websites interactive and learn modern web programming.",
    category: "kids",
    level: "Beginner",
    icon: "JS",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "kids-ai",
    title: "Basic AI",
    description:
      "Discover artificial intelligence through simple concepts and fun projects.",
    category: "kids",
    level: "Beginner",
    icon: "🤖",
    color: "from-purple-500 to-pink-500",
  },

  // Adults
  {
    id: "adult-dsa",
    title: "DSA & LeetCode",
    description:
      "Master data structures and algorithms with interview-focused problem solving.",
    category: "adult",
    level: "Intermediate",
    icon: "🧠",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "adult-fullstack",
    title: "Full Stack Development",
    description:
      "Build complete web applications using modern frontend and backend technologies.",
    category: "adult",
    level: "Intermediate",
    icon: "💻",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "adult-digital-marketing",
    title: "Digital Marketing",
    description:
      "Learn modern digital marketing strategies, advertising and analytics.",
    category: "adult",
    level: "Beginner",
    icon: "📈",
    color: "from-pink-500 to-orange-500",
  },
  {
    id: "adult-excel",
    title: "Excel Expert",
    description:
      "Master formulas, dashboards, data analysis, PivotTables and automation.",
    category: "adult",
    level: "Beginner to Advanced",
    icon: "📊",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "adult-java",
    title: "Java Development",
    description:
      "Learn Java development with object-oriented programming and practical applications.",
    category: "adult",
    level: "Intermediate",
    icon: "☕",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "adult-python",
    title: "Python Development",
    description:
      "Build real-world Python applications and strengthen your programming skills.",
    category: "adult",
    level: "Beginner to Advanced",
    icon: "🐍",
    color: "from-yellow-400 to-blue-600",
  },
  {
    id: "adult-ai-ml",
    title: "AI & Machine Learning",
    description:
      "Learn machine learning concepts and build practical AI-powered projects.",
    category: "adult",
    level: "Intermediate",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "adult-frontend",
    title: "Frontend Development",
    description:
      "Build modern responsive websites using HTML, CSS, JavaScript and React.",
    category: "adult",
    level: "Beginner to Advanced",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-600",
  },
  {
    id: "adult-devops",
    title: "DevOps",
    description:
      "Learn Docker, AWS, CI/CD, Kubernetes and modern DevOps practices.",
    category: "adult",
    level: "Intermediate",
    icon: "☁️",
    color: "from-sky-500 to-indigo-600",
  },
];