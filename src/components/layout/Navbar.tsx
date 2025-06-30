import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setIsOpen(false);
  }, [location]);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'py-2 bg-white/90 shadow-md backdrop-blur-sm' : 'py-4 bg-transparent'
  }`;

  const linkClasses = 'relative font-medium text-slate-700 hover:text-teal-600 transition-colors';
  const activeLinkClasses = 'text-teal-600 font-semibold';

  const isActiveLink = (path: string) => {
    return location.pathname === path ? activeLinkClasses : '';
  };

  return (
    <nav className={navbarClasses}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-2 rounded-lg">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
            MAPS BUSINESS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${linkClasses} ${isActiveLink('/')}`}>
            Accueil
          </Link>
          <Link to="/services" className={`${linkClasses} ${isActiveLink('/services')}`}>
            Nos Services
          </Link>
          <Link to="/about" className={`${linkClasses} ${isActiveLink('/about')}`}>
            À Propos
          </Link>
          <Link to="/contact" className={`${linkClasses} ${isActiveLink('/contact')}`}>
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="h-6 w-6 text-slate-700 hover:text-teal-600 transition-colors" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Nous Contacter
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="h-6 w-6 text-slate-700" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className={`${linkClasses} ${isActiveLink('/')} py-2`}>
              Accueil
            </Link>
            <Link to="/services" className={`${linkClasses} ${isActiveLink('/services')} py-2`}>
              Nos Services
            </Link>
            <Link to="/about" className={`${linkClasses} ${isActiveLink('/about')} py-2`}>
              À Propos
            </Link>
            <Link to="/contact" className={`${linkClasses} ${isActiveLink('/contact')} py-2`}>
              Contact
            </Link>
            <Link to="/contact" className="btn btn-primary w-full text-center">
              Nous Contacter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;