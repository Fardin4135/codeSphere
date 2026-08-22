export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Parent of a Student",
    role: "Parent",
    country: "United Kingdom",
    content:
      "The personalised learning approach helped my child become much more confident with programming.",
  },
  {
    id: "testimonial-2",
    name: "Adult Learner",
    role: "Career Learner",
    country: "United Kingdom",
    content:
      "The practical project-based approach made difficult programming concepts much easier to understand.",
  },
  {
    id: "testimonial-3",
    name: "Student",
    role: "Technology Learner",
    country: "India",
    content:
      "I really enjoyed building projects instead of only studying theory. The sessions were engaging and practical.",
  },
];