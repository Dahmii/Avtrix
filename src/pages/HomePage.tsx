import React from 'react';
import { Layout, Settings, Shield, Globe } from 'lucide-react';
import { HeroSection } from '../components/sections/HeroSection';
import { SectionHeader } from '../components/sections/SectionHeader';
import { ServiceCard } from '../components/sections/ServiceCard';
import { TrustBlock } from '../components/sections/TrustBlock';
import { CTASection } from '../components/sections/CTASection';
import { Container } from '../components/ui/Container';
export function HomePage() {
  return <main>
      <HeroSection title="Dependable Aviation Solutions" subtitle="Ground handling services and aircraft spare parts supply with uncompromising safety and operational reliability." ctaText="Request Information" ctaLink="/contact" />

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader title="Core Capabilities" subtitle="Comprehensive support solutions designed for operational continuity and technical compliance." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard icon={Layout} title="Ground Handling" description="Comprehensive ground handling services ensuring operational continuity and safety compliance across all phases of aircraft turnaround. From ramp services to passenger handling." link="/services" />
            <ServiceCard icon={Settings} title="Spares & Supply" description="Reliable aircraft spare parts supply with technical accuracy and timely delivery. We maintain a robust network of certified suppliers to support your maintenance requirements." link="/services" />
            <ServiceCard icon={Shield} title="Equipment support services" description="Specialized equipment support services tailored to meet the unique demands of aviation operations, ensuring seamless integration and optimal performance." link="/services"  />
            <ServiceCard icon={Globe} title="Technical Solutions" description="Innovative technical solutions designed to enhance operational efficiency, safety, and compliance within the aviation sector." link="/services"  />
          </div>
        </Container>
      </section>

      <TrustBlock />

      {/* Operational Philosophy */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionHeader title="Operational Philosophy" subtitle="Our approach is built on three foundational pillars that guide every decision and action we take." className="mb-8" />

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Uncompromising Safety
                    </h4>
                    <p className="text-gray-600">
                      Safety is not just a policy; it is the prerequisite for
                      all our operations. We maintain strict adherence to
                      international safety standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Global Standards
                    </h4>
                    <p className="text-gray-600">
                      Our procedures align with IATA and ICAO regulations,
                      ensuring seamless integration with international carriers
                      and operators.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1542296332-2e44a99cfef9?auto=format&fit=crop&q=80&w=1000" alt="Aviation maintenance inspection" className="rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>;
}