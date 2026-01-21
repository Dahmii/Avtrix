import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    service: 'ground-handling',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle submission
    console.log('Form submitted:', formState);
    alert('Thank you for your inquiry. Our operations team will contact you shortly.');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  return <main className="pt-20">
      <div className="bg-gray-900 text-white py-20">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch with our operations team for service inquiries, RFQs,
            or partnership opportunities.
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
                    <p className="text-gray-600">
                      Operations: +44 (0) 20 1234 5678
                      <br />
                      AOG Support: +44 (0) 20 8765 4321
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      info@avtrixservices.com
                      {/* <br />
                      Operations: ops@avtrix.com
                      <br />
                      Sales: sales@avtrix.com */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">AOG Support</h3>
                <p className="text-sm text-gray-600">
                  For urgent Aircraft on Ground (AOG) requirements, please call
                  our 24/7 hotline. Do not use the contact form for
                  time-critical emergencies.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 border border-gray-200 shadow-lg rounded-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" value={formState.name} onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company / Organization
                  </label>
                  <input type="text" id="company" name="company" required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" value={formState.company} onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Email
                  </label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" value={formState.email} onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interest
                  </label>
                  <select id="service" name="service" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white" value={formState.service} onChange={handleChange}>
                    <option value="ground-handling">
                      Ground Handling Services
                    </option>
                    <option value="spares">Aircraft Spares & Supply</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" value={formState.message} onChange={handleChange}></textarea>
                </div>

                <Button type="submit" variant="primary" fullWidth>
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>;
}