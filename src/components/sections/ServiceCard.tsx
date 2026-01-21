import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BoxIcon } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon?: BoxIcon;
}
export function ServiceCard({
  title,
  description,
  link,
  icon: Icon
}: ServiceCardProps) {
  return <Link to={link} className="group block p-8 bg-white border border-gray-200 hover:border-blue-500 transition-colors duration-300 h-full">
      <div className="flex flex-col h-full">
        {Icon && <div className="mb-6 inline-block p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
            <Icon className="h-8 w-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </div>}

        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          View Capabilities
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>;
}