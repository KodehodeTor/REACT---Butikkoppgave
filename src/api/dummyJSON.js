import axios from "axios";

// Returns an array of all products
const fetchAllProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
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

const productByCategory = async (category) => {
  const res = await axios.get(`/products/category/${category}`);
  return res.data;
};

export {
  fetchAllProducts,
  fetchProductDetails,
  fetchCategories,
  productByCategory,
};
