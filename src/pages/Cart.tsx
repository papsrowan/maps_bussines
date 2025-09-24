import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Trash2, X } from 'lucide-react';
import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "../components/paiement/CheckoutPage";
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const [loadingStripe, setLoadingStripe] = useState(false);
  const handleStripeCheckout = async () => {
    setLoadingStripe(true);
    const response = await fetch("http://localhost:3001/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Math.round(total * 100) }),
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setLoadingStripe(false);
    }
  };
  const { items, removeFromCart, clearCart, getCartTotal } = useCart();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const stripePromise = loadStripe("pk_test_...remplacez_par_votre_cle_publique...");

  const subtotal = getCartTotal();
  const tva = subtotal * 0.02;
  const total = subtotal + tva;

  const formatPrice = (value: number | string) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Number(value));


  return (
    <>
      <Helmet>
        <title>Panier | MAPS BUSINESS</title>
        <meta name="description" content="Panier d'achat - Finalisez votre achat de services professionnels pour optimiser votre présence en ligne." />
      </Helmet>

      <main className="pt-28 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-slate-800">
                <ShoppingCart className="h-8 w-8 inline-block mr-2" />
                Votre Panier
              </h1>

              <Link to="/services" className="text-teal-600 font-medium hover:text-teal-700 flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continuer vos achats
              </Link>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-lg">
                <ShoppingCart className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-slate-700 mb-2">Votre panier est vide</h2>
                <p className="text-slate-500 mb-6">Vous n'avez pas encore ajouté de services à votre panier.</p>
                <Link to="/services">
                  <Button variant="primary">
                    Découvrir nos services
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 border-b border-slate-200">
                      <h2 className="text-xl font-semibold text-slate-800">Articles ({items.length})</h2>
                    </div>

                    <ul className="divide-y divide-slate-200">
                      {items.map((item) => (
                        <li key={item.service.id} className="p-6 flex flex-col sm:flex-row sm:items-center">
                          <div className="sm:flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                            <img
                              src={item.service.image}
                              alt={item.service.title}
                              className="w-full sm:w-24 h-24 object-cover rounded-lg"
                            />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-800">{item.service.title}</h3>
                            <p className="text-slate-600 text-sm mb-2">
                              {item.service.description?.substring(0, 100)}...
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="text-teal-600 font-bold">
                                {formatPrice(item.service.price)}
                              </div>
                              <button
                                onClick={() => removeFromCart(item.service.id)}
                                className="text-red-500 hover:text-red-600 transition-colors p-2"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="p-6 border-t border-slate-200">
                      <button
                        onClick={() => {
                          if (window.confirm("Voulez-vous vraiment vider le panier ?")) {
                            clearCart();
                          }
                        }}
                        className="text-red-500 hover:text-red-600 transition-colors text-sm font-medium"
                      >
                        Vider le panier
                      </button>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                    <h2 className="text-xl font-semibold text-slate-800 mb-4">Récapitulatif</h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-slate-600">
                        <span>Sous-total</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>TVA (2%)</span>
                        <span>{formatPrice(tva)}</span>
                      </div>
                      <div className="pt-3 border-t border-slate-200 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-teal-600">{formatPrice(total)}</span>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={handleStripeCheckout}
                      disabled={loadingStripe}
                    >
                      {loadingStripe ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                          </svg>
                          Paiement en cours...
                        </span>
                      ) : (
                        "Procéder au paiement"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-xl"
            >
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <X className="h-6 w-6 text-black bg-white rounded-full" />
              </button>
              <Elements stripe={stripePromise}>
                <CheckoutPage amount={total} />
              </Elements>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
