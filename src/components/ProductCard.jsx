import { useCart } from "../context/CartContext";
import { Link } from "react-router";

export default function ProductCard(item) {
  const { title, thumbnail, price, id } = item;
  const { cart, addToCart, removeFromCart } = useCart();
  const cartItem = cart.find((item) => item.id === id);
  return (
    <div className="productCard">
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} />
      <p>{price}</p> <Link to={`/products/${id}`}>Product</Link>
      {cartItem ? (
        <button onClick={() => removeFromCart(id)}>
          Remove from Cart{cartItem.inCart}
        </button>
      ) : (
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      )}
    </div>
  );
}
