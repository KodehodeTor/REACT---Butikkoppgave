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

export { fetchAllProducts, fetchProductDetails };
