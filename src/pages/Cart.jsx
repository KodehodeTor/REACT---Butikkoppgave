import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, totalItems } = useCart();
  return (
    <div>
      <h2>Cart</h2>
      <p>Total items: {totalItems}</p>
      {cart.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
