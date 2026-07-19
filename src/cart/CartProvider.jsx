import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const STORAGE_KEY = "bistro_cart";

const readStoredCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(readStoredCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      if (existing) {
        return prev.map((i) => (i._id === item._id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { _id: item._id, name: item.name, image: item.image, price: item.price, qty: 1 }];
    });
  };

  const removeItem = (_id) => {
    setItems((prev) => prev.filter((i) => i._id !== _id));
  };

  const updateQty = (_id, qty) => {
    if (qty < 1) return removeItem(_id);
    setItems((prev) => prev.map((i) => (i._id === _id ? { ...i, qty } : i)));
  };

  const clearCart = () => setItems([]);

  const totalCount = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
