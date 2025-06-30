import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Service } from '../../types';
import Button from './Button';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const { id, title, description, price, image, features } = service;
  
  return (
    <div className={`service-card ${featured ? 'border-2 border-teal-500' : ''}`}>
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Populaire
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="text-slate-600 mt-2 mb-4">{description}</p>
        
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <div className="font-bold text-2xl text-teal-600 mb-4">
            {price.toFixed(2)} $
          </div>
          
          <div className="space-y-2 mb-6">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{feature}</span>
              </div>
            ))}
            {features.length > 2 && (
              <p className="text-sm text-teal-600 font-medium">+ {features.length - 2} autres avantages</p>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <Link to={`/services/${id}`}>
              <Button variant="primary" fullWidth>
                Voir les détails
              </Button>
            </Link>
            <Link to={`/services/${id}`} className="text-sm font-medium text-teal-600 flex items-center justify-center mt-2 hover:text-teal-700 transition-colors">
              En savoir plus <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;