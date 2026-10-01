import NavBar from "./NavBar";
import { useState } from "react";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <header>
        <NavBar />
        <input
          type="text"
          placeholder="Search product"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </header>
    </div>
  );
}
