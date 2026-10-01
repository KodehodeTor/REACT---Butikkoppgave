import { useProductAll, useProductByCategory } from "../hooks/useProductQuery";
import ProductCard from "../components/ProductCard";

export default function Products({ selectedCategory }) {
  const allProductsQuery = useProductAll();
  const categoryQuery = useProductByCategory(selectedCategory);
  const activeQuery = selectedCategory ? categoryQuery : allProductsQuery;
  const { data, isLoading, isError } = activeQuery;
  if (isLoading) return <h3>Loading product list...</h3>;
  if (isError) return <h3>Failed to load product list</h3>;
  return (
    <div className="productList">
      {data.products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
