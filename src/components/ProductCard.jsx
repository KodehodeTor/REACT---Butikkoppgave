import { useCart } from "../context/CartContext";

export default function ProductCard(item) {
  const { title, thumbnail, price, id } = item;
  const { cart, addToCart, removeFromCart } = useCart();
  const cartItem = cart.find((item) => item.id === id);
  return (
    <div className="productCard">
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} />
      <p>{price}</p>{" "}
      {cartItem ? (
        <button onClick={() => removeFromCart(id)}>
          Remove from Cart{cartItem}
        </button>
      ) : (
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      )}
    </div>
  );
}
