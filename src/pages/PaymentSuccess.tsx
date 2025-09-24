import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PaymentSuccess: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const amount = params.get("amount");

  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl mx-auto p-10 text-center border m-20 rounded-lg bg-gradient-to-br from-teal-50 to-blue-50 shadow-lg"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2 text-teal-600">Merci !</h1>
        <h2 className="text-2xl text-blue-600">Votre paiement a été validé</h2>
        <div className="bg-white p-2 rounded-md text-accent-500 mt-5 text-4xl font-bold border border-accent-500">
          {amount ? `$${amount}` : "Montant inconnu"}
        </div>
      </div>
      <p className="text-lg text-slate-700">Vous recevrez une confirmation par email.</p>
    </motion.main>
  );
};

export default PaymentSuccess;
