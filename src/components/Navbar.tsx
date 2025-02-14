import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Yara's Kids' Corner</Link>
        <div className="flex space-x-4">
          <Link to="/products" className="text-white">Products</Link>
          <Link to="/cart" className="text-white flex items-center">
            <ShoppingCart className="mr-1" />
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
