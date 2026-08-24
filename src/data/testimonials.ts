export interface Testimonial {
  id: number;
  name: string;
  role: string;
  course: string;
  location: string;
  avatar?: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Patel",
    role: "1st Year B.Tech Student",
    course: "DSA & Problem Solving in C++",
    location: "India",
    content:
      "Before joining, I struggled with pointers and recursion in my college curriculum. The 1:1 sessions completely cleared my fundamentals, and I can now solve medium-level LeetCode problems independently.",
  },
  {
    id: 2,
    name: "Oliver Davies",
    role: "Age 15 · GCSE Student",
    course: "Python & Game Development",
    location: "London, UK",
    content:
      "Learning 1:1 online was far better than classroom tutorials. My trainer helped me build two complete 2D games and understand core logic that boosted my computer science grades at school.",
  },
  {
    id: 3,
    name: "Rohan Sharma",
    role: "Junior Web Developer",
    course: "Full Stack MERN & SaaS",
    location: "India",
    content:
      "We built a complete multi-tenant platform with Stripe payments and deployed it live. Having a senior developer review my GitHub pull requests gave me the confidence to crack my first tech job.",
  },
  {
    id: 4,
    name: "Maya Jenkins",
    role: "Age 13 · Young Coder",
    course: "Web Foundations & Creative Coding",
    location: "Manchester, UK",
    content:
      "The mentor was patient and made every challenge fun. I went from knowing nothing about code to creating my own interactive website portfolio for my school showcase.",
  },
];