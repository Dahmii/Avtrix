import React from 'react';
import { Container } from '../components/ui/Container';

export function PrivacyPolicy() {
  const lastUpdated = "February 14, 2026";

  return (
    <main className="pt-20">
      <div className="bg-gray-900 text-white py-16">
        <Container>
          <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: {lastUpdated}</p>
        </Container>
      </div>

      <section className="py-20 bg-white text-gray-800">
        <Container>
          <div className="max-w-4xl prose prose-blue">
            <h2 className="text-2xl font-bold mb-4">1. Who We Are</h2>
            <p className="mb-6">
              AvTrix Ltd is a UK-based business providing aviation-related services and support. 
              Address: 27 Old Gloucester Street, London, WC1N 3AX.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. What Information We Collect</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Name and business contact details</li>
              <li>Aircraft details and technical requirements</li>
              <li>Contents of your inquiry and correspondence</li>
              <li>Technical data (IP address, browser type) via essential cookies</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="mb-6">
              We process data under <strong>Legitimate Interests</strong> to respond to business inquiries, 
              provide engineering-verified quotes, and maintain professional records.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Data Storage and Transfers</h2>
            <p className="mb-6">
              Data is stored on secure servers. To simplify governance, we utilize UK-based hosting 
              and Cloudflare security services. While we operate globally, your data is protected 
              under UK GDPR standards.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="mb-6">
              You have the right to access, correct, or request deletion of your data. 
              For any inquiries, contact us at <strong>info@avtrixservices.com</strong>.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}