import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What areas in Omaha do you serve?",
    answer: "Ted Croft Painting LLC serves the entire Omaha metropolitan area including Omaha, Bellevue, Papillion, La Vista, Ralston, Elkhorn, Gretna, Council Bluffs, and surrounding communities within a 30-mile radius."
  },
  {
    question: "How much does it cost to paint a house in Omaha?",
    answer: "The cost varies based on size, condition, and type of paint. Interior painting typically ranges from $2-5 per square foot, while exterior painting ranges from $1.50-4 per square foot. We offer free, no-obligation estimates for all projects."
  },
  {
    question: "Are you licensed and insured in Nebraska?",
    answer: "Yes, Ted Croft Painting LLC is fully licensed, bonded, and insured in Nebraska. We carry comprehensive liability insurance and workers' compensation coverage to protect both our clients and our team."
  },
  {
    question: "How long has Ted Croft Painting been in business?",
    answer: "We've been providing professional painting services in Omaha since 1998, giving us over 25 years of experience. We've completed thousands of residential and commercial projects throughout the Omaha metro area."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide completely free on-site estimates for all painting projects in Omaha and surrounding areas. Our detailed estimates include material costs, labor, timeline, and a breakdown of work to be performed."
  },
  {
    question: "What types of painting services do you offer?",
    answer: "We offer interior painting, exterior painting, kitchen cabinet painting and refinishing, commercial painting, drywall repair, surface preparation, color consultation, and deck staining. We specialize in high-end residential work."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4" data-testid="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our painting services in Omaha
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                data-testid={`faq-question-${index}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-panel-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div 
                  id={`faq-answer-panel-${index}`}
                  className="px-6 pb-6 pt-0"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p className="text-gray-600 leading-relaxed" data-testid={`faq-answer-${index}`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're happy to help!
          </p>
          <a
            href="tel:4028123445"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            data-testid="faq-call-button"
          >
            Call (402) 812-3445
          </a>
        </div>
      </div>
    </section>
  );
}
