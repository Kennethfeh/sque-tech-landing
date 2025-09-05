'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Unleash the power of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}deep learning & SaaS
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
          >
            Sque Tech provides adaptable end-to-end digital solutions, combining deep learning expertise with cutting-edge SaaS development. From AI-powered platforms to mobile apps, we make advanced technology accessible to businesses of all sizes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="#pricing"
              className="group relative rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Start your project</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="#features"
              className="group text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
            >
              Learn more 
              <span className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flow-root sm:mt-20"
        >
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
            <div className="rounded-lg bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
              <img src="/images/ai-dashboard-demo.svg" alt="Sque Tech AI Platform Dashboard" className="w-full h-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}