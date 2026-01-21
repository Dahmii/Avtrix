import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}
export function CTASection({
  title = 'Ready to optimize your operations?',
  description = 'Contact our team to discuss your ground handling and spare parts requirements. We provide tailored solutions for commercial and private aviation.',
  buttonText = 'Contact Us',
  buttonLink = '/contact'
}: CTASectionProps) {
  return <section className="py-24 bg-white">
      <Container>
        <div className="bg-gray-900 rounded-none overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative px-6 py-16 md:px-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button href={buttonLink} variant="primary" className="px-8 py-4 text-base">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>;
}