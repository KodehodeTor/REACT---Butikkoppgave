import { useSearch } from "../context/SearchContext";
import NavBar from "./NavBar";

export default function Header() {
  const { searchInput, setSearchInput } = useSearch();
  return (
    <div>
      <h1 className="title">404: Money Not Found</h1>
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
