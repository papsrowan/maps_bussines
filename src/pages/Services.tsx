import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async"; 
import ServiceCard from '../components/ui/ServiceCard';
import { services } from '../data/services';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Nos Services | MAPS BUSINESS</title>
        <meta name="description" content="Découvrez notre gamme complète de services professionnels pour optimiser votre présence en ligne et maximiser votre visibilité." />
      </Helmet>
      
      <main className="pt-28 pb-20">
        <section className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Nos <span className="title-gradient">Services</span>
            </h1>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Découvrez notre gamme complète de services professionnels conçus pour optimiser votre présence en ligne et maximiser votre impact sur le marché.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Services;