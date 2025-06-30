export interface BankCard {
  id: string;
  created_at: string;
  last_four_digits: string;
  expiry_month: string;
  expiry_year: string;
  card_holder: string;
  brand: string;
}

export interface CardFormData {
  cardNumber: string;
  expiryDate: string; // Format MM/AA
  cvc: string;
  cardHolder: string;
  brand: string;
}