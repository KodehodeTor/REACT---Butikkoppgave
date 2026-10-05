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
      <select
        id="category"
        //Keeps selected value synched with selected category.
        value={selectedCategory}
        // Accessability purposes:
        aria-label="Product category"
        // Updates selected category when option is chosen.
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {/* Empty value that represents all products */}
        <option value="">All products</option>
        {data.map((category) => (
          // Creates option for each category returned by API.
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
