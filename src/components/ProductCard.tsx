import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
