import React, { createContext, useContext, useState } from 'react';
import { CartContextType, CartItem, Service } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (service: Service) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.service.id === service.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.service.id === service.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevItems, { service, quantity: 1 }];
    });
  };

  const removeFromCart = (serviceId: string) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.service.id === serviceId);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(item => 
          item.service.id === serviceId 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      }
      return prevItems.filter(item => item.service.id !== serviceId);
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.service.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      getCartTotal, 
      getCartCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};