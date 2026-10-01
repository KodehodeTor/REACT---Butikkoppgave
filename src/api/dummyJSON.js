import axios from "axios";

// Returns an array of all products
const fetchAllProducts = async ({ limit = 10, skip = 0 }) => {
  const res = await axios.get("https://dummyjson.com/products", {
    params: {
      limit,
      skip,
    },
  });
  return res.data;
};

const fetchProductDetails = async (id) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res.data;
};

const fetchCategories = async () => {
  const res = await axios.get("https://dummyjson.com/products/categories");
  return res.data;
};

const fetchProductByCategory = async (category) => {
  const res = await axios.get(
    `https://dummyjson.com/products/category/${category}`,
  );
  return res.data;
};

const searchProducts = async (product) => {
  const res = await axios.get(
    `https://dummyjson.com/products/search?q=${product}`,
  );
  return res.data;
};

export {
  fetchAllProducts,
  fetchProductDetails,
  fetchCategories,
  fetchProductByCategory,
  searchProducts,
};
