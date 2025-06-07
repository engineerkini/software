// FAQSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
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
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Simple websites can be completed in 2-3 weeks, while complex full-stack applications may take 2-3 months. I always provide detailed estimates after understanding your specific requirements."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, I offer comprehensive post-launch support including bug fixes, performance optimization, security updates, and feature enhancements. I believe in building long-term partnerships with my clients."
    }
  ];

  return (
    <section 
      id='faq' 
      className="relative min-h-screen py-16 lg:py-24 overflow-hidden bg-[url('https://images.unsplash.com/photo-1529310399831-ed472b81d589?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat bg-blue-950/90 bg-blend-overlay"
    >
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-48 h-48 bg-cyan-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-4 lg:space-y-6">
            <div className="inline-flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 px-6 py-3 rounded-full shadow-lg">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-slate-200">Frequently Asked Questions</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                Common 
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Questions{' '}
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                Answered
              </span>
            </h2>
            
            <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
              Get quick answers to the most commonly asked questions about my services and process
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 lg:space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <AccordionTrigger className="relative z-10 text-left text-lg lg:text-xl font-semibold py-6 px-6 lg:px-8 hover:no-underline text-white group-hover:text-blue-100 transition-colors [&[data-state=open]]:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                
                <AccordionContent className="relative z-10 px-6 lg:px-8 pb-6 text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                  {faq.answer}
                </AccordionContent>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 lg:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
              <p className="text-slate-400">
                Still have questions?
              </p>
              <a 
                href="#contact" 
                className="group px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;