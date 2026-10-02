import { useParams } from "react-router";
import { useProductDetails } from "../hooks/useProductQuery";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useProductDetails(id);
  const { addToCart } = useCart();
  if (isLoading) return <h3>Loading product...</h3>;
  if (isError) return <h3>Failed to load product</h3>;
  return (
    <main className="productDetails">
      <div className="productDetailsImg">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="productDetailsInfo">
        <h2>{data.title}</h2>
        <p className="productDetailsPrice">{data.price}</p>
        <p>{data.description}</p>
        <p>{data.category}</p>
        <p>{data.brand}</p>
        <p>{data.rating}</p>
        <p>{data.stock}</p>
        <button onClick={() => addToCart(data)}>Add to cart</button>
      </div>
    </main>
  );
}
