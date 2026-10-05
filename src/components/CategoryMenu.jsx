import { useCategories } from "../hooks/useProductQuery";

// Displays category dropdown so we can select product category.
export default function CategoryMenu({
  selectedCategory,
  setSelectedCategory,
}) {
  // Gets category data and query status from TanStack.
  const { data, isLoading, isError } = useCategories();

  // If loading return... if error return...
  if (isLoading) return <p>Loading categories....</p>;
  if (isError) return <p>Failed to load categories</p>;

  return (
    <div>
      <label htmlFor="category"></label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
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
