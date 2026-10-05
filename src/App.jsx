import { Outlet } from "react-router";
import Header from "./components/Header";
import { useState } from "react";

// Main application shares selected category with child rotes.
export default function App() {
  // Stores current selected product category.
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div>
      {/* Passes selected state to Header and CategoryMenu. */}
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {/* uses Outlet Context to provide active child routes and selected category. */}
      <Outlet context={{ selectedCategory }} />
    </div>
  );
}
