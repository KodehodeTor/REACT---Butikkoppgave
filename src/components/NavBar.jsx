import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { House, ShoppingCart } from "lucide-react";

export default function NavBar() {
  const { totalItems } = useCart();
  return (
    <nav className="navBar">
      <Link to="/">
        <House /> <br />
      </Link>
      <Link to="/cart">
        <ShoppingCart />
        <span>{totalItems}</span>
      </Link>
    </nav>
  );
}
