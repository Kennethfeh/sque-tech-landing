'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
  index: number
}

export function Feature({ icon, title, description, index }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-2xl hover:ring-blue-200 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-6 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.div>
  )
}