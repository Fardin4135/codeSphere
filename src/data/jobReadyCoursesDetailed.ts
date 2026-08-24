export interface CourseTier {
  name: string;
  badge?: string;
  priceUSD: number;
  duration: string;
  curriculum: string[];
  projects: string[];
}

export interface CourseReview {
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
}

export interface DetailedJobReadyCourse {
  id: string;
  title: string;
  tagline: string;
  level: string;
  overview: string;
  tiers: {
    basic: CourseTier;
    pro: CourseTier;
  };
  reviews: CourseReview[];
}

export const jobReadyCoursesDetailed: DetailedJobReadyCourse[] = [
  {
    id: "fullstack-pro",
    title: "Full Stack Web Development & SaaS",
    tagline: "From Modern Frontend to Scalable Cloud Backend & Payments",
    level: "College Students & Career Switchers",
    overview:
      "A comprehensive, project-first engineering track designed to take you from core JavaScript/TypeScript to shipping complete multi-tenant applications.",
    tiers: {
      basic: {
        name: "Frontend Specialist (React + TS)",
        priceUSD: 249,
        duration: "8 Weeks (16 Sessions · 1:1)",
        curriculum: [
          "Advanced TypeScript & Modern ES6+",
          "React 19 Hooks, Context & State Architecture",
          "Tailwind CSS & Component Design Systems",
          "RESTful API Integration & Performance Tuning",
        ],
        projects: ["Interactive Analytics Dashboard", "E-Commerce Storefront"],
      },
      pro: {
        name: "Full Stack SaaS & Cloud Engineer",
        badge: "Highest Hiring Rate",
        priceUSD: 449,
        duration: "14 Weeks (28 Sessions · 1:1)",
        curriculum: [
          "Everything in Frontend Specialist",
          "Node.js, Express, Fastify & REST / GraphQL",
          "PostgreSQL / MongoDB Database Schema Design & Prisma",
          "Authentication (JWT, OAuth, NextAuth) & Stripe Billing",
          "Docker Containerization & AWS / Vercel CI/CD Pipelines",
        ],
        projects: [
          "Multi-Tenant SaaS Workspace with Stripe Subscriptions",
          "Real-time Collaborative Chat & Task Engine (WebSockets)",
        ],
      },
    },
    reviews: [
      {
        name: "Rohan Sharma",
        role: "Junior Software Engineer",
        location: "Bengaluru, India",
        rating: 5,
        comment:
          "The 1:1 code reviews on my pull requests gave me the practical knowledge I needed. I converted my SaaS project into a talking point that landed me my first tech job.",
      },
      {
        name: "James Wilson",
        role: "Career Switcher",
        location: "London, UK",
        rating: 5,
        comment:
          "Learning database modeling and Stripe webhook integrations with a senior engineer saved me months of trial and error.",
      },
    ],
  },
  {
    id: "dsa-interview",
    title: "Data Structures, Algorithms & Interview Prep",
    tagline: "Ace Technical Coding Rounds & System Design Fundamentals",
    level: "B.Tech / CS Students & Job Seekers",
    overview:
      "Master algorithmic problem solving, pattern recognition, and live mock whiteboard interviews in C++, Java, or Python.",
    tiers: {
      basic: {
        name: "Core Data Structures Foundation",
        priceUSD: 199,
        duration: "6 Weeks (12 Sessions · 1:1)",
        curriculum: [
          "Time & Space Complexity (Big-O Analysis)",
          "Arrays, Strings, Pointers & Two-Pointer Strategies",
          "Linked Lists, Stacks & Queues",
          "Recursion & Binary Search Techniques",
        ],
        projects: ["Custom Memory Allocator Simulator", "50+ Curated Problems Solved"],
      },
      pro: {
        name: "Advanced DSA & FAANG Interview Prep",
        badge: "Placement Focus",
        priceUSD: 379,
        duration: "12 Weeks (24 Sessions · 1:1)",
        curriculum: [
          "Everything in Core DS Foundation",
          "Trees, Binary Search Trees & Heaps / Priority Queues",
          "Graph Algorithms (BFS, DFS, Dijkstra, Topo Sort)",
          "Dynamic Programming (1D, 2D & Bitmasking)",
          "Low-Level System Design (LLD) & 4x Live Mock Interviews",
        ],
        projects: [
          "Rate Limiter & Cache Engine (LRU/LFU)",
          "150+ Blind & NeetCode Problem Portfolio",
        ],
      },
    },
    reviews: [
      {
        name: "Aarav Patel",
        role: "B.Tech 3rd Year",
        location: "Pune, India",
        rating: 5,
        comment:
          "I used to get stuck on medium-hard Dynamic Programming problems. The pattern-based breakdown transformed how I approach technical assessments.",
      },
    ],
  },
  {
    id: "ai-ml-python",
    title: "AI & Applied Machine Learning Engineering",
    tagline: "Build Intelligent Applications with Python, LLMs & Vector DBs",
    level: "College Students & Tech Professionals",
    overview:
      "Learn predictive data modeling, deep learning basics, and build production-ready Retrieval-Augmented Generation (RAG) agents.",
    tiers: {
      basic: {
        name: "Applied Data Science & Machine Learning",
        priceUSD: 229,
        duration: "8 Weeks (16 Sessions · 1:1)",
        curriculum: [
          "Python for Data Science (NumPy, Pandas, Seaborn)",
          "Supervised & Unsupervised Machine Learning (scikit-learn)",
          "Feature Engineering & Model Evaluation",
          "Exploratory Data Analysis (EDA) Automation",
        ],
        projects: ["Customer Churn Prediction Engine", "House Price Regressor"],
      },
      pro: {
        name: "Generative AI & LLM Systems Engineer",
        badge: "Trending 2026",
        priceUSD: 429,
        duration: "12 Weeks (24 Sessions · 1:1)",
        curriculum: [
          "Everything in Applied Data Science",
          "Embeddings, Vector Search & Pinecone / ChromaDB",
          "LangChain, LlamaIndex & Autonomous AI Agents",
          "Fine-Tuning Strategies & Prompt Engineering Pipelines",
          "Deploying ML/LLM APIs with FastAPI & Docker",
        ],
        projects: [
          "Enterprise Autonomous Document Q&A Agent",
          "Multi-Modal Content Generation API",
        ],
      },
    },
    reviews: [
      {
        name: "Kavita Reddy",
        role: "Data Analyst",
        location: "Hyderabad, India",
        rating: 5,
        comment:
          "Building a complete vector search AI application hands-on gave me practical engineering skills beyond traditional stats tutorials.",
      },
    ],
  },
];