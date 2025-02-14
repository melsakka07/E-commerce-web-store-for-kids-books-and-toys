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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <Link to={`/products/${id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-10" />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold transition-colors duration-300 hover:text-blue-500">{name}</h2>
        <p className="text-gray-600 mt-2 transition-all duration-300">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
