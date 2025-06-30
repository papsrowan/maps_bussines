import  { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { CartProvider } from './context/CartContext';


// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./components/services/ServiceDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Cart = lazy(() => import('./pages/Cart'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Helmet>
              <meta charSet="utf-8" />
              <title>MAPS BUSINESS - Solutions Professionnelles pour votre Présence en Ligne</title>
              <meta name="description" content="MAPS BUSINESS vous accompagne avec des solutions professionnelles pour maximiser votre visibilité et développer votre activité sur internet." />
              <link rel="canonical" href="https://MAPS BUSINESS.com" />
            </Helmet>
            
            <Navbar />
            
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Suspense>
            
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;