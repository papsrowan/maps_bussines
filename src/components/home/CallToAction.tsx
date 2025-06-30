import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-blue-700" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center text-white max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre présence en ligne ?
          </h2>
          <p className="text-teal-50 mb-8 text-lg">
            Rejoignez les centaines d'entreprises qui ont déjà révolutionné leur stratégie digitale avec MAPS BUSINESS.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services">
              <Button variant="accent" size="lg">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Nous contacter
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;