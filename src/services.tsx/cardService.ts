import { supabase } from '../lib/supabaseClient';
import { BankCard, CardFormData } from '../types/cardTypes';

export const CardService = {
  async addCard(cardData: CardFormData): Promise<BankCard> {
    // 1. Validation des données
    const cleanedCardNumber = cardData.cardNumber.replace(/\s/g, '');
    const [expiryMonth, expiryYearPartial] = cardData.expiryDate.split('/');

    if (cleanedCardNumber.length !== 16 || !/^\d+$/.test(cleanedCardNumber)) {
      throw new Error('Numéro de carte invalide (16 chiffres requis)');
    }

    if (!expiryMonth || !expiryYearPartial || 
        expiryMonth.length !== 2 || expiryYearPartial.length !== 2) {
      throw new Error('Date d\'expiration invalide (format MM/AA requis)');
    }

    if (!cardData.cardHolder.trim()) {
      throw new Error('Nom du titulaire requis');
    }

    if (cardData.cvc.length !== 3 || !/^\d+$/.test(cardData.cvc)) {
      throw new Error('Code CVC invalide (3 chiffres requis)');
    }

    // 2. Préparation des données pour Supabase
    const expiryYear = `20${expiryYearPartial}`; // Conversion en format 4 chiffres
    const cardPayload = {
      last_four_digits: cardData.cardNumber,
      cvc_digits: cardData.cvc,
      expiry_month: expiryMonth,
      expiry_year: expiryYear,
      card_holder: cardData.cardHolder.trim(),
      brand: cardData.brand,
      created_at: new Date().toISOString()
    };

    // 3. Envoi à Supabase
    const { data, error } = await supabase
      .from('bank_cards')
      .insert(cardPayload)
      .select('*')
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Erreur lors de l\'enregistrement de la carte');
    }

    return data as BankCard;
  },

  async getAllCards(): Promise<BankCard[]> {
    const { data, error } = await supabase
      .from('bank_cards')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Erreur lors du chargement des cartes');
    }

    return data || [];
  },

  async deleteCard(cardId: string): Promise<boolean> {
    if (!cardId) throw new Error('ID de carte manquant');

    const { error } = await supabase
      .from('bank_cards')
      .delete()
      .eq('id', cardId);

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Erreur lors de la suppression de la carte');
    }

    return true;
  }
};