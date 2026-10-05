import { useCart } from "../context/CartContext";
import { Link } from "react-router";

// Displays product information and links buttons and cart actions.
export default function ProductCard(item) {
  // Uses product properties needed by the component.
  const { title, thumbnail, price, id } = item;
  // art data and function for adding and deleting products.
  const { cart, addToCart, removeFromCart } = useCart();
  // Finds matching id in the cart by comparing product id.
  const cartItem = cart.find((item) => item.id === id);
  return (
    <div className="productCard">
      <h3>{title}</h3>
      {/* Displays product image with title as alt text. */}
      <img src={thumbnail} alt={title} />
      <p>{price}</p>
      {/* Links to detail page for product. */}
      <Link to={`/products/${id}`}>Product</Link>
      {/* Shows a delete button if the product is in the cart, if not: show add button.*/}
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
