import { useOutletContext } from "react-router";
import Products from "./Products";

export default function Home() {
  const { selectedCategory } = useOutletContext();
  return (
    <main>
      <h2 className="products_title">Products</h2>
      <Products selectedCategory={selectedCategory} />
    </main>
  );
}
