"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQAccordion({ faqs }: { faqs: FAQItemProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-800">
          <button
            className="flex justify-between items-center w-full py-4 text-left"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <ChevronDown
              className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="pb-4 text-gray-400">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
