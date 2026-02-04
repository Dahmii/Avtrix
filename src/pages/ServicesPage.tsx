import React from 'react';
import { Package, ClipboardCheck, Truck, Wrench } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { CTASection } from '../components/sections/CTASection';

export function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Specialized aviation procurement and sourcing services designed to support operational efficiency, safety compliance, and continuity for commercial and private aircraft operators.
          </p>
        </Container>
      </div>

      {/* Aviation Procurement & Sourcing */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Aviation Procurement & Sourcing
            </h2>
            <p className="text-gray-600 mb-6">
              Avtrix provides professional procurement and sourcing support for aircraft ground support equipment (GSE) and aircraft components, acting on behalf of operators, MROs, and aviation service providers.
            </p>
            <p className="text-gray-600 mb-6">
              We work with a global network of approved manufacturers, OEMs, distributors, and certified suppliers to identify, evaluate, and coordinate the supply of equipment and components based on client requirements.
            </p>
            <p className="text-gray-600">
              Avtrix acts strictly as a procurement and sourcing agent and does not hold inventory or manufacture equipment or components.
            </p>
          </div>
        </Container>
      </section>

      <hr className="border-gray-200" />

      {/* GSE Procurement */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-6">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ground Support Equipment (GSE) Procurement
                </h2>
                <p className="text-gray-600 mb-6">
                  We assist clients in sourcing a wide range of aircraft ground support equipment through approved suppliers, ensuring compliance with operational, safety, and regulatory requirements.
                </p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <ul className="space-y-4 text-gray-700">
                <li>Tow tractors and tugs</li>
                <li>Ground power units (GPU)</li>
                <li>Air start units (ASU)</li>
                <li>Belt loaders and cargo loaders</li>
                <li>Passenger stairs and access platforms</li>
                <li>De-icing and servicing equipment</li>
                <li>Tooling and auxiliary ground equipment</li>
              </ul>
              <p className="text-gray-600 mt-8">
                All equipment is sourced upon client instruction and supplied directly by third-party manufacturers or vendors.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-gray-200" />

      {/* Aircraft Components & Spares */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-6">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Aircraft Components & Spares Sourcing
                </h2>
                <p className="text-gray-600 mb-6">
                  Avtrix provides global sourcing support for certified aircraft components, spares, and consumables through OEMs and approved distributors.
                </p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <ul className="space-y-4 text-gray-700">
                <li>Rotable components</li>
                <li>Line-replaceable units (LRUs)</li>
                <li>Consumables and expendables</li>
                <li>Tooling and ground equipment spares</li>
                <li>AOG and urgent procurement support</li>
              </ul>
              <p className="text-gray-600 mt-8">
                Every sourced component is supported by full traceability and applicable certification as provided by the original supplier.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-gray-200" />

      {/* Logistics & Supplier Coordination */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-6">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Logistics & Supplier Coordination
                </h2>
              </div>
            </div>
            <div className="lg:w-2/3">
              <ul className="space-y-4 text-gray-700">
                <li>Supplier liaison and verification</li>
                <li>Documentation and certification review</li>
                <li>International logistics coordination</li>
                <li>Dangerous goods handling via approved carriers</li>
              </ul>
              <p className="text-gray-600 mt-8">
                All shipping and fulfillment activities are performed by third-party logistics providers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-gray-200" />

      {/* Compliance & Quality Support */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-6">
                  <ClipboardCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Compliance & Quality Support
                </h2>
              </div>
            </div>
            <div className="lg:w-2/3">
              <ul className="space-y-4 text-gray-700">
                <li>Supplier due diligence</li>
                <li>Documentation verification</li>
                <li>Traceability support</li>
                <li>Regulatory alignment with client QA requirements</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-gray-200" />

      {/* Commercial Model */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Commercial Model
            </h2>
            <p className="text-gray-600 mb-4">
              Avtrix operates on a service-based model. Compensation is derived from procurement fees or sourcing commissions agreed with clients in advance.
            </p>
            <p className="text-gray-600">
              Avtrix does not trade, resell, or warehouse equipment or aircraft components and acts solely as an intermediary between buyers and approved suppliers.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Need specific operational support?"
        description="Our team is ready to discuss your requirements and provide a detailed capability statement."
      />
    </main>
  );
}
