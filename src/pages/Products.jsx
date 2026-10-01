import {
  useProductAll,
  useProductByCategory,
  useSearchByProducts,
} from "../hooks/useProductQuery";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../context/SearchContext";

export default function Products({ selectedCategory }) {
  const { searchInput } = useSearch();
  const allProductsQuery = useProductAll();
  const categoryQuery = useProductByCategory(selectedCategory);
  const searchQuery = useSearchByProducts(searchInput);
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
  return (
    <div className="productList">
      {data.products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
