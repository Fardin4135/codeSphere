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
  age: number;
  location: string;
  rating: number;
  comment: string;
}

export interface DetailedKidsCourse {
  id: string;
  title: string;
  tagline: string;
  ageGroup: string;
  overview: string;
  tiers: {
    basic: CourseTier;
    pro: CourseTier;
  };
  reviews: CourseReview[];
}

export const kidsCoursesDetailed: DetailedKidsCourse[] = [
  {
    id: "python-kids",
    title: "Python for Young Creators",
    tagline: "From First Logic to Interactive Apps & Data Science",
    ageGroup: "Ages 10–17",
    overview:
      "A hands-on Python program structured for younger minds to transition smoothly from core logic to desktop apps and data visualization.",
    tiers: {
      basic: {
        name: "Python Core Fundamentals",
        priceUSD: 149,
        duration: "6 Weeks (12 Sessions · 1:1)",
        curriculum: [
          "Python Syntax, Variables & Data Types",
          "Conditionals, Loops & Functions",
          "Lists, Dictionaries & String Operations",
          "Debugging & Computational Thinking",
        ],
        projects: ["Number Guessing Game", "Text Adventure RPG", "Password Generator"],
      },
      pro: {
        name: "Python Complete + GUI & Data Science",
        badge: "Most Popular",
        priceUSD: 249,
        duration: "10 Weeks (20 Sessions · 1:1)",
        curriculum: [
          "Everything in Core Fundamentals",
          "GUI App Development with Tkinter",
          "Event-driven Programming & Widgets",
          "Data Analysis Basics (Pandas)",
          "Data Visualization & Charts (Matplotlib)",
        ],
        projects: [
          "Interactive Desktop Calculator (Tkinter)",
          "Weather & Expense App UI",
          "Sports & Gaming Statistics Visualizer",
        ],
      },
    },
    reviews: [
      {
        name: "Leo Harris",
        age: 13,
        location: "London, UK",
        rating: 5,
        comment:
          "Building the Tkinter desktop app made Python so much fun. My trainer explained loops and functions in a way that made complete sense!",
      },
      {
        name: "Ananya Iyer",
        age: 15,
        location: "Bengaluru, India",
        rating: 5,
        comment:
          "The data visualization part was super cool. I analyzed my favorite video game stats using Matplotlib for my school science fair.",
      },
    ],
  },
  {
    id: "web-kids",
    title: "Web Development & Creative Coding",
    tagline: "Build & Host Your Own Websites on the Live Internet",
    ageGroup: "Ages 11–17",
    overview:
      "Learn the core building blocks of the web and launch interactive, animated websites directly to your own web domain.",
    tiers: {
      basic: {
        name: "Web Starter (HTML & CSS)",
        priceUSD: 139,
        duration: "6 Weeks (12 Sessions · 1:1)",
        curriculum: [
          "HTML5 Semantic Layouts",
          "CSS Styling, Colors & Typography",
          "Flexbox & Responsive Mobile Design",
          "Live Website Publishing",
        ],
        projects: ["Personal Bio Link Website", "Hobby / Fanpage Showcase"],
      },
      pro: {
        name: "Full Web Creator (HTML + CSS + JavaScript)",
        badge: "Recommended",
        priceUSD: 229,
        duration: "10 Weeks (20 Sessions · 1:1)",
        curriculum: [
          "Everything in Web Starter",
          "JavaScript Logic & DOM Manipulation",
          "Interactive Buttons, Modals & Animations",
          "API Data Fetching Basics",
        ],
        projects: [
          "Animated Quiz Game",
          "Interactive To-Do & Task Dashboard",
          "Custom Portfolio Site Hosted Online",
        ],
      },
    },
    reviews: [
      {
        name: "Ethan Walker",
        age: 14,
        location: "Manchester, UK",
        rating: 5,
        comment:
          "I went from zero coding knowledge to having a live website that I can show to all my friends and family.",
      },
      {
        name: "Dev Mehta",
        age: 12,
        location: "Mumbai, India",
        rating: 5,
        comment:
          "Adding JavaScript animations to my web pages made coding feel like designing video games.",
      },
    ],
  },
  {
    id: "game-dev-kids",
    title: "Game Development & Logic Studio",
    tagline: "Design, Code & Play Your Own 2D Games",
    ageGroup: "Ages 10–16",
    overview:
      "Turn gaming interest into coding logic. Learn collision physics, sprites, animations, and game state mechanics.",
    tiers: {
      basic: {
        name: "2D Arcade Logic",
        priceUSD: 149,
        duration: "6 Weeks (12 Sessions · 1:1)",
        curriculum: [
          "Game Loops & Coordinate Systems",
          "Sprite Movement & Keyboard Controls",
          "Score Tracking & Collision Detection",
        ],
        projects: ["Catch the Coin", "Space Invaders Clone"],
      },
      pro: {
        name: "Complete Game Architect",
        badge: "Hands-on",
        priceUSD: 239,
        duration: "10 Weeks (20 Sessions · 1:1)",
        curriculum: [
          "Everything in 2D Arcade Logic",
          "Multi-level State Management",
          "Sound Effects, Particle FX & Physics",
          "Game Publishing & Distribution",
        ],
        projects: [
          "Platformer Adventure Game",
          "Top-down Maze Runner with Boss Fights",
        ],
      },
    },
    reviews: [
      {
        name: "Samira Khan",
        age: 11,
        location: "Birmingham, UK",
        rating: 5,
        comment:
          "Creating game physics and sound effects was awesome! My mentor helped me fix every bug patiently.",
      },
    ],
  },
];