'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Kenneth Feh',
    role: 'CEO & Founder',
    bio: 'Former HSBC senior engineer with 8+ years in fintech and AI solutions.',
    skills: ['Leadership', 'Architecture', 'AI Strategy']
  },
  {
    name: 'Alex Singh',
    role: 'CTO',
    bio: 'Ex-Goldman Sachs tech lead specializing in scalable backend systems.',
    skills: ['System Design', 'Cloud Architecture', 'DevOps']
  },
  {
    name: 'Maria Rodriguez',
    role: 'Lead AI Engineer',
    bio: 'PhD in Machine Learning, former Google researcher in computer vision.',
    skills: ['Deep Learning', 'Computer Vision', 'NLP']
  },
  {
    name: 'Li Chen',
    role: 'Senior Developer',
    bio: 'Full-stack expert with startup experience in SaaS and mobile development.',
    skills: ['React', 'Node.js', 'Mobile Development']
  }
]

export function Team() {
  return (
    <section id="team" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the expert team behind Sque Tech
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team combines experience from top financial institutions and cutting-edge startups to deliver world-class solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/sque-team.svg" 
              alt="Sque Tech Team" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-sm ring-1 ring-gray-200">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center ring-2 ring-white">
                <span className="text-white text-xs font-bold">KF</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center ring-2 ring-white">
                <span className="text-white text-xs font-bold">AS</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center ring-2 ring-white">
                <span className="text-white text-xs font-bold">MR</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center ring-2 ring-white">
                <span className="text-white text-xs font-bold">LC</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">25+ years</span> combined experience
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}