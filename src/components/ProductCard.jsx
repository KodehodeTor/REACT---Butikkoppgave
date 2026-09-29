import { useCart } from "../context/CartContext";

export default function ProductCard(item) {
  const { title, image, price, id, inCart } = item;
  const { addToCart, removeFromCart } = useCart();
  return (
    <div className="productCard">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{price}</p>{" "}
      {inCart ? (
        <button onClick={() => removeFromCart(id)}>
          Remove from Cart{inCart}
        </button>
      ) : (
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      )}
    </div>
  );
}
