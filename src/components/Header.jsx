import { useSearch } from "../context/SearchContext";
import NavBar from "./NavBar";
import CategoryMenu from "./CategoryMenu";
import DarkModeToggle from "./ThemeSwitch";

//Displays header, navbar, search input, categoryMenu and dark mode.
export default function Header({ selectedCategory, setSelectedCategory }) {
  // Search value and function to update from SearchContext.
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
          // Input value synched with search context.
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {/* Selected category and its state set to CategoryMenu. */}
        <CategoryMenu
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </header>
  );
}
