import SectionHeading from "../components/SectionHeading";
import FAQItem from "../components/FAQItem";

const faqs = [
  {
    question: "Are the sessions really 1:1?",
    answer:
      "Yes. Our training model is designed around personalised one-to-one online sessions so the trainer can focus on the learner's individual needs.",
  },
  {
    question: "What ages can join the Kids Zone?",
    answer:
      "The Kids Zone is designed primarily for learners aged 10–17. We can discuss the learner's current level and goals before recommending a program.",
  },
  {
    question: "Do you teach students in the United Kingdom?",
    answer:
      "Yes. The UK is one of our primary markets. All sessions are delivered online, making it possible to learn from experienced trainers remotely.",
  },
  {
    question: "Can students from India join?",
    answer:
      "Yes. We also provide online learning for students and professionals in India.",
  },
  {
    question: "Do I need prior programming experience?",
    answer:
      "Not necessarily. Several of our programs are suitable for beginners. We can recommend an appropriate starting point based on your current experience.",
  },
  {
    question: "Do learners build projects?",
    answer:
      "Yes. Our approach focuses on practical learning, and suitable projects are included depending on the selected program and learner level.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-900/40 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Find answers to some of the most common questions about our training programs."
        />

        <div className="mt-10">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}