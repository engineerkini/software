import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
    const faqs = [
        {
          question: "What training programs does Exposure Room offer?",
          answer: "We offer comprehensive training programs in singing, producing, and videography. Our programs include hands-on workshops, courses designed to enhance your skills, and access to an exclusive online content library with tutorials and resources tailored for aspiring artists."
        },
        {
          question: "How can I connect with industry professionals?",
          answer: "Through our mentorship opportunities, you can connect directly with industry professionals who provide guidance, support, and career development advice. We also organize regular networking events and talent showcases where you can meet and collaborate with experienced professionals."
        },
        {
          question: "What resources are available in the community hub?",
          answer: "Our community hub features a vibrant forum for young creatives to collaborate and share ideas, a showcase portfolio highlighting the best works, a regularly updated blog with industry insights, and an event calendar to keep you informed about upcoming workshops and events."
        }
      ];

  return (
    <div className=" relative w-full max-w-3xl mx-auto p-8 bg-black text-white">
      {/* FAQ Header */}
      <div className="text-center mb-8">
      <button className="bg-[#3f3f4666] text-bodyText px-5 py-3 text-bodySmall rounded-full transition-all duration-300">
       FAQs
    </button>
    <h2 className="mb-4 text-3xl md:text-5xl text-center font-semibold">
  <span className="text-white">Common</span>{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500 ">Inquiries</span>
  <br />
  <span className="text-white">Answered</span>
</h2>

      </div>

      {/* FAQ Accordion */}
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border rounded-lg bg-zinc-900/50 px-4 border-zinc-800"
          >
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="absolute  -z-10 inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        
    </div>
  );
};

export default FAQSection;