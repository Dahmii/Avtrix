import React from 'react';
import { ShieldCheck, Award, Clock, CheckCircle } from 'lucide-react';
import { Container } from '../ui/Container';
export function TrustBlock() {
  const indicators = [{
    icon: ShieldCheck,
    title: 'Safety First Culture',
    description: 'Rigorous adherence to international safety protocols and SMS implementation.'
  }, {
    icon: Award,
    title: 'Certified Operations',
    description: 'Fully compliant with IATA, ISO 9001, and local aviation authority standards.'
  }, {
    icon: Clock,
    title: '24/7 Reliability',
    description: 'Round-the-clock operational support ensuring minimal downtime for your fleet.'
  }, {
    icon: CheckCircle,
    title: 'Technical Accuracy',
    description: 'Precise documentation and traceability for every part and service delivered.'
  }];
  return <section className="py-20 bg-gray-50 border-y border-gray-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => <div key={index} className="flex flex-col items-start">
              <div className="mb-4 p-2 bg-white border border-gray-200 rounded shadow-sm">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>)}
        </div>
      </Container>
    </section>;
}