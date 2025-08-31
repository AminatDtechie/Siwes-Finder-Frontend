
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "placement-real",
    question: "How do I know a placement here is real?",
    answer:
      "We only publish verified opportunities. Every listing goes through a review process to make sure it's legit, so you don't waste time chasing ghost openings.",
  },
  {
    id: "siwes-finder",
    question: "What is Siwes Finder?",
    answer:
      "Siwes Finder is a platform that connects students with verified internship and placement opportunities. We help you find legitimate SIWES placements from trusted companies and organizations.",
  },
  {
    id: "paid-placement",
    question: "Will I be paid for the placement?",
    answer:
      "Payment varies by company and placement type. Some placements offer stipends or allowances, while others provide valuable experience and training. We clearly indicate compensation details in each listing when available.",
  },
  {
    id: "after-apply",
    question: "What happens after I apply?",
    answer:
      "After you apply, the company will review your application and contact you directly if you're selected for an interview or the placement. We'll also send you updates on your application status through our platform.",
  },
  {
    id: "free-to-use",
    question: "Is SIWES Finder free to use?",
    answer:
      "Yes, SIWES Finder is completely free for students. You can browse opportunities, apply to placements, and access our resources without any cost. We believe in supporting students' career development.",
  },
];

const FAQ = () => {
  return (
    <>
      <section className="w-full my-3 flex justify-center items-center">
        <p className="text-base md:text-3xl font-semibold"> Got Questions? We've Got You Covered </p>
      </section>
      <section className="mb-5 px-5">
        <div className="w-full max-w-6xl px-3 md:px-10 mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-gray-200 rounded last:border-b"
              >
                <AccordionTrigger className="px-4 py-4 sm:px-6 sm:py-5 text-left hover:no-underline hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-base sm:text-lg font-semibold text-gray-900 leading-relaxed">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-5 pt-0">
                  <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default FAQ;