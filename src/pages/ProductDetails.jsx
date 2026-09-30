import { useParams } from "react-router";
import { useProductDetails } from "../hooks/useProductQuery";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useProductDetails(id);
  if (isLoading) return <h3>Loading product...</h3>;
  if (isError) return <h3>Failed to load product</h3>;
  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.thumbnail} alt={data.title} />
      <p>{data.price}</p>
    </div>
  );
}
