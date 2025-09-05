import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              Sque, Inc. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This Privacy Policy describes how we collect, use, and share information when you use our Legal Revenue & 
              Operating System platform and related services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, phone number, and law firm details</li>
              <li><strong>Professional Information:</strong> Bar admission details, practice areas, and professional credentials</li>
              <li><strong>Billing Information:</strong> Payment details and billing addresses</li>
              <li><strong>Time and Billing Data:</strong> Work activities, time entries, client matters, and billing records</li>
            </ul>

            <h3>Information We Collect Automatically</h3>
            <ul>
              <li><strong>Usage Data:</strong> How you interact with our platform, features used, and time spent</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
              <li><strong>Log Data:</strong> Server logs, error reports, and performance metrics</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our legal revenue management services</li>
              <li>Process payments and manage your account</li>
              <li>Generate time tracking reports and billing documents</li>
              <li>Improve our platform and develop new features</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send important updates about our services</li>
              <li>Comply with legal obligations and professional standards</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              <li><strong>Service Providers:</strong> With third-party vendors who assist us in providing our services</li>
              <li><strong>Legal Requirements:</strong> When required by law, legal process, or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul>
              <li>End-to-end encryption for all data transmission</li>
              <li>Secure data centers with 24/7 monitoring</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication protocols</li>
              <li>HIPAA and SOC 2 compliance standards</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services and comply with legal obligations. 
              Time and billing records may be retained for up to 7 years as required by professional standards and tax regulations.
            </p>

            <h2>Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate 
              safeguards are in place to protect your information in accordance with applicable data protection laws.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal 
              information from children under 18.
            </p>

            <h2>Cookie Policy</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. 
              You can control cookie preferences through your browser settings.
            </p>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by email or 
              through our platform. Your continued use of our services constitutes acceptance of the updated policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <p><strong>Email:</strong> privacy@sque.ai</p>
              <p><strong>Mail:</strong> Sque, Inc.<br />
              Attn: Privacy Officer<br />
              123 Legal District<br />
              San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> 1-800-SQUE-LAW</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}