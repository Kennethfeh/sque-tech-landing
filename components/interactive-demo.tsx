'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const demoTabs = [
  {
    id: 'ai',
    label: 'AI Development',
    title: 'Deep Learning Integration',
    description: 'Build AI-powered applications with computer vision and NLP capabilities',
    code: `🧠 Sque AI Development Kit

$ sque ai init --model vision
✨ Creating AI model pipeline...
🔍 Computer Vision: Ready
🗣️  NLP Processing: Ready
📊 Training Dataset: Loaded

🚀 Model deployed to production
📈 Accuracy: 94.2%`,
    metrics: [
      { label: 'Model accuracy', value: '94.2%' },
      { label: 'Training time', value: '2.5hrs' },
      { label: 'Inference speed', value: '<100ms' }
    ]
  },
  {
    id: 'saas',
    label: 'SaaS Platform',
    title: 'Full-Stack Development',
    description: 'Create scalable SaaS applications with modern tech stack',
    code: `⚡ Sque SaaS Generator

$ sque create --template saas
📦 React + TypeScript: ✅
🔐 Auth & User Management: ✅
💳 Payment Integration: ✅
📊 Analytics Dashboard: ✅
☁️  Cloud Infrastructure: ✅

🌐 https://your-saas.live`,
    metrics: [
      { label: 'Development time', value: '8 weeks' },
      { label: 'Components', value: '50+' },
      { label: 'Performance score', value: '98/100' }
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    title: 'Cross-Platform Development',
    description: 'Build native iOS and Android apps with shared codebase',
    code: `📱 Sque Mobile Development

🔨 Building for iOS & Android...
⚛️  React Native: Optimized
🔄 State Management: Redux Toolkit
🎨 UI Components: Native Base
🔗 API Integration: Complete

📲 Apps ready for App Stores
⭐ Performance: Native-level`,
    metrics: [
      { label: 'Code sharing', value: '85%' },
      { label: 'App store rating', value: '4.8/5' },
      { label: 'Load time', value: '<2s' }
    ]
  }
]

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState('ai')
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
            See Sque Tech in action
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our development process for AI, SaaS, and mobile applications that businesses trust for digital transformation.
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