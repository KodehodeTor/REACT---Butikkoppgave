import { useParams } from "react-router";
import { useProductDetails } from "../hooks/useProductQuery";
import { useCart } from "../context/CartContext";

// Displays details about a selected product and adds to cart.
export default function ProductDetails() {
  // Gets product id from our URL.
  const { id } = useParams();
  // Product data and query status using product id.
  const { data, isLoading, isError } = useProductDetails(id);
  // Use function to add a product to cart.
  const { addToCart } = useCart();
  // If is loading return .... if error return....
  if (isLoading) return <h3>Loading product...</h3>;
  if (isError) return <h3>Failed to load product</h3>;
  return (
    <main className="productDetails">
      <div className="productDetailsImg">
        {/* shows product image using data from API */}
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="productDetailsInfo">
        {/* Shows information on selected product.Title, price, description, category and brand. */}
        <h2>{data.title}</h2>
        <p className="productDetailsPrice">{data.price}</p>
        <p>{data.description}</p>
        <p>{data.category}</p>
        <p>{data.brand}</p>
        {/* Adds the product to cart when clicked. */}
        <button onClick={() => addToCart(data)}>Add to cart</button>
      </div>
    </main>
  );
}
