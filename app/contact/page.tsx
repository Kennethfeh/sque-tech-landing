import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                Ready to transform your legal practice? Our team is here to help you get started with Sque and maximize your revenue potential.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3 mb-16">
              {/* Sales */}
              <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sales & Demo</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a personalized demo to see how Sque can transform your legal practice
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Schedule Demo
                </button>
                <div className="mt-4 text-sm text-gray-500">
                  <p>sales@sque.ai</p>
                  <p>1-800-SQUE-LAW</p>
                </div>
              </div>

              {/* Support */}
              <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Support</h3>
                <p className="text-gray-600 mb-6">
                  Get help with implementation, training, and ongoing technical questions
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                  Get Support
                </button>
                <div className="mt-4 text-sm text-gray-500">
                  <p>support@sque.ai</p>
                  <p>24/7 Live Chat</p>
                </div>
              </div>

              {/* Partnerships */}
              <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  Explore integration opportunities and partnership programs
                </p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Partner With Us
                </button>
                <div className="mt-4 text-sm text-gray-500">
                  <p>partners@sque.ai</p>
                  <p>Integration Program</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Have a specific question? Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <div>
                  <label htmlFor="firm-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Law Firm Name
                  </label>
                  <input
                    type="text"
                    id="firm-name"
                    name="firm-name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
                    placeholder="Enter your law firm name"
                  />
                </div>
                <div>
                  <label htmlFor="firm-size" className="block text-sm font-medium text-gray-700 mb-2">
                    Firm Size
                  </label>
                  <select
                    id="firm-size"
                    name="firm-size"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
                  >
                    <option value="">Select firm size</option>
                    <option value="solo">Solo Practitioner</option>
                    <option value="2-10">2-10 attorneys</option>
                    <option value="11-50">11-50 attorneys</option>
                    <option value="51-200">51-200 attorneys</option>
                    <option value="200+">200+ attorneys</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiry-type"
                  name="inquiry-type"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
                >
                  <option value="">Select inquiry type</option>
                  <option value="demo">Request Demo</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="support">Technical Support</option>
                  <option value="integration">Integration Questions</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>

              <div className="mt-4 text-sm text-gray-500 text-center">
                We typically respond within 24 hours. For urgent matters, please call our support line.
              </div>
            </form>
          </div>
        </section>

        {/* Office Information */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Offices
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">San Francisco</h3>
                  <p className="text-gray-600 text-sm">Headquarters</p>
                </div>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>123 Legal District</p>
                  <p>San Francisco, CA 94105</p>
                  <p>Phone: (415) 555-0123</p>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">New York</h3>
                  <p className="text-gray-600 text-sm">East Coast Operations</p>
                </div>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>456 Law Center Plaza</p>
                  <p>New York, NY 10001</p>
                  <p>Phone: (212) 555-0123</p>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Austin</h3>
                  <p className="text-gray-600 text-sm">Development Center</p>
                </div>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>789 Tech Boulevard</p>
                  <p>Austin, TX 78701</p>
                  <p>Phone: (512) 555-0123</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}