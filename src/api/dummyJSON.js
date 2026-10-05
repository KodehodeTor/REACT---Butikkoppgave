import axios from "axios";

// Returns an array of all products. limit controls how many products are returned. Skip do so no products are skipped when fetching.
const fetchAllProducts = async ({ limit = 10, skip = 0 }) => {
  const res = await axios.get("https://dummyjson.com/products", {
    params: {
      limit,
      skip,
    },
  });
  //Returns API data.
  return res.data;
};

//Fetches 1 product using id from API..
const fetchProductDetails = async (id) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  //Returns product data.
  return res.data;
};
//Fetches category from API.
const fetchCategories = async () => {
  const res = await axios.get("https://dummyjson.com/products/categories");
  //Returns category data.
  return res.data;
};
//Fetches products that belongs to a catagory.
const fetchProductByCategory = async (category) => {
  const res = await axios.get(
    `https://dummyjson.com/products/category/${category}`,
  );
  return res.data;
};
// Searches for products using what we searched for.
const searchProducts = async (product) => {
  const res = await axios.get(
    `https://dummyjson.com/products/search?q=${product}`,
  );
  return res.data;
};
//Shares API functions to other files.
export {
  fetchAllProducts,
  fetchProductDetails,
  fetchCategories,
  fetchProductByCategory,
  searchProducts,
};
