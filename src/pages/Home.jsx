import CategoryMenu from "../components/CategoryMenu";
import Products from "./Products";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <main>
      <CategoryMenu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <h1>Products</h1>
      <Products />
    </main>
  );
}
