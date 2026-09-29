import { useProductAll } from "../hooks/useProductQuery";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { data, isLoading, isError } = useProductAll();
  if (isLoading) return <h3>Loading product list...</h3>;
  if (isError) return <h3>Failed to load product list</h3>;
  return (
    <div className="productList">
      {data.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
