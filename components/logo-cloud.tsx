'use client'

import { motion } from 'framer-motion'

const companies = [
  { name: 'Acme Corp', logo: 'A' },
  { name: 'GlobalTech', logo: 'G' },
  { name: 'InnovateCo', logo: 'I' },
  { name: 'NextGen Solutions', logo: 'N' },
  { name: 'FutureSoft', logo: 'F' },
  { name: 'TechVision', logo: 'T' },
]

export function LogoCloud() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="col-span-1 flex justify-center items-center"
              >
                <div className="flex items-center space-x-3 text-gray-400 hover:text-gray-600 transition-colors">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-gray-600">{company.logo}</span>
                  </div>
                  <span className="font-medium text-sm">{company.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}