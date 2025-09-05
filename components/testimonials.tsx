'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'David Park',
    role: 'CEO at FinanceFlow',
    image: 'D',
    quote: 'Sque Tech developed our AI-powered financial analytics platform in just 3 months. Their deep learning expertise transformed our business intelligence capabilities.',
  },
  {
    name: 'Lisa Thompson',
    role: 'Product Manager at HealthTech Pro',
    image: 'L',
    quote: 'The mobile app and SaaS platform Sque Tech built for us exceeded expectations. Their attention to UI/UX detail and rapid deployment process was impressive.',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Founder of RetailAI',
    image: 'A',
    quote: 'Working with Sque Tech was seamless. They integrated computer vision and NLP into our e-commerce platform, boosting customer engagement by 40%.',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by innovative companies
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients are saying about their digital transformation journey with Sque Tech.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200"
            >
              <blockquote className="text-gray-700 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}