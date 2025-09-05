import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Complete Legal Revenue Management
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90 max-w-3xl mx-auto">
                Everything you need to capture, track, bill, and collect revenue from your legal practice. 
                Stop losing billable time with our comprehensive legal operating system.
              </p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Built for Legal Professionals
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Designed specifically for attorneys, law firms, and legal departments
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Automatic Time Capture */}
              <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatic Time Capture</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Background monitoring of all legal work</li>
                  <li>• Smart categorization by matter and client</li>
                  <li>• Integration with Office 365, Google Workspace</li>
                  <li>• Email and document time tracking</li>
                  <li>• Meeting and call time capture</li>
                  <li>• Mobile app for time tracking on-the-go</li>
                </ul>
              </div>

              {/* Proof Bundle Creation */}
              <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Evidence-Based Billing</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Downloadable proof bundles for every entry</li>
                  <li>• Screenshots of work performed</li>
                  <li>• Document access logs and timestamps</li>
                  <li>• Email thread documentation</li>
                  <li>• Reduce billing disputes by 87%</li>
                  <li>• Client confidence in billing accuracy</li>
                </ul>
              </div>

              {/* Smart Billing */}
              <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Billing System</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Automatic invoice generation</li>
                  <li>• Custom billing rates per client/matter</li>
                  <li>• Trust account management</li>
                  <li>• Payment processing integration</li>
                  <li>• Collections automation</li>
                  <li>• Financial reporting and analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Advanced Legal Technology
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Cutting-edge features designed for modern legal practices
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Client Portal */}
              <div className="flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Client Portal & Communication</h3>
                </div>
                <ul className="text-gray-600 space-y-3 text-lg">
                  <li>• Secure client portal for case updates</li>
                  <li>• Real-time billing transparency</li>
                  <li>• Document sharing and collaboration</li>
                  <li>• Client messaging and notifications</li>
                  <li>• Mobile-responsive client access</li>
                  <li>• White-label portal customization</li>
                </ul>
              </div>

              {/* Analytics & Reporting */}
              <div className="flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Revenue Analytics</h3>
                </div>
                <ul className="text-gray-600 space-y-3 text-lg">
                  <li>• Real-time revenue tracking</li>
                  <li>• Attorney performance metrics</li>
                  <li>• Client profitability analysis</li>
                  <li>• Realization rate optimization</li>
                  <li>• Custom dashboards and reports</li>
                  <li>• Predictive revenue forecasting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Seamless Integrations
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Connect with the tools your legal practice already uses
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-semibold text-gray-600">Office 365</span>
                </div>
                <h3 className="font-semibold text-gray-900">Microsoft Office</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-semibold text-gray-600">Google</span>
                </div>
                <h3 className="font-semibold text-gray-900">Google Workspace</h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-semibold text-gray-600">QB</span>
                </div>
                <h3 className="font-semibold text-gray-900">QuickBooks</h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-semibold text-gray-600">LexisNexis</span>
                </div>
                <h3 className="font-semibold text-gray-900">Legal Research</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Legal Practice?
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Join thousands of attorneys who have revolutionized their billing and revenue management
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-4">
                <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg hover:bg-gray-50 transition-colors duration-300">
                  Start Free Trial
                </button>
                <button className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-300">
                  Schedule Demo
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