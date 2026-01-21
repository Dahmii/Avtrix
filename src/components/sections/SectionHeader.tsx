import React from 'react';
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}
export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className = ''
}: SectionHeaderProps) {
  return <div className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          {subtitle}
        </p>}
    </div>;
}