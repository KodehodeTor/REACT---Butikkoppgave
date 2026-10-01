import {
  fetchAllProducts,
  fetchProductDetails,
  fetchCategories,
} from "../api/dummyJSON";
import { useQuery } from "@tanstack/react-query";

const useProductAll = () => {
  // UseQuery tar imot et objekt:
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
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

export { useProductAll, useProductDetails, useCategories };
