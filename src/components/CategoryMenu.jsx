import { useCategories } from "../hooks/useProductQuery";

export default function CategoryMenu({
  selectedCategory,
  setSelectedCategory,
}) {
  const { data, isLoading, isError } = useCategories();

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
      {/* <p>Selected: {selectedCategory || "All products"}</p> */}
    </div>
  );
}
