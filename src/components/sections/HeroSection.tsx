import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  title: React.ReactNode; // Changed to ReactNode to support <br />
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=2940'
}: HeroSectionProps) {
  return <section className="relative min-h-[85vh] flex items-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Aviation background" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <Container className="relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-5xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            {title}
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={ctaLink} variant="primary" className="text-base px-8 py-4">
              {ctaText}
            </Button>
            {/* Updated to secondary/outline style as per plan */}
            <Button href="https://wa.me/YOUR_NUMBER" variant="outline" className="text-base px-8 py-4 bg-transparent text-black border-gray-600 hover:bg-white/10 hover:border-white hover:text-white transition-colors">
              AOG? Whatsapp Now
            </Button>
          </div>
        </div>
      </Container>
    </section>;
}