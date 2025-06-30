import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";  // ✅ Fonctionnera avec Vite
import { Users, Lightbulb, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Thomas Bernard",
      position: "CEO & Fondateur",
      bio: "Expert en marketing digital avec plus de 15 ans d'expérience dans le secteur.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Marie Dubois",
      position: "Directrice Marketing",
      bio: "Spécialiste en stratégies de contenu et en optimisation des médias sociaux.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Thomas Bernard",
      position: "Expert SEO",
      bio: "Passionné par l'analyse de données et l'optimisation des moteurs de recherche.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sophie Klein",
      position: "Responsable Client",
      bio: "Dédiée à fournir un service client exceptionnel et des solutions personnalisées.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-teal-500" />,
      title: "Innovation",
      description: "Nous recherchons constamment de nouvelles idées et solutions pour rester à la pointe de notre domaine."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-500" />,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et atteindre leurs objectifs."
    },
    {
      icon: <Target className="h-8 w-8 text-teal-500" />,
      title: "Excellence",
      description: "Nous nous efforçons d'offrir des services de la plus haute qualité et de dépasser les attentes de nos clients."
    },
    {
      icon: <Award className="h-8 w-8 text-teal-500" />,
      title: "Intégrité",
      description: "Nous agissons avec honnêteté, transparence et respect dans toutes nos interactions professionnelles."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>À Propos | MAPS BUSINESS</title>
        <meta name="description" content="Découvrez qui nous sommes, notre mission et nos valeurs. MAPS BUSINESS est votre partenaire de confiance pour optimiser votre présence en ligne." />
      </Helmet>
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                À Propos de Nous
              </h1>
              <p className="text-teal-50 text-lg mb-8">
                MAPS BUSINESS est une agence spécialisée dans l'optimisation de la présence en ligne des entreprises. Notre mission est de fournir des solutions innovantes et efficaces pour maximiser votre visibilité et votre impact sur le marché.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Notre <span className="title-gradient">Histoire</span>
                </h2>
                <p className="text-slate-600 mb-4">
                  Fondée en 2018, MAPS BUSINESS est née de la passion d'Thomas Bernard pour le marketing digital et sa vision de créer une agence capable d'offrir des solutions complètes et personnalisées aux entreprises de toutes tailles.
                </p>
                <p className="text-slate-600 mb-4">
                  Au fil des années, nous avons développé une expertise unique dans l'optimisation de la présence en ligne, en mettant l'accent sur des stratégies innovantes et des résultats mesurables.
                </p>
                <p className="text-slate-600">
                  Aujourd'hui, notre équipe de professionnels passionnés continue de repousser les limites de ce qui est possible dans le domaine du marketing digital, en aidant nos clients à atteindre leurs objectifs commerciaux et à se démarquer dans un marché de plus en plus concurrentiel.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Notre histoire" 
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-lg p-6 w-64">
                    <div className="text-3xl font-bold text-teal-600">5+</div>
                    <div className="text-slate-600">Années d'expérience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20 bg-slate-50">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Nos <span className="title-gradient">Valeurs</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Nos valeurs fondamentales guident tout ce que nous faisons et définissent notre approche du service client.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="bg-teal-50 rounded-full p-4 inline-block mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Notre <span className="title-gradient">Équipe</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Rencontrez les experts passionnés qui travaillent chaque jour pour aider nos clients à réussir.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                    <p className="text-teal-600 font-medium mb-2">{member.position}</p>
                    <p className="text-slate-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;