import { Link } from "react-router";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const { totalItems } = useCart();
  return (
    <nav className="navBar">
      <Link to="/">
        Home <br />
      </Link>
      <Link to="/cart">Cart:{totalItems}</Link>
    </nav>
  );
}
