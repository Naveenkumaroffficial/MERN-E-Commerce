import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="block mt-4 bg-blue-600 text-white text-center py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
