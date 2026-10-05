import { createContext, useContext } from "react";

// Context for sharing search input.
const SearchContext = createContext();
// Hook for accessing SearchContext from components.
const useSearch = () => useContext(SearchContext);

export { SearchContext, useSearch };
