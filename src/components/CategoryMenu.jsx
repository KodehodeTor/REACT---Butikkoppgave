import { useCategories } from "../hooks/useProductQuery";

export default function CategoryMenu() {
  const { data, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading categories....</p>;
  if (isError) return <p>Failed to load categories</p>;

  return <div>Categories loaded.</div>;
}
