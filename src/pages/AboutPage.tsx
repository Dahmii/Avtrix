import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/sections/SectionHeader';
import { CTASection } from '../components/sections/CTASection';
import { Shield, Target, Globe, BarChart3, CheckCircle2, Linkedin, User } from 'lucide-react';

export function AboutPage() {
  return <main className="pt-20">
      {/* Hero / About AvTrix Title */}
      <div className="bg-gray-900 text-white py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
              About AvTrix
            </h1>
            <p className="text-xl text-gray-400 font-medium tracking-wide">
              AOG-Focused. Engineering-Verified. Risk-Managed.
            </p>
          </div>
        </Container>
      </div>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                AvTrix Aviation is a UK-registered aviation services company focused on 
                AOG-critical parts procurement and logistics risk management for business 
                and regional aircraft operators.
              </p>
              <p>
                Founded by licensed aircraft engineers and aviation professionals with 
                backgrounds in CAMO operations, fleet airworthiness management, and 
                Embraer business and regional aircraft, AvTrix was built to solve a 
                persistent industry problem: <strong>speed without correctness creates risk.</strong>
              </p>
              <p>
                In high-pressure AOG situations, operators face not only downtime costs, 
                but airworthiness exposure, customs delays, and documentation failures 
                that can ground aircraft even after parts arrive.
              </p>
              <p>
                AvTrix operates at the intersection of engineering verification, supplier 
                discipline, and logistics execution in complex operating environments. 
                Every transaction is treated as a risk-managed operation, not a brokerage exercise.
              </p>
              <p className="text-sm text-gray-500 italic">
                All transactions are structured in line with international aviation 
                regulatory requirements and standard commercial practices.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What Makes AvTrix Different */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <Container>
          <SectionHeader title="What Makes AvTrix Different" className="mb-12" />
          
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-8 border border-gray-200 shadow-sm flex gap-6">
              <div className="hidden md:block">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Engineering-Led Decision Making</h3>
                <p className="text-gray-600 mb-4">
                  Every RFQ is reviewed by licensed engineering personnel to confirm part applicability, 
                  configuration effectivity, condition suitability, and release documentation before quotation.
                </p>
                <p className="text-sm font-bold text-blue-600">
                  We do not issue quotations without engineering verification. This is a core operating requirement.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 shadow-sm flex gap-6">
              <div className="hidden md:block">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">AOG Risk Management Focus</h3>
                <p className="text-gray-600 mb-4">
                  We design delivery strategies based on aircraft criticality, part characteristics, 
                  customs exposure, and lane performance — not speed alone.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> Courier tier selection</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> Customs risk assessment</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> HS code validation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> Contingency routing</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 shadow-sm flex gap-6">
              <div className="hidden md:block">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Proven In Complex Operating Environments</h3>
                <p className="text-gray-600">
                  AvTrix has hands-on experience supporting operations in regions where customs precision 
                  and logistics planning are as critical as sourcing speed.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Team Placeholder */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader title="Our Team" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Technical Director */}
            <div className="flex flex-col md:flex-row gap-8 items-start border border-gray-100 p-6 rounded-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-40 bg-gray-100 flex items-center justify-center rounded-sm shrink-0">
                <User className="h-12 w-12 text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">[Your Name]</h3>
                <p className="text-blue-600 font-medium mb-4">Co-Founder & Technical Director</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Licensed Aircraft Engineer with 8+ years of Embraer fleet management experience. 
                  Type-rated on Phenom 300, Legacy 600/650, and ERJ 135/145. Background in CAMO operations, 
                  airworthiness management, and FDM.
                </p>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Commercial Director */}
            <div className="flex flex-col md:flex-row gap-8 items-start border border-gray-100 p-6 rounded-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-40 bg-gray-100 flex items-center justify-center rounded-sm shrink-0">
                <User className="h-12 w-12 text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">[Partner Name]</h3>
                <p className="text-blue-600 font-medium mb-4">Co-Founder & Commercial Director</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  [Experience summary - supplier relationships, commercial aviation background, 
                  logistics strategy, and international trade compliance.]
                </p>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Credentials & Experience */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <Container>
          <div className="bg-white border-2 border-gray-900 p-12 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-10">Credentials & Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-blue-600 uppercase text-sm tracking-widest mb-6">Engineering Credentials</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-2">• <span>Licensed Aircraft Engineer</span></li>
                  <li className="flex items-start gap-2">• <span>Type Rated: EMB 135/145, Legacy 600/650, Phenom 300, Boeing 767</span></li>
                  <li className="flex items-start gap-2">• <span>CAMO Diploma (Sofema Aviation Services)</span></li>
                  <li className="flex items-start gap-2">• <span>B.Eng Aerospace Engineering</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-600 uppercase text-sm tracking-widest mb-6">Operational Experience</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-2">• <span>8+ years aircraft maintenance and fleet management</span></li>
                  <li className="flex items-start gap-2">• <span>Continuing Airworthiness management</span></li>
                  <li className="flex items-start gap-2">• <span>Flight Data Monitoring (FDM) management</span></li>
                  <li className="flex items-start gap-2">• <span>Complex operating environment logistics</span></li>
                  <li className="flex items-start gap-2">• <span>Aircraft components value engineering and cost control</span></li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>;
}