import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Legal Practice Resources
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                Expert guides, templates, and resources to help you maximize your legal practice revenue and streamline operations.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Guides & Whitepapers */}
              <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Guides & Whitepapers</h3>
                <ul className="text-gray-600 space-y-3">
                  <li>• The Complete Guide to Legal Time Tracking</li>
                  <li>• Maximizing Realization Rates in Legal Practice</li>
                  <li>• Best Practices for Legal Billing Compliance</li>
                  <li>• Technology Adoption in Legal Firms</li>
                  <li>• Client Communication Strategies</li>
                  <li>• Revenue Analytics for Law Firms</li>
                </ul>
              </div>

              {/* Templates & Tools */}
              <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Templates & Tools</h3>
                <ul className="text-gray-600 space-y-3">
                  <li>• Legal Fee Agreement Templates</li>
                  <li>• Time Entry Best Practice Checklist</li>
                  <li>• Client Onboarding Templates</li>
                  <li>• Billing Dispute Resolution Guide</li>
                  <li>• Revenue Calculator Tools</li>
                  <li>• Productivity Assessment Templates</li>
                </ul>
              </div>

              {/* Training & Webinars */}
              <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Training & Webinars</h3>
                <ul className="text-gray-600 space-y-3">
                  <li>• Getting Started with Sque</li>
                  <li>• Advanced Time Tracking Techniques</li>
                  <li>• Client Portal Setup & Management</li>
                  <li>• Financial Reporting & Analytics</li>
                  <li>• Integration Best Practices</li>
                  <li>• Firm-wide Implementation Strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Featured Resources
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Featured Article 1 */}
              <article className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>Guide</span>
                    <span className="mx-2">•</span>
                    <span>15 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    The ROI of Legal Technology: How Automated Time Tracking Increases Revenue by 22%
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Learn how law firms are using automated time tracking to recover lost billable hours and increase their bottom line. This comprehensive guide includes real case studies and implementation strategies.
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    Read Article →
                  </button>
                </div>
              </article>

              {/* Featured Article 2 */}
              <article className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-600 to-blue-600"></div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>Template</span>
                    <span className="mx-2">•</span>
                    <span>Download</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Legal Fee Agreement Template: Transparent Billing Practices
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our comprehensive fee agreement template ensures transparency with clients and reduces billing disputes. Includes alternative fee arrangement options and clear scope definitions.
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    Download Template →
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Help Center */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Help Center
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Get the support you need to maximize your Sque experience
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">FAQ</h3>
                <p className="text-sm text-gray-600">Common questions and answers</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-sm text-gray-600">Detailed setup and user guides</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600">Instant support when you need it</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
                <p className="text-sm text-gray-600">Get help from our experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Stay Updated with Legal Technology Insights
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Get the latest tips, guides, and best practices delivered to your inbox monthly
              </p>
              <div className="mt-8 flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-l-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none"
                />
                <button className="rounded-r-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-gray-50 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}