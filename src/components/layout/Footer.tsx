import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-gray-300 py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div>
              <img src="/assets/AvT-01.png" alt="Avtrix Logo" className="h-8 w-auto" />
          </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Dependable aviation solutions partner delivering ground handling
              services and aircraft spare parts with uncompromising safety and
              operational reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-sm hover:text-white transition-colors">
                  Safety & Compliance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors">
                  Ground Handling
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors">
                  Aircraft Spares
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors">
                  Logistics Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors">
                  Technical Supply
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-sm">
                  27 Old Gloucester Street,
                  <br />
                  London,<br />
                  WC1N 3AX
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-sm">+44 790 355 7615</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-sm">info@avtrixservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Avtrix Aviation Services. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-sm text-gray-500">
              ISO 9001:2015 Certified
            </span>
            <span className="text-sm text-gray-500">
              IATA Ground Handling Partner
            </span>
          </div> */}
        </div>
      </Container>
    </footer>;
}