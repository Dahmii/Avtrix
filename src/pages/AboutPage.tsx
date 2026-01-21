import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/sections/SectionHeader';
import { CTASection } from '../components/sections/CTASection';
export function AboutPage() {
  return <main className="pt-20">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Built on Precision
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Avtrix was founded to bridge the gap between operational
              complexity and service reliability in the aviation sector. We are
              a team of aviation professionals dedicated to technical
              excellence.
            </p>
          </div>
        </Container>
      </div>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Avtrix is a specialized aviation services provider focused on
                  ground handling and aircraft parts supply. Headquartered in
                  London with operational hubs across key regions, we support
                  commercial airlines, cargo operators, and private aviation
                  clients.
                </p>
                <p>
                  Our organization is structured around the principles of Safety
                  Management Systems (SMS) and Quality Assurance. We do not just
                  deliver services; we deliver confidence. When you partner with
                  Avtrix, you are partnering with a team that understands the
                  regulatory and operational pressures of modern aviation.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&q=80&w=1000" alt="Avtrix team meeting" className="rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <Container>
          <SectionHeader title="Operational Values" subtitle="The core principles that define our service delivery and corporate culture." centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600">
                We operate with transparency and honesty. In an industry where
                precision is paramount, we ensure our communication and
                documentation are always accurate and reliable.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety</h3>
              <p className="text-gray-600">
                Safety is non-negotiable. It is embedded in every procedure,
                from the ramp to the warehouse. We empower every employee to
                stop operations if safety is compromised.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reliability
              </h3>
              <p className="text-gray-600">
                Aviation runs on schedules. We are committed to delivering our
                services and parts on time, every time, to minimize your
                operational disruptions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>;
}