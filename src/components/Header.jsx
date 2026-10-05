import { useSearch } from "../context/SearchContext";
import NavBar from "./NavBar";
import CategoryMenu from "./CategoryMenu";
import DarkModeToggle from "./ThemeSwitch";

export default function Header({ selectedCategory, setSelectedCategory }) {
  const { searchInput, setSearchInput } = useSearch();
  return (
    <header className="header">
      <div className="headerNav">
        <DarkModeToggle />
        <h1 className="title">404: Money Not Found</h1>
        <NavBar />
      </div>

      <div className="headerControls">
        <input
          type="text"
          placeholder="Search product"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <CategoryMenu
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </header>
  );
}
