import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-pink-400 p-4 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-white text-2xl font-bold transition-transform duration-300 hover:scale-105"
        >
          Yara's Kids' Corner
        </Link>
        <div className="flex space-x-6">
          <Link 
            to="/products" 
            className="text-white opacity-90 hover:opacity-100 transition-all duration-300 hover:transform hover:translate-y-[-2px]"
          >
            Products
          </Link>
          <Link 
            to="/cart" 
            className="text-white opacity-90 hover:opacity-100 transition-all duration-300 hover:transform hover:translate-y-[-2px] flex items-center"
          >
            <ShoppingCart className="mr-1 transition-transform duration-300 hover:scale-110" />
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
