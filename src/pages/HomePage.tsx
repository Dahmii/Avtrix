import React from 'react';
import { Check, Shield, Globe, ArrowRight, MessageCircle, Tooltip } from 'lucide-react';
import { HeroSection } from '../components/sections/HeroSection';
import { SectionHeader } from '../components/sections/SectionHeader';
import { ServiceCard } from '../components/sections/ServiceCard';
import { TrustBlock } from '../components/sections/TrustBlock';
import { CTASection } from '../components/sections/CTASection';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export function HomePage() {
  return <main>
      <HeroSection 
        title={<>AOG-Focused Aircraft Support.<br />Engineering-Verified.<br />Risk-Managed Delivery.</>} 
        subtitle="When aircraft are grounded, speed isn't enough. We manage part correctness, documentation, customs risk, and delivery — end-to-end." 
        ctaText="REQUEST A QUOTE" 
        ctaLink="/contact" 
      />

      {/* Why Avtrix */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader title="Why Avtrix" subtitle="Comprehensive support solutions designed for operational continuity and technical compliance." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Check} 
              title="ENGINEERING-VERIFIED" 
              description="Every quoted part is verified against aircraft configuration, serial effectivity, and documentation — before money changes hands." 
              link="/services" 
            />
            <ServiceCard 
              icon={Shield} 
              title="AOG RISK MANAGEMENT" 
              description="We don't just ship parts fast. We choose routes, couriers, and documentation strategies that actually clear customs and reach the aircraft." 
              link="/services"  
            />
            <ServiceCard 
              icon={Globe} 
              title="PROVEN IN COMPLEX ENVIRONMENTS" 
              description="Including sustained operational experience across West, East, and Southern Africa. We plan for customs, permits, and airport realities — not just flight time." 
              link="/services"  
            />
          </div>
        </Container>
      </section>

      {/* Aircraft We Support */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <Container>
          <SectionHeader title="Aircraft We Support" subtitle="Deep technical expertise across business and regional platforms." />
          
          <div className="mb-12">
            <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">Primary Experience</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Phenom 300', 'Legacy 600', 'Legacy 650', 'ERJ/EMB 135/145'].map((model) => (
                <div key={model} className="p-6 bg-white border border-gray-200 text-center font-bold text-gray-800 shadow-sm">
                  {model}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Also Supported</h4>
            <p className="text-lg text-gray-700 mb-4">Bombardier • Dassault • ATR • Gulfstream • Others</p>
            <p className="text-sm text-gray-500 italic">
              Embraer remains our deepest expertise. For other platforms, we apply the same engineering discipline — verification comes first.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader title="What We Do" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-gray-900 text-white rounded-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">AIRCRAFT COMPONENTS</h3>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• Rotables & LRUs</li>
                <li>• Avionics</li>
                <li>• Expendables & Consumables</li>
                <li>• Wheels, Brakes & Landing Gear</li>
                <li>• Engine Accessories</li>
                <li>• Interior Components</li>
              </ul>
              <Button href="/contact" variant="primary">REQUEST PARTS QUOTE</Button>
            </div>
            <div className="p-10 border border-gray-200 rounded-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">GROUND SUPPORT EQUIPMENT & TOOLING</h3>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Maintenance tooling</li>
                <li>• Ground power units</li>
                <li>• Hydraulic test equipment</li>
                <li>• Jacks & stands</li>
                <li>• Calibrated equipment</li>
                <li>• Special tooling</li>
              </ul>
              <Button href="/contact" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">REQUEST GSE QUOTE</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <Container>
          <SectionHeader title="How It Works" centered />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "SUBMIT REQUEST", desc: "Tell us what you need, your aircraft details, and urgency level." },
              { step: "2", title: "WE VERIFY & SOURCE", desc: "Engineering verification, supplier vetting, and documentation confirmation." },
              { step: "3", title: "WE MANAGE DELIVERY", desc: "Route selection, customs planning, and real-time tracking." },
              { step: "4", title: "YOU RECEIVE PART", desc: "Delivered with correct docs, inspected, and ready to install." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" className="inline-flex items-center">
              GET A QUOTE <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* AOG Section */}
      <section className="py-24 bg-blue-50">
        <Container>
          <div className="max-w-4xl mx-auto border-2 border-blue-200 p-12 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">AOG? WE'RE READY.</h2>
            <p className="text-lg mb-8 text-gray-700">Aircraft on Ground situations require more than fast shipping. AvTrix manages:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-10 max-w-2xl mx-auto">
              {[
                "Courier tier selection (OBC / NFO / Charter)",
                "Customs pre-alert & document validation",
                "HS code and import risk assessment",
                "Airside delivery coordination",
                "Real-time status & contingency routing"
              ].map((text) => (
                <div key={text} className="flex items-center gap-2 text-gray-600">
                  <Check className="h-5 w-5 text-green-500" /> {text}
                </div>
              ))}
            </div>
            <Button href="https://wa.me/+447999638984" target="_blank" className="bg-green-600 hover:bg-green-700 text-white border-none py-6 px-10 text-xl">
              <MessageCircle className="mr-2 h-6 w-6" /> WHATSAPP AOG HOTLINE
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
      
      {/* Disclaimer Section */}
      <section className="py-12 bg-gray-900 text-gray-400 text-xs border-t border-gray-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-relaxed">
            <p>AvTrix coordinates sourcing and logistics based on information provided by the client. Final airworthiness acceptance, installation approval, and operational release remain the responsibility of the operator or CAMO.</p>
            <p>AOG response times are target-based and subject to supplier availability, regulatory clearance, and customs authorities. AvTrix manages risk and coordination but cannot guarantee delivery timelines outside its direct control.</p>
          </div>
        </Container>
      </section>
    </main>;
}