export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  paiementUrl: string;
  image: string;
  features: string[];
}

export interface CartItem {
  service: Service;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (service: Service) => void;
  removeFromCart: (serviceId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}