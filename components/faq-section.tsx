'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title: string
  subtitle?: string
  faqs: FAQItem[]
}

export function FAQSection({ title, subtitle, faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-900 text-left">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 text-neutral-600 animate-slide-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
