import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { House, ShoppingCart } from "lucide-react";

// Displays navigation links and number of items in cart.
export default function NavBar() {
  // Total numver of items from CartContext.
  const { totalItems } = useCart();
  return (
    <nav className="navBar">
      {/* Links to home page. */}
      <Link to="/">
        <House /> <br />
      </Link>
      {/* Links to shopping cart (with current count) */}
      <Link to="/cart">
        <ShoppingCart />
        <span>{totalItems}</span>
      </Link>
    </nav>
  );
}
