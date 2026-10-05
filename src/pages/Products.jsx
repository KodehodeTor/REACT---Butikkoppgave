import {
  useProductAll,
  useProductByCategory,
  useSearchByProducts,
} from "../hooks/useProductQuery";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../context/SearchContext";
import { useState } from "react";

// Shows products based on search, category or pagination state.
export default function Products({ selectedCategory }) {
  // Gets our search input from SearchContext.
  const { searchInput } = useSearch();
  // Store the current product page.
  const [currentPage, setCurrentPage] = useState(1);
  // Controls how many products are shown each page.
  const itemsPerPage = 10;
  // Calculates how many products should be skipped.
  const skip = (currentPage - 1) * itemsPerPage;
  // Creates query for products filtered in a category.
  const categoryQuery = useProductByCategory(selectedCategory);
  // Creates query for products matching search input.
  const searchQuery = useSearchByProducts(searchInput);
  // Creates query for all products with current pagination value.
  const allProductsQuery = useProductAll(itemsPerPage, skip);
  // Choose which query result to use.
  // Search takes priority over category, which take priority over products.
  const activeQuery = searchInput
    ? searchQuery
    : selectedCategory
      ? categoryQuery
      : allProductsQuery;
  // Gets data and query status from active query.
  const { data, isLoading, isError } = activeQuery;
  // If loading return... if error return.
  if (isLoading) return <h3>Loading product list...</h3>;
  if (isError) return <h3>Failed to load product list</h3>;
  // Shows a message if a search returns nothing.
  if (searchInput && data.products.length === 0) {
    return <h3>No products found</h3>;
  }
  // Calculates number of pages using total products from API.
  const totalPages = Math.ceil(data.total / itemsPerPage);
  return (
    <>
      <div className="productList">
        {data.products.map((item) => (
          // Creates ProductCard for product returned by active query.
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      {/* Pagination displayed when showing all products. */}
      {!searchInput && !selectedCategory && (
        <div className="pagination">
          {/* Goes back a to previous page and disables the button when on 1 page. */}
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            page {currentPage} of {totalPages}
          </span>
          {/* Moves to next page and disables button on the last page. */}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
