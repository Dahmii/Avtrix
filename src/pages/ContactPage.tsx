import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      // Replace these with your actual IDs from the EmailJS dashboard
      emailjs.sendForm(
        'service_tx0rbhh', 
        'template_aaivx6o', 
        form.current, 
        '6oaSpEd-tBrNmLVPV'
      )
      .then((result) => {
          alert('Thank you. Your inquiry has been sent to our operations team.');
          form.current?.reset();
      }, (error) => {
          alert('Failed to send inquiry. Please try our WhatsApp hotline for immediate support.');
          console.error('EmailJS Error:', error.text);
      });
    }
  };

  return <main className="pt-20">
      <div className="bg-gray-900 text-white py-20">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Request a quote for aircraft parts or GSE, or reach our AOG team for immediate assistance.
          </p>
        </Container>
      </div>

      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Headquarters
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      27 Old Gloucester Street,
                      <br />
                      London,<br />
                      WC1N 3AX
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+44 799 963 8984</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@avtrixservices.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 border border-blue-100">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-gray-900">AOG Support</h3>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  For Aircraft on Ground (AOG) situations, message our duty engineer directly on WhatsApp. 
                  This is monitored 24/7 for time-critical emergencies.
                </p>
                {/* Replace YOUR_NUMBER with the actual number when provided */}
                <Button href="https://wa.me/447999638984" target="_blank" className="w-full bg-green-600 hover:bg-green-700 border-none text-white">
                  <MessageCircle className="mr-2 h-5 w-5" /> {/* Optional: Adding the icon for visual impact */}
                    WhatsApp AOG Hotline
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 border border-gray-200 shadow-lg rounded-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Inquiry
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Email
                  </label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Aircraft Type & Serial Number
                  </label>
                  <input type="text" id="title" name="title" required placeholder="e.g. Phenom 300 / MSN 505XXXXX" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>

                <div>
                  <label htmlFor="request_type" className="block text-sm font-medium text-gray-700 mb-1">
                    Request Type
                  </label>
                  <select id="request_type" name="request_type" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                    <option value="parts">Aircraft Parts Quote</option>
                    <option value="gse">GSE & Tooling Quote</option>
                    <option value="aog">AOG Support Request</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Requirements / Message
                  </label>
                  <textarea id="message" name="message" rows={4} required placeholder="List P/Ns, Descriptions, and Quantities..." className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>;
}