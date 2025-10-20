import React from 'react';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-heading">
            Tier 1 App Privacy Policy
          </h1>
          <p className="text-lg text-heading-muted mb-8">
            Effective Date: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-body">
            <p className="text-body-lg mb-8">
              We value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard information when you use Tier 1 App.
            </p>

            <h2 className="text-2xl font-light mb-6 text-heading">1. Information We Collect</h2>
            <p className="mb-6">
              We collect the following types of information to provide and improve our services:
            </p>

            <h3 className="text-xl font-light mb-4 text-heading">a. Account Information</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Email address (required for account creation and authentication)</li>
              <li>Display name or username (if provided)</li>
            </ul>

            <h3 className="text-xl font-light mb-4 text-heading">b. Usage Data</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Interactions within Tier 1 App (e.g., content access, progress tracking)</li>
              <li>Device information (such as model, operating system version, and app version)</li>
              <li>Log data (standard server logs, IP address, timestamps)</li>
            </ul>

            <h3 className="text-xl font-light mb-4 text-heading">c. Optional Data</h3>
            <p className="mb-6">
              Any additional information you choose to provide, such as feedback or profile details.
            </p>

            <h3 className="text-xl font-light mb-4 text-heading">d. Storage Data</h3>
            <p className="mb-8">
              Files and content you access are stored securely in our backend infrastructure.
            </p>

            <h2 className="text-2xl font-light mb-6 text-heading">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Create and manage your account</li>
              <li>Provide access to Tier 1 App features and content</li>
              <li>Improve app performance and user experience</li>
              <li>Communicate with you about updates, features, or support</li>
              <li>Ensure security, prevent fraud, and comply with legal requirements</li>
            </ul>
            <p className="mb-8 font-medium">
              We do not sell or rent your personal data.
            </p>

            <h2 className="text-2xl font-light mb-6 text-heading">3. Data Storage and Security</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Your data is securely stored using industry-standard infrastructure</li>
              <li>We use encryption for data in transit and at rest</li>
              <li>Access to your personal data is restricted to authorized personnel only</li>
            </ul>

            <h2 className="text-2xl font-light mb-6 text-heading">4. Data Sharing</h2>
            <p className="mb-4">We do not share personal information with third parties except:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Service providers who support Tier 1 App infrastructure and are bound by confidentiality agreements</li>
              <li>When required by law or to protect the security and integrity of the app</li>
            </ul>

            <h2 className="text-2xl font-light mb-6 text-heading">5. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for data processing (where applicable)</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p className="mb-8">
              To exercise these rights, contact us at{' '}
              <a href="mailto:tier1@jamesaking.com" className="text-link-underline hover:text-gray-900 dark:hover:text-white transition-colors">
                tier1@jamesaking.com
              </a>
            </p>

            <h2 className="text-2xl font-light mb-6 text-heading">6. Data Retention</h2>
            <p className="mb-8">
              We retain your data for as long as your account is active or as needed to provide Tier 1 App services. 
              If you delete your account, we will remove or anonymize your data within a reasonable timeframe.
            </p>

            <h2 className="text-2xl font-light mb-6 text-heading">7. Cookies and Tracking</h2>
            <p className="mb-8">
              We may use minimal cookies or similar technologies for essential functions and analytics. 
              You can manage or disable cookies through your device settings.
            </p>

            <h2 className="text-2xl font-light mb-6 text-heading">8. Third-Party Services</h2>
            <p className="mb-8">
              Tier 1 App may contain links to third-party websites. We are not responsible for the privacy 
              practices or content of those third parties. Please review their privacy policies before 
              providing them with any information.
            </p>

            <h2 className="text-2xl font-light mb-6 text-heading">9. Children's Privacy</h2>
            <p className="mb-8">
              Tier 1 App is not intended for children under 13 (or the applicable age in your country). 
              We do not knowingly collect personal data from children.
            </p>

            <h2 className="text-2xl font-light mb-6 text-heading">10. Changes to This Privacy Policy</h2>
            <p className="mb-8">
              We may update this policy from time to time. The updated version will be posted on our website 
              with a new "Effective Date."
            </p>

            <h2 className="text-2xl font-light mb-6 text-heading">11. Contact Us</h2>
            <p className="mb-8">
              If you have questions or concerns about this Privacy Policy, you can reach us at:
            </p>
            <div className="space-y-2">
              <p>
                📧 Email:{' '}
                <a href="mailto:tier1@jamesaking.com" className="text-link-underline hover:text-gray-900 dark:hover:text-white transition-colors">
                  tier1@jamesaking.com
                </a>
              </p>
              <p>
                🌐 Website:{' '}
                <a href="https://jamesaking.com" className="text-link-underline hover:text-gray-900 dark:hover:text-white transition-colors">
                  jamesaking.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
