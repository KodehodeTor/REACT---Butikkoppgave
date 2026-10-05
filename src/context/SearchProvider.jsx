import { useState } from "react";
import { SearchContext } from "./SearchContext";

// Search input state to components.
export default function SearchProvider({ children }) {
  // Current value of search input.
  const [searchInput, setSearchInput] = useState("");

  return (
    // Makes search value and state available through SearchContext.
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
}
