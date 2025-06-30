import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Map, CheckCircle2, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  // Particle animation
  useEffect(() => {
    const createParticle = () => {
      const container = document.getElementById('particles-container');
      if (!container) return;
      
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 4px and 10px
      const size = Math.floor(Math.random() * 6) + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const posX = Math.random() * container.offsetWidth;
      const posY = Math.random() * container.offsetHeight;
      
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      
      // Random opacity and color
      const opacity = Math.random() * 0.5 + 0.2;
      const colors = ['#0d9488', '#0ea5e9', '#8b5cf6', '#f59e0b'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.backgroundColor = color;
      particle.style.opacity = opacity.toString();
      
      // Animation duration
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s linear infinite`;
      
      // Add to container
      container.appendChild(particle);
      
      // Remove after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, duration * 1000);
    };
    
    // Create initial particles
    for (let i = 0; i < 15; i++) {
      createParticle();
    }
    
    // Create new particles periodically
    const interval = setInterval(createParticle, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.5
      }
    }
  };
  
  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Particle animation container */}
      <div 
        id="particles-container" 
        className="absolute inset-0 pointer-events-none z-0"
      />
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 z-0" />
      
      <motion.div 
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div variants={itemVariants} className="inline-block mb-3">
              <span className="bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                Solutions Professionnelles
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="title-gradient">Optimisez</span> votre présence en ligne
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-700 mb-8 max-w-lg"
            >
              MAPS BUSINESS vous accompagne avec des solutions professionnelles pour maximiser votre visibilité et développer votre activité sur internet.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button variant="primary" size="lg">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Nous contacter
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                <span className="text-slate-700 font-medium">Service Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                <span className="text-slate-700 font-medium">Support 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                <span className="text-slate-700 font-medium">Résultats Garantis</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right content - 3D Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateY: 0,
              transition: { duration: 1, ease: "easeOut", delay: 0.4 }
            }}
            className="relative hidden lg:block"
          >
            <div className="w-full h-[500px] relative">
              {/* Abstract 3D shape */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-blue-300 opacity-20 blur-2xl" />
                
                {/* Map icon floating */}
                <div className="absolute -top-5 left-1/3 transform -translate-x-1/2 floating animation-delay-200">
                  <div className="bg-white rounded-2xl shadow-lg p-5">
                    <Map className="h-12 w-12 text-teal-500" />
                  </div>
                </div>
                
                {/* Growth icon floating */}
                <div className="absolute top-1/3 -right-20 transform floating animation-delay-500">
                  <div className="bg-white rounded-2xl shadow-lg p-4">
                    <TrendingUp className="h-10 w-10 text-blue-500" />
                  </div>
                </div>
                
                {/* Main circular element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-white shadow-xl flex items-center justify-center border-8 border-white floating">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-full">
                    <Map className="h-12 w-12 text-white" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute w-full h-full">
                  <div className="absolute top-10 left-20 w-4 h-4 bg-teal-400 rounded-full opacity-60 floating animation-delay-300" />
                  <div className="absolute bottom-20 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-60 floating animation-delay-150" />
                  <div className="absolute top-1/4 right-10 w-5 h-5 bg-amber-400 rounded-full opacity-60 floating animation-delay-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <motion.div 
          variants={statsVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto"
        >
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-teal-600 font-bold text-4xl mb-2">98%</div>
            <p className="text-slate-700">Satisfaction Client</p>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-teal-600 font-bold text-4xl mb-2">500+</div>
            <p className="text-slate-700">Projets Complétés</p>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-teal-600 font-bold text-4xl mb-2">350%</div>
            <p className="text-slate-700">ROI Moyen</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;