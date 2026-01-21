import React from 'react';
import { Truck, Wrench, Package, ClipboardCheck } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/sections/SectionHeader';
import { CTASection } from '../components/sections/CTASection';
export function ServicesPage() {
  return <main className="pt-20">
      {/* Header */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Specialized aviation support services designed to maintain
            operational efficiency and safety compliance for commercial and
            private operators.
          </p>
        </Container>
      </div>

      {/* Ground Handling */}
      <section className="py-24 bg-white" id="ground-handling">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg mb-6">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ground Handling
                </h2>
                <p className="text-gray-600 mb-6">
                  End-to-end ground support ensuring rapid, safe, and compliant
                  aircraft turnarounds.
                </p>
                <ul className="space-y-3 border-t border-gray-100 pt-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    Ramp Services
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    Passenger Handling
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    Cargo & Mail Handling
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    Load Control
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-6">
                  Avtrix provides comprehensive ground handling services
                  tailored to the specific needs of airlines and private
                  operators. Our team is trained to the highest industry
                  standards, ensuring that every interaction with your aircraft
                  is conducted with precision and care.
                </p>
                <p className="mb-8">
                  We understand that turnaround time is critical to your
                  schedule. Our optimized processes and coordinated team efforts
                  minimize ground time while strictly adhering to safety
                  protocols.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Safety Compliance
                    </h3>
                    <p className="text-sm">
                      Rigorous adherence to ISAGO standards and airline-specific
                      safety manuals.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Equipment Reliability
                    </h3>
                    <p className="text-sm">
                      Modern, well-maintained GSE fleet to support all aircraft
                      types.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-gray-200" />

      {/* Spares & Supply */}
      <section className="py-24 bg-white" id="spares">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg mb-6">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Aircraft Spares
                </h2>
                <p className="text-gray-600 mb-6">
                  Global sourcing and supply of certified aircraft parts and
                  consumables.
                </p>
                <ul className="space-y-3 border-t border-gray-100 pt-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    Rotables & Consumables
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    AOG Support
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    Tooling & Equipment
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    Logistics Management
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-6">
                  Our spares and supply division is dedicated to keeping your
                  fleet airworthy. We leverage a global network of approved
                  suppliers and OEMs to source hard-to-find parts and everyday
                  consumables with equal efficiency.
                </p>
                <p className="mb-8">
                  Every component we supply comes with full traceability and
                  certification (EASA Form 1 / FAA 8130-3), ensuring seamless
                  acceptance by your quality assurance department.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Documentation
                    </h3>
                    <p className="text-sm">
                      Complete traceability and certification packages with
                      every shipment.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Logistics</h3>
                    <p className="text-sm">
                      Global shipping solutions including dangerous goods
                      handling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection title="Need specific operational support?" description="Our team is ready to discuss your requirements and provide a detailed capability statement." />
    </main>;
}