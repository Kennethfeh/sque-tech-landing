'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Stop Losing Billable Time You&apos;ve Already Earned
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-white/90 max-w-3xl mx-auto"
          >
            Sque is the Legal Revenue & Operating System — it captures work automatically and runs billing as your system of record.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-sm text-white/70 max-w-2xl mx-auto"
          >
            First invoice in 48 hours • Audit-ready proof in 14 days • 0 rejected e-bills
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-4"
          >
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors duration-300">
              Calculate My Revenue Recovery
            </button>
            <button className="group rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
              Start Free Trial
              <span className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
            </button>
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
              <img src="/images/sque-dashboard-exact.svg" alt="Sque Legal Revenue & Operating System Dashboard" className="w-full h-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}