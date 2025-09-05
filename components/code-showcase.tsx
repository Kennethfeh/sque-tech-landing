'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const codeExamples = [
  {
    title: 'AI Model Integration',
    language: 'python',
    code: `# Sque Tech AI Development
import sque_ai as sq

# Computer Vision Model
model = sq.vision.load_model('object_detection')
results = model.predict(image_data)

# Natural Language Processing
nlp = sq.nlp.SentimentAnalyzer()
sentiment = nlp.analyze("Customer feedback text")

# Deploy AI endpoint
sq.deploy(model, endpoint="/api/ai-vision")

✅ AI model deployed successfully!`,
  },
  {
    title: 'SaaS Architecture',
    language: 'typescript',
    code: `// Sque Tech SaaS Framework
import { SqueSaaS } from '@sque/saas-framework'

const app = new SqueSaaS({
  auth: {
    providers: ['oauth', 'email'],
    multiTenant: true
  },
  database: {
    type: 'postgresql',
    migrations: './db/migrations'
  },
  payments: {
    provider: 'stripe',
    plans: ['free', 'pro', 'enterprise']
  }
})

app.listen(3000) // 🚀 SaaS ready!`,
  },
  {
    title: 'Mobile App Development',
    language: 'jsx',
    code: `// React Native with Sque Tech SDK
import { SqueMobile } from '@sque/mobile-sdk'

const App = () => {
  const { analytics, auth, storage } = SqueMobile
  
  const handleUserAction = async () => {
    await analytics.track('button_click')
    const user = await auth.getCurrentUser()
    
    // Real-time data sync
    await storage.sync({
      userId: user.id,
      action: 'user_interaction'
    })
  }
  
  return <MobileInterface onAction={handleUserAction} />
}`,
  },
]

export function CodeShowcase() {
  const [activeExample, setActiveExample] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const currentExample = codeExamples[activeExample]

  useEffect(() => {
    setIsTyping(true)
    setDisplayedCode('')
    
    const code = currentExample.code
    let index = 0
    
    const typeWriter = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode(code.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeWriter)
      }
    }, 30)

    return () => clearInterval(typeWriter)
  }, [currentExample])

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Development workflows that accelerate innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Sque Tech&apos;s frameworks and SDKs simplify AI integration, SaaS development, and mobile app creation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Example tabs */}
          <div className="space-y-4">
            {codeExamples.map((example, index) => (
              <motion.button
                key={example.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveExample(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeExample === index
                    ? 'bg-white shadow-lg ring-2 ring-blue-500 ring-opacity-20'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${
                    activeExample === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {example.title}
                  </h3>
                </div>
                <div className={`text-sm ${
                  activeExample === index ? 'text-blue-600' : 'text-gray-500'
                } font-mono`}>
                  {example.language.toUpperCase()}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Code display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-xs text-gray-400 font-mono">
                    {currentExample.language === 'bash' ? 'terminal' : `${currentExample.title.toLowerCase()}.${currentExample.language}`}
                  </div>
                </div>
              </div>

              {/* Code content */}
              <div className="bg-black rounded-lg p-4 font-mono text-sm min-h-[300px] relative overflow-hidden">
                <pre className="text-green-400 whitespace-pre-wrap">
                  {displayedCode}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-5 bg-green-400 ml-1"
                    />
                  )}
                </pre>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3 shadow-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-3 shadow-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}