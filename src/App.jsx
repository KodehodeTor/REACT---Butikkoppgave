import { Outlet } from "react-router";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Outlet context={{ selectedCategory }} />
    </div>
  );
}
