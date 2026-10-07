import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

// Shows current cart content, item count and total price.
export default function Cart() {
  // Gets cart data and total price from CartContext.
  const {
    cart,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    removeItemCompletly,
    emptyCart,
  } = useCart();
  return (
    <div>
      {/* displays Cart, total items and price.q*/}
      <h2>Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}</p>
      <div className="productList">
        {/* Makes a ProductCard for products in cart. */}
        {cart.map((item) => (
          <div key={item.id}>
            <ProductCard {...item} />
            <button onClick={() => removeFromCart(item.id)}> - </button>

            <span>{item.inCart}</span>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeItemCompletly(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={() => emptyCart()}>Empty cart</button>
    </div>
  );
}
