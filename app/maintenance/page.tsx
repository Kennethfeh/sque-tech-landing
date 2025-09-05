import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Maintenance - Sque',
  description: 'Sque is currently undergoing maintenance. We will be back soon.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-8 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">S</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          We will be back soon!
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          We are currently performing scheduled maintenance to improve your experience. 
          Thank you for your patience.
        </p>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            For urgent matters, please contact us:
          </div>
          
          <Link
            href="mailto:support@sque.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Support
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            © 2024 Sque, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}