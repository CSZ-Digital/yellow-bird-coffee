"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Drink, DrinkSize } from "./menu";

export interface CartItem {
  drink: Drink;
  size: DrinkSize;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (drink: Drink, size: DrinkSize) => void;
  removeItem: (drinkId: string, size: DrinkSize) => void;
  updateQuantity: (drinkId: string, size: DrinkSize, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (drink: Drink, size: DrinkSize) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.drink.id === drink.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.drink.id === drink.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { drink, size, quantity: 1 }];
    });
  };

  const removeItem = (drinkId: string, size: DrinkSize) => {
    setItems((prev) => prev.filter((i) => !(i.drink.id === drinkId && i.size === size)));
  };

  const updateQuantity = (drinkId: string, size: DrinkSize, quantity: number) => {
    if (quantity <= 0) return removeItem(drinkId, size);
    setItems((prev) =>
      prev.map((i) =>
        i.drink.id === drinkId && i.size === size ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.drink.prices[i.size] * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
