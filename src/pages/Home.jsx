import { useOutletContext } from "react-router";
import Products from "./Products";

// Shows products page and selected category to products.
export default function Home() {
  // Gets selected category from parent through Outlet context.
  const { selectedCategory } = useOutletContext();
  return (
    <main>
      <h2 className="products_title">Products</h2>
      {/* Passes selected category to products as a prop. */}
      <Products selectedCategory={selectedCategory} />
    </main>
  );
}
