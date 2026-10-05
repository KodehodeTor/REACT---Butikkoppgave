import { useContext, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Context for cart data and functions.
const CartContext = createContext();
// Hook for accessing CartContext
export const useCart = () => useContext(CartContext);

// Shares cart data and functions to components.
export default function CartProvider({ children }) {
  // Stores the cart in localStorage.
  const [cart, setCart] = useLocalStorage("cart", []);
  // Adds product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      // Checks if the product is in cart.
      const exist = prev.find((item) => item.id === product.id);
      //if exist, increase with 1.
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, inCart: (item.inCart ?? 0) + 1 }
            : item,
        );
      }
      // If product is not in cart, add it as 1 product.
      return [...prev, { ...product, inCart: 1 }];
    });
  };

  // Removes 1 product from cart.
  const removeFromCart = (id) => {
    // Updates cart based on previous state.
    setCart((prev) =>
      prev
        // Decreases matching product with 1.
        .map((item) =>
          item.id === id ? { ...item, inCart: (item.inCart ?? 1) - 1 } : item,
        )
        // Removes products that reaches 0.
        .filter((item) => item.inCart > 0),
    );
  };
  // Remove product from cart no matter the amount.
  const removeItemCompletly = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  // Removes all products from cart.
  const emptyCart = () => {
    setCart([]);
  };
  // Shows how many total items in the cart currently.
  const totalItems = cart.reduce((total, item) => {
    return total + item.inCart;
  }, 0);
  // Shows the total price of items in the cart.
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.inCart;
  }, 0);

  // Cart data and functions put into object for context.
  const providerObject = {
    totalPrice,
    totalItems,
    cart,
    addToCart,
    removeFromCart,
    removeItemCompletly,
    emptyCart,
  };

  // Returns cart data and functions to all child components.
  return (
    <CartContext.Provider value={providerObject}>
      {children}
    </CartContext.Provider>
  );
}
