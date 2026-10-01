import { useCategories } from "../hooks/useProductQuery";

export default function CategoryMenu() {
  const { data, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading categories....</p>;
  if (isError) return <p>Failed to load categories</p>;

  return (
    <div>
      <label htmlFor="category">Category:</label>
      <select id="category">
        <option value="">All products</option>
        {data.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
