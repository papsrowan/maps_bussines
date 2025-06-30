import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">MAPS BUSINESS</span>
            </div>
            <p className="text-slate-300 mb-4">
              Solutions professionnelles pour optimiser votre présence en ligne et maximiser votre visibilité.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-500 pb-2 inline-block">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-teal-400 transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-teal-400 transition-colors">Nos Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-teal-400 transition-colors">À Propos</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-teal-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-500 pb-2 inline-block">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/acces-pro" className="text-slate-300 hover:text-teal-400 transition-colors">Accès Pro</Link>
              </li>
              <li>
                <Link to="/services/meta-guide-ads" className="text-slate-300 hover:text-teal-400 transition-colors">Meta Guide ADS</Link>
              </li>
              <li>
                <Link to="/services/profil-pro" className="text-slate-300 hover:text-teal-400 transition-colors">Profil Pro</Link>
              </li>
              <li>
                <Link to="/services/seo-local" className="text-slate-300 hover:text-teal-400 transition-colors">SEO Local</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-500 pb-2 inline-block">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">8 rue de Londres 75009, Paris</span>
              </li>
               <li className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">425 av.Viger O , Montréal , QC HZZ 1W5</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-slate-300">+1 418 425 9409</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-slate-300">contact@mapsbusiness.net</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-700 mt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} MAPS BUSINESS. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link to="/terms" className="hover:text-teal-400 transition-colors">Conditions d'utilisation</Link>
            <Link to="/privacy" className="hover:text-teal-400 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;