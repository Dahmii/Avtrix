import React from 'react';
import { ShieldCheck, FileCheck, AlertTriangle } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/sections/SectionHeader';
import { CTASection } from '../components/sections/CTASection';
export function SafetyPage() {
  return <main className="pt-20">
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Safety & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our commitment to safety is absolute. We operate under a robust
            Safety Management System (SMS) aligned with ICAO Annex 19 standards.
          </p>
        </Container>
      </div>

      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Safety Culture
              </h2>
              <div className="prose prose-lg text-gray-600 mb-12">
                <p>
                  At Avtrix, safety is not a department; it is a mindset that
                  permeates every level of our organization. We foster a "Just
                  Culture" where reporting of safety concerns is encouraged and
                  valued. This proactive approach allows us to identify and
                  mitigate risks before they become incidents.
                </p>
                <p>
                  Our staff undergoes rigorous initial and recurrent training,
                  ensuring they are not only competent in their technical duties
                  but also fully aware of the safety implications of their
                  actions.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Standards Alignment
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      IATA Standards
                    </h3>
                    <p className="text-gray-600">
                      Our ground handling procedures are based on the IATA
                      Ground Operations Manual (IGOM) and ISAGO standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileCheck className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Quality Management
                    </h3>
                    <p className="text-gray-600">
                      We maintain an ISO 9001:2015 certified Quality Management
                      System to ensure consistent service delivery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Risk Management
                    </h3>
                    <p className="text-gray-600">
                      Continuous risk assessment and mitigation strategies are
                      applied to all operational changes and new projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 border border-gray-200 h-fit">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Compliance Statement
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                "Avtrix is committed to conducting all operations in compliance
                with applicable local and international regulations. We pledge
                to provide the necessary resources to maintain the highest
                standards of safety and quality."
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900">
                  Director of Operations
                </p>
                <p className="text-sm text-gray-500">
                  Avtrix Aviation Solutions
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection title="Request our Safety Credentials" description="We are happy to provide our safety manual table of contents and insurance certificates to prospective partners." buttonText="Contact Safety Dept" />
    </main>;
}