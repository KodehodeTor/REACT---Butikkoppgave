import {
  useProductAll,
  useProductByCategory,
  useSearchByProducts,
} from "../hooks/useProductQuery";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../context/SearchContext";
import { useState } from "react";

export default function Products({ selectedCategory }) {
  const { searchInput } = useSearch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const skip = (currentPage - 1) * itemsPerPage;
  const categoryQuery = useProductByCategory(selectedCategory);
  const searchQuery = useSearchByProducts(searchInput);
  const allProductsQuery = useProductAll(itemsPerPage, skip);
  const activeQuery = searchInput
    ? searchQuery
    : selectedCategory
      ? categoryQuery
      : allProductsQuery;
  const { data, isLoading, isError } = activeQuery;

  if (isLoading) return <h3>Loading product list...</h3>;
  if (isError) return <h3>Failed to load product list</h3>;
  if (searchInput && data.products.length === 0) {
    return <h3>No products found</h3>;
  }
  const totalPages = Math.ceil(data.total / itemsPerPage);
  return (
    <>
      <div className="productList">
        {data.products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      {!searchInput && !selectedCategory && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            page {currentPage} of {totalPages}
          </span>

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
