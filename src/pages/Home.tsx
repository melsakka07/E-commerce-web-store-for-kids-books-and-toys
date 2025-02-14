import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// Select a few products to feature on the home page
const featuredProducts = [
  // One popular item from each category
  { 
    id: 2, 
    name: 'Adventure Book', 
    price: 24.99, 
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f', 
    category: 'Books' 
  },
  { 
    id: 5, 
    name: 'Building Blocks', 
    price: 14.99, 
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b', 
    category: 'Toys' 
  },
  { 
    id: 10, 
    name: 'Science Kit', 
    price: 39.99, 
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8', 
    category: 'Educational Toys' 
  }
];

const Home = () => {
  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <div 
        className="bg-cover bg-center h-96 flex items-center justify-center rounded-lg mb-8 transition-transform duration-500 hover:shadow-2xl" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555009393-f20bdb245c4d)' }}
      >
        <div className="text-center text-white bg-pink-400 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-opacity-60">
          <h1 className="text-4xl font-bold animate-slideDown">Welcome to Yara's Kids' Corner</h1>
          <p className="text-lg mt-2 animate-slideUp">Discover the best books and toys for your little ones.</p>
          <Link 
            to="/products" 
            className="mt-4 inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full transition-all duration-300 hover:transform hover:translate-y-[-2px] hover:shadow-lg animate-fadeIn"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="mt-12 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-500 transition-all duration-300 hover:scale-105">
          Featured Products ✨
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-slideUp" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/products" 
            className="inline-block bg-pink-400 hover:bg-pink-500 text-white py-2 px-6 rounded-full transition-all duration-300 hover:transform hover:translate-y-[-2px] hover:shadow-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

