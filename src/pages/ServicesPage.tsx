import React from 'react';
import { Package, ClipboardCheck, Truck, Wrench, Shield, CheckCircle2, AlertCircle, Clock, MessageCircle } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { SectionHeader } from '../components/sections/SectionHeader';

export function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <div className="bg-gray-900 text-white py-24">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white  tracking-tight">
            AOG & Critical Aviation <br />Support Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Engineering-led procurement and logistics risk management for business and regional aviation.
          </p>
        </Container>
      </div>

      {/* AOG & Critical Parts Procurement */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-6">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase">
                  AOG & Critical Parts Procurement
                </h2>
                <p className="text-gray-600 mb-8">
                  We source aircraft components from a vetted global supplier network and deliver them with complete, verified airworthiness documentation.
                </p>
                <Button href="/contact" variant="primary">REQUEST PARTS QUOTE →</Button>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">AIRCRAFT COMPONENTS WE SOURCE:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Rotables (landing gear, actuators, pumps, etc)</li>
                    <li>• Avionics & LRUs</li>
                    <li>• Expendables and consumables</li>
                    <li>• Wheels, brakes, and tires</li>
                    <li>• Engine accessories</li>
                    <li>• Interior & Structural components</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">CONDITIONS AVAILABLE:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Factory New (FN) / New (NE)</li>
                    <li>• Overhauled (OH)</li>
                    <li>• Serviceable (SV)</li>
                    <li>• As Removed (AR)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-gray-200" />

      {/* Ground Support Equipment & Tooling */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="inline-flex p-3 bg-white border border-gray-200 rounded-lg mb-6">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase">
                  GSE & Tooling
                </h2>
                <p className="text-gray-600 mb-8">
                  Beyond components, we support operators with specialized GSE and tooling required for maintenance operations.
                </p>
                <Button href="/contact" variant="outline" className="border-gray-900 text-gray-900">REQUEST GSE QUOTE →</Button>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">GSE WE SOURCE:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Ground power units (GPU)</li>
                    <li>• Air start units (ASU)</li>
                    <li>• Hydraulic test equipment</li>
                    <li>• Nitrogen charging equipment</li>
                    <li>• Tow bars and aircraft tugs</li>
                    <li>• Engine stands</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">TOOLING WE SOURCE:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Aircraft jacks (axle, wing, tripod)</li>
                    <li>• Maintenance platforms and stands</li>
                    <li>• Special tooling (OEM-specified)</li>
                    <li>• Calibrated instruments</li>
                    <li>• Safety equipment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering Verification Block */}
      <section className="py-24 bg-white border-y border-gray-200">
        <Container>
          <div className="max-w-4xl mx-auto border-2 border-blue-600 p-12">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="h-10 w-10 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 uppercase">Engineering Verification</h2>
            </div>
            <p className="text-lg font-bold text-blue-600 mb-8">
              This is a core operating requirement. We do not issue quotations without prior engineering verification.
            </p>
            <div className="space-y-4">
              {[
                "Part number verified for aircraft type and serial number",
                "Superseded or improved part numbers checked",
                "Condition appropriateness confirmed for application",
                "Documentation requirements validated",
                "Interchangeability confirmed where alternates offered"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500" /> {item}
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-500 italic">This is what separates risk management from brokerage.</p>
          </div>
        </Container>
      </section>

      {/* Logistics & Customs */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader title="AOG & Critical Logistics Management" subtitle="We manage the entire delivery chain — not just the shipment." className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-lg mb-4 uppercase">Courier Tier Selection</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Tier 1: DHL/FedEx Express + OBC</li>
                <li>• Tier 2: Next Flight Out (NFO)</li>
                <li>• Tier 3: Charter / AOG routing</li>
              </ul>
            </div>
            <div className="p-8 bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-lg mb-4 uppercase">Customs Risk Management</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• HS code validation</li>
                <li>• Import documentation pre-check</li>
                <li>• Broker coordination</li>
                <li>• High-risk lane alternatives</li>
              </ul>
            </div>
            <div className="p-8 bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-lg mb-4 uppercase">Delivery Execution</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Airside delivery coordination</li>
                <li>• Real-time status updates</li>
                <li>• Contingency routing</li>
                <li>• Escalation protocols</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Aircraft Types Supported */}
      <section className="py-24 bg-gray-900 text-white">
        <Container>
          <SectionHeader title="Aircraft Types Supported" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-white/20 p-8">
              <h4 className="text-blue-400 font-bold mb-6 uppercase tracking-widest">Primary Experience</h4>
              <ul className="space-y-2 text-xl font-bold">
                <li>EMBRAER</li>
                <li className="text-gray-400 text-lg font-normal">• Phenom 300 (EMB-505)</li>
                <li className="text-gray-400 text-lg font-normal">• Legacy 600 / 650</li>
                <li className="text-gray-400 text-lg font-normal">• ERJ 135 / ERJ 145</li>
              </ul>
            </div>
            <div className="border border-white/20 p-8">
              <h4 className="text-gray-400 font-bold mb-6 uppercase tracking-widest">Also Supported</h4>
              <ul className="space-y-4 text-gray-400">
                <li>• Bombardier Challenger / Global</li>
                <li>• Dassault Falcon series</li>
                <li>• Gulfstream series</li>
                <li>• ATR 42 / 72</li>
              </ul>
              <p className="mt-6 text-sm italic text-gray-500">For non-Embraer platforms, we apply the same engineering discipline.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Response Times */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-y border-gray-200 py-12">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-sm mb-4">
                <Clock className="h-4 w-4" /> Target Response Times
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div><span className="block font-bold text-2xl text-red-600">2-4 hrs</span> <span className="text-sm text-gray-500 uppercase">AOG Requests</span></div>
                <div><span className="block font-bold text-2xl text-gray-900">Same Day</span> <span className="text-sm text-gray-500 uppercase">Critical</span></div>
                <div><span className="block font-bold text-2xl text-gray-900">24-48 hrs</span> <span className="text-sm text-gray-500 uppercase">Routine</span></div>
              </div>
            </div>
            <div className="bg-green-50 p-6 border border-green-100 rounded-sm">
               <p className="text-sm text-green-800 font-medium mb-2">For AOG Support:</p>
               <Button href="https://wa.me/+447999638984" target='_blank' className="bg-green-600 hover:bg-green-700 border-none">
                 <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Now
               </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Don't Do */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8 uppercase">What AvTrix Does Not Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center justify-center gap-2 text-gray-600"><AlertCircle className="h-5 w-5 text-red-500" /> No Inventory</div>
              <div className="flex items-center justify-center gap-2 text-gray-600"><AlertCircle className="h-5 w-5 text-red-500" /> No Installation</div>
              <div className="flex items-center justify-center gap-2 text-gray-600"><AlertCircle className="h-5 w-5 text-red-500" /> No Release Authority</div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              AvTrix is a sourcing and logistics coordination service, not an airworthiness authority. Final airworthiness decisions remain with the operator or their CAMO.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
      
      {/* Mini Footer Disclaimers */}
      <div className="bg-white py-12 border-t border-gray-100 text-[10px] text-gray-400 uppercase tracking-widest text-center">
        <Container>
          <p className="max-w-4xl mx-auto leading-loose">
            AvTrix coordinates sourcing and logistics based on information provided by the client. Final airworthiness acceptance, installation approval, and operational release remain the responsibility of the operator or CAMO.
          </p>
        </Container>
      </div>
    </main>
  );
}