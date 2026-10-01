import {
  fetchAllProducts,
  fetchProductDetails,
  fetchCategories,
  fetchProductByCategory,
  searchProducts,
} from "../api/dummyJSON";
import { useQuery } from "@tanstack/react-query";

const useProductAll = (limit = 10, skip = 0) => {
  // UseQuery tar imot et objekt:
  return useQuery({
    queryKey: ["products", { limit, skip }],
    queryFn: () => fetchAllProducts({ limit, skip }),
  });
};

const useProductDetails = (id) => {
  return useQuery({
    // Key blir productdetails id, som blir en unik id for productet så det kan bli cachet riktig.
    queryKey: ["productDetails", id],
    // Fn trenger en arrow function så den ikke blir called før den blir aktivert.
    queryFn: () => fetchProductDetails(id),
    // Kjører kun når id er tilgjengelig
    enabled: !!id,
  });
};

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

const useProductByCategory = (category) => {
  return useQuery({
    queryKey: ["products", "category", category],
    queryFn: () => fetchProductByCategory(category),
    enabled: !!category,
  });
};

const useSearchByProducts = (product) => {
  return useQuery({
    queryKey: ["products", product],
    queryFn: () => searchProducts(product),
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
