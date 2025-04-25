// FAQSection.jsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  // FAQ data
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern JavaScript/TypeScript ecosystems, particularly React and Next.js for frontend development, Node.js and Express for backend services, and both SQL and NoSQL databases. I also have experience with CI/CD pipelines, Docker, and cloud platforms like AWS and Azure."
    },
    {
      question: "How do you approach new projects?",
      answer: "I start with a thorough understanding of requirements and business goals, followed by planning the architecture and tech stack. I believe in iterative development with regular client check-ins, comprehensive testing, and detailed documentation throughout the process."
    },
    {
      question: "Can you work with existing codebases?",
      answer: "Absolutely. I have extensive experience in joining existing projects, understanding legacy code, implementing new features, and refactoring when necessary. I'm comfortable adapting to established coding standards and workflows."
    }
  ];

  return (
    <section id='faq' className="relative w-full max-w-3xl mx-auto p-8 bg-white text-black">
      <div className="text-center mb-8 bg-white">
        <button type='button' className="bg-black text-bodyText px-5 py-3 text-bodySmall rounded-full transition-all duration-300">
          FAQs
        </button>
        <h2 className="mb-4 leading-[40px] text-3xl md:text-5xl text-center font-semibold">
          <span className="text-black">Common</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Questions</span>
          <br />
          <span className="text-black">Answered</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`item-${index}`}
            className="border bg-blue-500/15 border-blue-500/15 rounded-md overflow-hidden px-4"
          >
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-black pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-white/50 via-white/80 to-white" />
    </section>
  );
};

export default FAQSection;