'use client'

import { motion } from 'framer-motion'
import { formatPrice } from '@/lib/utils'

const plans = [
  {
    name: 'Consultation',
    description: 'Discovery & strategy session',
    price: 0,
    features: [
      '1-hour strategy call',
      'Project scoping',
      'Technology recommendations',
      'Development roadmap',
    ],
    buttonText: 'Book consultation',
    popular: false,
  },
  {
    name: 'Development',
    description: 'Full-stack development package',
    price: 5000,
    features: [
      'Custom SaaS development',
      'Mobile app development',
      'AI/ML integration',
      '3 months support',
      'Cloud deployment',
      'Performance optimization',
    ],
    buttonText: 'Start project',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Complete digital transformation',
    price: 15000,
    features: [
      'Everything in Development',
      'Deep learning solutions',
      'Custom AI models',
      '12 months support',
      'Dedicated team',
      'Priority support',
    ],
    buttonText: 'Contact us',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transparent project pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Start with a free consultation to understand your needs, then choose the development package that fits your project scope.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-blue-600 shadow-blue-100' : 'hover:ring-blue-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-gray-600">{plan.name === 'Consultation' ? '' : '/project'}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}