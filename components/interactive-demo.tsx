'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const demoTabs = [
  {
    id: 'capture',
    label: 'Time Capture',
    title: 'Automatic Time Tracking',
    description: 'Watch how Sque automatically captures and categorizes your billable work',
    code: `⏱️  Sque Time Capture Engine

✨ Detecting work activity...
📝 Document review: Smith v. Johnson
🕐 Started: 2:15 PM
📊 Categorized: Litigation

📧 Email analysis: Client correspondence  
🕐 Duration: 0.5 hours
💰 Billable: $125 @ $250/hr

🔄 Auto-sync complete`,
    metrics: [
      { label: 'Time recovered', value: '15+ hrs/week' },
      { label: 'Accuracy rate', value: '96.8%' },
      { label: 'Auto-categorization', value: '89%' }
    ]
  },
  {
    id: 'approve',
    label: 'Proof & Approve',
    title: 'Evidence-Based Billing',
    description: 'Generate comprehensive proof bundles for every billable entry',
    code: `📋 Sque Proof Bundle Generator

🔍 Collecting evidence...
📸 Screenshots: 12 captured
📎 Documents: 5 accessed
📧 Email thread: 8 messages
⏰ Time stamps: Verified

📦 Bundle created: Smith_v_Johnson_2024.zip
💾 Size: 15.2 MB
🔐 Encrypted & ready for client`,
    metrics: [
      { label: 'Dispute reduction', value: '87%' },
      { label: 'Bundle generation', value: '<30 sec' },
      { label: 'Client satisfaction', value: '4.9/5' }
    ]
  },
  {
    id: 'invoice',
    label: 'Invoice & Collect',
    title: 'Automated Billing',
    description: 'Convert approved time into invoices and accelerate collection',
    code: `💸 Sque Billing Engine

⚙️  Processing approved entries...
📄 Invoice #2024-0156 created
💰 Amount: $4,250.00
📧 Auto-sent to client portal
📅 Due date: 30 days

🔔 Payment reminder scheduled
📊 Collection probability: 94%
💳 Online payment link included`,
    metrics: [
      { label: 'Collection rate', value: '94%' },
      { label: 'Payment time', value: '18 days avg' },
      { label: 'Admin time saved', value: '5 hrs/week' }
    ]
  }
]

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState('capture')
  const currentDemo = demoTabs.find(tab => tab.id === activeTab) || demoTabs[0]

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See Sque in action
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the complete legal revenue workflow from automatic time capture to fast payment collection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Navigation */}
          <div className="space-y-6">
            {demoTabs.map((tab, index) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white shadow-lg ring-1 ring-blue-600/10 border border-blue-100'
                    : 'bg-gray-50/50 hover:bg-white hover:shadow-md'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tab.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tab.description}
                    </p>
                    {activeTab === tab.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-gray-100"
                      >
                        <div className="grid grid-cols-3 gap-4">
                          {tab.metrics.map((metric) => (
                            <div key={metric.label} className="text-center">
                              <div className="text-lg font-bold text-gray-900">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-500">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Demo Display */}
          <div className="relative">
            <div className="sticky top-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-xs text-gray-400 font-mono">
                          terminal
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black rounded-lg p-4 font-mono text-sm min-h-[240px]">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="whitespace-pre-line text-green-400"
                      >
                        {currentDemo.code}
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Floating elements for visual interest */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3 shadow-lg"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}