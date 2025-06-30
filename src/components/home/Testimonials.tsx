import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jean Dupont",
    position: "CEO, TechVision",
    content: "Grâce à MAPS BUSINESS, notre visibilité en ligne a augmenté de 200% en seulement 3 mois. Leur approche personnalisée et leur expertise ont dépassé toutes nos attentes.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Sophie Martin",
    position: "Directrice Marketing, InnoGroup",
    content: "L'équipe de MAPS BUSINESS a révolutionné notre stratégie digitale. Leur service Meta Guide Pro a changé la donne pour notre entreprise, avec des résultats immédiats.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Thomas Laurent",
    position: "Propriétaire, Bistrot Parisien",
    content: "Le service SEO Local a complètement transformé mon restaurant. Nous sommes maintenant au top des recherches locales et avons vu une augmentation significative de nouveaux clients.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent <span className="title-gradient">nos clients</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Découvrez les témoignages de clients satisfaits qui ont transformé leur présence en ligne grâce à nos services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;