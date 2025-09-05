'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What makes Sque different from other platforms?',
    answer: 'Sque combines the simplicity of modern deployment platforms with enterprise-grade security and performance. Our focus on developer experience and global scale sets us apart.',
  },
  {
    question: 'Can I migrate my existing applications to Sque?',
    answer: 'Absolutely! We support all major frameworks and provide migration tools to help you seamlessly transition your applications. Our team can also assist with the migration process.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24/7 community support for all users, priority support for Pro customers, and dedicated support with SLA guarantees for Enterprise customers.',
  },
  {
    question: 'Is my data secure with Sque?',
    answer: 'Yes, security is our top priority. We are SOC 2 compliant, use end-to-end encryption, and implement advanced threat protection across all our infrastructure.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your applications will continue running until the end of your billing period.',
  },
  {
    question: 'Do you offer custom enterprise solutions?',
    answer: 'Yes, we offer custom enterprise solutions including on-premise deployments, custom SLAs, and dedicated infrastructure. Contact our sales team to discuss your specific requirements.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about Sque. Can&apos;t find the answer you&apos;re looking for? 
            <a href="mailto:support@sque.com" className="text-blue-600 hover:text-blue-700 ml-1">
              Contact our support team.
            </a>
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}