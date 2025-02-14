import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131)' }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Kids' Corner</h1>
          <p className="text-lg mt-2">Discover the best books and toys for your little ones.</p>
          <Link to="/products" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">Shop Now</Link>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured products will be dynamically loaded here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
