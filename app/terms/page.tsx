import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your use of Sque's Legal Revenue & Operating System platform 
              and related services ("Services") provided by Sque, Inc. ("Company," "we," "our," or "us").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. 
              If you do not agree to these Terms, you may not use our Services.
            </p>

            <h2>Description of Services</h2>
            <p>
              Sque provides a comprehensive Legal Revenue & Operating System designed for legal professionals, including:
            </p>
            <ul>
              <li>Automated time tracking and capture</li>
              <li>Billing and invoicing management</li>
              <li>Client and matter management</li>
              <li>Financial reporting and analytics</li>
              <li>Document and proof bundle generation</li>
              <li>Integration with third-party legal and business applications</li>
            </ul>

            <h2>User Accounts and Registration</h2>
            <p>
              To use our Services, you must create an account and provide accurate, complete information. You are 
              responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring your account information remains current and accurate</li>
            </ul>

            <h2>Acceptable Use</h2>
            <p>You agree to use our Services only for lawful purposes and in compliance with these Terms. You may not:</p>
            <ul>
              <li>Use our Services for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws, regulations, or professional ethics rules</li>
              <li>Interfere with or disrupt our Services or servers</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Reverse engineer, decompile, or attempt to extract our source code</li>
              <li>Use our Services to spam or send unsolicited communications</li>
            </ul>

            <h2>Professional Responsibility</h2>
            <p>
              As a legal professional using our Services, you acknowledge that:
            </p>
            <ul>
              <li>You remain solely responsible for compliance with professional ethics rules</li>
              <li>You must maintain attorney-client privilege and confidentiality obligations</li>
              <li>You are responsible for the accuracy of all time entries and billing records</li>
              <li>You must review all automatically captured time before billing clients</li>
              <li>Our Services do not constitute legal advice or professional judgment</li>
            </ul>

            <h2>Data Ownership and Security</h2>
            <p>
              You retain ownership of all data you upload to or create using our Services ("Your Data"). We will:
            </p>
            <ul>
              <li>Not access Your Data except as necessary to provide Services or as authorized by you</li>
              <li>Implement reasonable security measures to protect Your Data</li>
              <li>Allow you to export Your Data in standard formats</li>
              <li>Delete Your Data upon termination, subject to legal retention requirements</li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
              Our Services are provided on a subscription basis. Payment terms include:
            </p>
            <ul>
              <li>Fees are billed in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>Price changes require 30 days advance notice</li>
              <li>Late payments may result in service suspension</li>
              <li>You are responsible for applicable taxes</li>
            </ul>

            <h2>Service Availability</h2>
            <p>
              We strive to maintain high service availability but cannot guarantee uninterrupted access. We may:
            </p>
            <ul>
              <li>Perform scheduled maintenance with advance notice</li>
              <li>Temporarily suspend service for emergency maintenance</li>
              <li>Modify or discontinue features with reasonable notice</li>
            </ul>
            <p>
              We target 99.9% uptime and provide service level credits for significant outages as outlined in our SLA.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              Our Services, including all software, technology, and content, are protected by intellectual property laws. 
              We grant you a limited, non-exclusive, non-transferable license to use our Services in accordance with these Terms.
            </p>

            <h2>Third-Party Integrations</h2>
            <p>
              Our Services may integrate with third-party applications. Your use of such integrations is subject to 
              the third party's terms and privacy policies. We are not responsible for third-party services.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY IS LIMITED TO THE AMOUNT YOU PAID FOR OUR SERVICES 
              IN THE 12 MONTHS PRECEDING THE CLAIM. WE ARE NOT LIABLE FOR INDIRECT, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>

            <h2>Professional Liability Disclaimer</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES. WE DO NOT WARRANT THAT OUR SERVICES WILL MEET YOUR 
              PROFESSIONAL REQUIREMENTS OR BE ERROR-FREE. YOU REMAIN SOLELY RESPONSIBLE FOR YOUR PROFESSIONAL OBLIGATIONS.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold us harmless from claims arising from your use of our Services, violation of 
              these Terms, or infringement of any rights of others.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate these Terms at any time. Upon termination:
            </p>
            <ul>
              <li>Your access to our Services will cease</li>
              <li>You may export Your Data for a limited period</li>
              <li>We will delete Your Data after the retention period</li>
              <li>Accrued charges remain payable</li>
            </ul>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of California, without regard to conflict of law principles. 
              Any disputes will be resolved in the federal or state courts located in San Francisco, California.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may modify these Terms from time to time. Material changes will be communicated with 30 days notice. 
              Your continued use of our Services constitutes acceptance of the modified Terms.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full 
              force and effect.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <p><strong>Email:</strong> legal@sque.ai</p>
              <p><strong>Mail:</strong> Sque, Inc.<br />
              Attn: Legal Department<br />
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