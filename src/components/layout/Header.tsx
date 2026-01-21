import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Services',
    href: '/services'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Safety',
    href: '/safety'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">

          <div>
              <img src="/assets/AvT-02.png" alt="Avtrix Logo" className="h-48 w-auto" />

          </div>
            {/* <div className="bg-blue-600 p-1.5 rounded-sm group-hover:bg-blue-700 transition-colors">
              <Plane className="h-6 w-6 text-white transform -rotate-45" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              AVTRIX
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                {item.name}
              </Link>)}
            <Button href="/contact" variant="primary" className="ml-4">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none" aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`block px-3 py-3 text-base font-medium rounded-md ${isActive(item.href) ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}
            <div className="pt-4 px-3">
              <Button href="/contact" fullWidth onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>}
    </header>;
}