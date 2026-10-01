import { useSearch } from "../context/SearchContext";
import NavBar from "./NavBar";

export default function Header() {
  const { searchInput, setSearchInput } = useSearch();
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
