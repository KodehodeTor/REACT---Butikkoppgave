import { useContext, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (product) => {
    setCart((prev) => {
      // Sjekker om det allerede er i Cart
      // Looper i mellom array for å sjekke om item.id er likt product.id
      const exist = prev.find((item) => item.id === product.id);
      // Om den eksiterer og korrekt retuner ...
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, inCart: (item.inCart ?? 0) + 1 }
            : item,
        );
      }
      return [...prev, { ...product, inCart: 1 }];
    });
  };

  // Funksjon for å fjerne fra cart
  const removeFromCart = (id) => {
    // Vi setter cart til en ny cart
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, inCart: (item.inCart ?? 1) - 1 } : item,
        )
        .filter((item) => item.inCart > 0),
    );
  };

  const removeItemCompletly = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((total, item) => {
    return total + item.inCart;
  }, 0);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.inCart;
  }, 0);

  const providerObject = {
    totalItems,
    cart,
    addToCart,
    removeFromCart,
    removeItemCompletly,
    emptyCart,
  };

  return (
    <CartContext.Provider value={providerObject}>
      {children}
    </CartContext.Provider>
  );
}
