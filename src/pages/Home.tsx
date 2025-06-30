import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedServices from '../components/home/FeaturedServices';
import AboutSection from '../components/home/AboutSection';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import { Helmet } from "react-helmet-async";  

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>MAPS BUSINESS | Solutions Professionnelles pour votre Présence en Ligne</title>
        <meta name="description" content="MAPS BUSINESS vous accompagne avec des solutions professionnelles pour maximiser votre visibilité et développer votre activité sur internet." />
      </Helmet>
      
      <main>
        <Hero />
        <FeaturedServices />
        <AboutSection />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;