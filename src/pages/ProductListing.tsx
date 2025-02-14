import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  // Books
  { id: 1, name: 'Storybook', price: 19.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', category: 'Books' },
  { id: 2, name: 'Adventure Book', price: 24.99, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f', category: 'Books' },
  { id: 3, name: 'Educational Book', price: 19.99, image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b', category: 'Books' },

  // Toys
  { id: 4, name: 'Toy Car', price: 29.99, image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f', category: 'Toys' },
  { id: 5, name: 'Building Blocks', price: 14.99, image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b', category: 'Toys' },
  { id: 6, name: 'Puzzle', price: 9.99, image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99', category: 'Toys' },

  // Dolls
  { id: 7, name: 'Doll', price: 12.99, image: 'https://images.unsplash.com/photo-1602734846297-9299fc2d4703', category: 'Dolls' },
  { id: 8, name: 'Barbie Doll', price: 29.99, image: 'https://images.unsplash.com/photo-1559535332-db9971090158', category: 'Dolls' },
  { id: 9, name: 'Action Figure', price: 19.99, image: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf622', category: 'Dolls' },

  // Educational Toys
  { id: 10, name: 'Science Kit', price: 39.99, image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8', category: 'Educational Toys' },
  { id: 11, name: 'Math Puzzle', price: 14.99, image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904', category: 'Educational Toys' },
  { id: 12, name: 'Language Learning Toy', price: 24.99, image: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a', category: 'Educational Toys' },

  // Art Supplies
  { id: 13, name: 'Crayons', price: 4.99, image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634', category: 'Art Supplies' },
  { id: 14, name: 'Paint Set', price: 19.99, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f', category: 'Art Supplies' },
  { id: 15, name: 'Drawing Pad', price: 9.99, image: 'https://images.unsplash.com/photo-1517842645767-c639042777db', category: 'Art Supplies' },
];

const ProductListing = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
