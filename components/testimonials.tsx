'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Williams',
    role: 'Partner at Morrison & Associates',
    image: 'S',
    quote: 'Sque has recovered 15+ hours of unbilled time per week for our firm. The automatic proof bundles make client billing disputes a thing of the past.',
  },
  {
    name: 'Michael Chen',
    role: 'Solo Practitioner, Corporate Law',
    image: 'M',
    quote: 'Since using Sque, my collection rate improved from 78% to 94%. The automated billing system eliminates the administrative overhead I used to hate.',
  },
  {
    name: 'Jennifer Martinez',
    role: 'Managing Partner at Legal Innovations LLP',
    image: 'J',
    quote: 'Sque transformed how our 25-attorney firm handles time tracking. We&apos;ve increased billable hour capture by 22% and reduced billing cycles by 50%.',
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
            Trusted by legal professionals
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how law firms are maximizing their revenue and efficiency with Sque&apos;s legal operating system.
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