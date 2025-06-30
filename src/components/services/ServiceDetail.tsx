import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import Button from '../ui/Button';
import { getServiceById } from '../../data/services';
import { useCart } from '../../context/CartContext';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const service = getServiceById(id || '');
  
  if (!service) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Service non trouvé</h2>
        <p className="text-slate-600 mb-6">Le service que vous recherchez n'existe pas.</p>
        <Link to="/services">
          <Button variant="primary">Retour aux services</Button>
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(service);
    navigate('/cart');
  };
  
  return (
    <div className="container-custom py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/services" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Right column - Service details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {service.title}
            </h1>
            
            <div className="bg-teal-500 text-white text-2xl font-bold px-4 py-2 rounded-lg inline-block mb-6">
              {service.price.toFixed(2)} $
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Description</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Caractéristiques</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-teal-600" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Ajouter au panier
              </Button>
              <Link to="/contact" className="flex-1">
                <Button 
                  variant="outline" 
                  size="lg"
                  fullWidth
                >
                  Demander un devis
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;