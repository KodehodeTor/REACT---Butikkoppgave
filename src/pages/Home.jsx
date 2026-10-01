import CategoryMenu from "../components/CategoryMenu";
import Products from "./Products";

export default function Home() {
  return (
    <main>
      <CategoryMenu />
      <h1>Products</h1>
      <Products />
    </main>
  );
}
