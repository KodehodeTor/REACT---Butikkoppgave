import { createContext, useContext } from "react";

const SearchContext = createContext();
const useSearch = () => useContext(SearchContext);

export { SearchContext, useSearch };
