import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, BadgeCheck, Layers } from 'lucide-react';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  const featureItems = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-teal-500" />,
      title: "Services Premium",
      description: "Des solutions professionnelles de la plus haute qualité pour votre entreprise."
    },
    {
      icon: <Users className="h-6 w-6 text-teal-500" />,
      title: "Experts Qualifiés",
      description: "Une équipe d'experts dédiés à la réussite de vos projets."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-teal-500" />,
      title: "Résultats Garantis",
      description: "Des stratégies éprouvées pour des résultats tangibles et mesurables."
    },
    {
      icon: <Layers className="h-6 w-6 text-teal-500" />,
      title: "Solutions Personnalisées",
      description: "Des services adaptés à vos besoins spécifiques et à votre secteur d'activité."
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="MAPS BUSINESS Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating element */}
              <div className="absolute -right-8 -bottom-8 bg-white rounded-2xl shadow-lg p-4 glass-effect">
                <div className="flex items-center">
                  <div className="bg-teal-500 rounded-full p-3">
                    <BadgeCheck className="h-7 w-7 text-white" />
                  </div>
                  <div className="ml-3">
                    <div className="text-xs font-semibold text-slate-500">Client Satisfaits</div>
                    <div className="text-xl font-bold text-teal-600">500+</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-teal-100" style={{ zIndex: -1 }} />
              <div className="absolute top-1/3 -right-6 w-12 h-12 rounded-full bg-blue-100" style={{ zIndex: -1 }} />
            </div>
          </motion.div>
          
          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À Propos de <span className="title-gradient">MAPS BUSINESS</span>
            </h2>
            
            <p className="text-slate-600 mb-6">
              MAPS BUSINESS est une agence spécialisée dans l'optimisation de votre présence en ligne. Nous offrons des services professionnels qui vous aident à développer votre activité et à maximiser votre visibilité sur internet.
            </p>
            
            <p className="text-slate-600 mb-8">
              Notre mission est de fournir des solutions innovantes et efficaces qui répondent aux besoins spécifiques de votre entreprise, tout en garantissant des résultats tangibles et mesurables.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {featureItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-start"
                >
                  <div className="mr-4 p-2 bg-teal-50 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Link to="/about">
              <Button variant="primary">
                En savoir plus sur nous
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;