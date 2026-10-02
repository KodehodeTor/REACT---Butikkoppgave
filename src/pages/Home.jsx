import { useOutletContext } from "react-router";
import CategoryMenu from "../components/CategoryMenu";
import Products from "./Products";
import { useState } from "react";

export default function Home() {
  const { selectedCategory } = useOutletContext();
  return (
    <main>
      <h2>Products</h2>
      <Products selectedCategory={selectedCategory} />
    </main>
  );
}
