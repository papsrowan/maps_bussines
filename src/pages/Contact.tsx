import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";  // ✅ Fonctionnera avec Vite
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <>
      <Helmet>
        <title>Contact | MAPS BUSINESS</title>
        <meta name="description" content="Contactez-nous pour discuter de vos besoins en optimisation de présence en ligne. Notre équipe d'experts est prête à vous aider." />
      </Helmet>
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-16">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contactez-Nous
              </h1>
              <p className="text-teal-50 text-lg">
                Notre équipe d'experts est prête à répondre à toutes vos questions et à vous aider à optimiser votre présence en ligne.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Info and Form */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6 title-gradient">
                  Nos Informations de Contact
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Adresse</h3>
                      <p className="text-slate-600">425 av.Viger O , Montréal , QC HZZ 1W5</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                      <p className="text-slate-600">contact@mapsbusiness.net</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Téléphone</h3>
                      <p className="text-slate-600">+1 418 425 9409</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-800 mb-3">Hes d'ouverture</h3>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span>9h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi:</span>
                      <span>10h00 - 15h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche:</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6 title-gradient">
                  Envoyez-nous un Message
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
                    <div className="bg-teal-100 rounded-full p-3 inline-flex mb-4">
                      <Send className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Message Envoyé !</h3>
                    <p className="text-slate-600">
                      Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="information">Demande d'information</option>
                        <option value="devis">Demande de devis</option>
                        <option value="support">Support technique</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                        placeholder="Comment pouvons-nous vous aider ?"
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Envoyer le message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-10">
          <div className="container-custom">
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden shadow-lg">
              {/* Placeholder for a map */}
              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                  <p className="text-slate-600 text-lg">Carte interactive indisponible</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;