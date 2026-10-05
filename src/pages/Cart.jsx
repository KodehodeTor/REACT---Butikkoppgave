import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

// Shows current cart content, item count and total price.
export default function Cart() {
  // Gets cart data and total price from CartContext.
  const { cart, totalItems, totalPrice } = useCart();
  return (
    <div>
      {/* displays Cart, total items and price.q*/}
      <h2>Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}</p>
      <div className="productList">
        {/* Makes a ProductCard for products in cart. */}
        {cart.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
