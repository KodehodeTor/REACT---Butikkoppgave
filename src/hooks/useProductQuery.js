import {
  fetchAllProducts,
  fetchProductDetails,
  fetchCategories,
  fetchProductByCategory,
  searchProducts,
} from "../api/dummyJSON";
import { useQuery } from "@tanstack/react-query";

// Caches paginated product data with TanStack.
const useProductAll = (limit = 10, skip = 0) => {
  // useQuery gets object containing query information.
  return useQuery({
    // Limit and skip each page in cached query.
    queryKey: ["products", { limit, skip }],
    // Calls function when TanStack query needs the data.
    queryFn: () => fetchAllProducts({ limit, skip }),
  });
};

// Fetches and caches details of 1 product. (single)
const useProductDetails = (id) => {
  return useQuery({
    //Makes unique product details for each product in the cache.
    queryKey: ["productDetails", id],
    // Calls API function with requested product id.
    queryFn: () => fetchProductDetails(id),
    // Only runs query when id is available.
    enabled: !!id,
  });
};

// Fetch & cache available product category.
const useCategories = () => {
  return useQuery({
    // Identifies category query in the TanStack cache.
    queryKey: ["categories"],
    // Uses API function as query function.
    queryFn: fetchCategories,
  });
};
// Fetch & cache products in specific catagory.
const useProductByCategory = (category) => {
  return useQuery({
    // Category is part of query key so categories are stored in seperate queries in the cache.
    queryKey: ["products", "category", category],
    //Calls the API function with our category.
    queryFn: () => fetchProductByCategory(category),
    // Only runs when category has been chosen.
    enabled: !!category,
  });
};
// Fetch & cache products matching search.
const useSearchByProducts = (product) => {
  return useQuery({
    // Search term is part of query key so searches can be stored in seperate queries in the cache.
    queryKey: ["products", product],
    // Calls API function with our search term.
    queryFn: () => searchProducts(product),
    // Only run query when search term exist.
    enabled: !!product,
  });
};

export {
  useProductAll,
  useProductDetails,
  useCategories,
  useProductByCategory,
  useSearchByProducts,
};
