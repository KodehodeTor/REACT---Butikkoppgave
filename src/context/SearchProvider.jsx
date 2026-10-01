import { useState } from "react";
import { SearchContext } from "./SearchContext";

export default function SearchProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
}
