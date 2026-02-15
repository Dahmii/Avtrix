import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { MessageCircle, Phone } from 'lucide-react';

export function CTASection() {
  const WHATSAPP_NUMBER = "447999638984"; // Updated as per client info
  const CALL_NUMBER = "+44 799 963 8984";

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="bg-gray-900 rounded-none overflow-hidden relative border-t-4 border-blue-600">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="relative px-6 py-16 md:px-12 md:py-20 text-center">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">
              Ready to Get Started?
            </h2>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Need parts or GSE? Request a quote now.
            </h3>

            {/* Quote Request Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                href="/contact?type=parts" 
                variant="primary" 
                className="w-full sm:w-auto px-8 py-4 text-base"
              >
                Request Parts Quote
              </Button>
              <Button 
                href="/contact?type=gse" 
                variant="outline" 
                className="w-full sm:w-auto px-8 py-4 text-base border-white text-gray-300 hover:bg-white hover:text-gray-900"
              >
                Request GSE Quote
              </Button>
            </div>

            {/* AOG Hotline Section */}
            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-center gap-8">
              <p className="text-gray-400 font-medium">For AOG:</p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span className="font-bold">WhatsApp {CALL_NUMBER}</span>
                </a>

                <a 
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-bold">Call {CALL_NUMBER}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}