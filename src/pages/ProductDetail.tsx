import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  // Books
  { id: 1, name: 'Storybook', price: 19.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A beautiful storybook for kids.', category: 'Books' },
  { id: 2, name: 'Adventure Book', price: 24.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'An exciting adventure book for kids.', category: 'Books' },
  { id: 3, name: 'Educational Book', price: 19.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'An educational book for kids.', category: 'Books' },

  // Toys
  { id: 4, name: 'Toy Car', price: 29.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A fun toy car for kids.', category: 'Toys' },
  { id: 5, name: 'Building Blocks', price: 14.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'Educational building blocks for kids.', category: 'Toys' },
  { id: 6, name: 'Puzzle', price: 9.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A fun puzzle for kids to solve.', category: 'Toys' },

  // Dolls
  { id: 7, name: 'Doll', price: 12.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A cute doll for kids.', category: 'Dolls' },
  { id: 8, name: 'Barbie Doll', price: 29.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A popular Barbie doll for kids.', category: 'Dolls' },
  { id: 9, name: 'Action Figure', price: 19.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'An action figure for kids.', category: 'Dolls' },

  // Educational Toys
  { id: 10, name: 'Science Kit', price: 39.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A science kit for kids to explore.', category: 'Educational Toys' },
  { id: 11, name: 'Math Puzzle', price: 14.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A math puzzle for kids to solve.', category: 'Educational Toys' },
  { id: 12, name: 'Language Learning Toy', price: 24.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A language learning toy for kids.', category: 'Educational Toys' },

  // Art Supplies
  { id: 13, name: 'Crayons', price: 4.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A set of colorful crayons for kids.', category: 'Art Supplies' },
  { id: 14, name: 'Paint Set', price: 19.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A set of paints for kids to create.', category: 'Art Supplies' },
  { id: 15, name: 'Drawing Pad', price: 9.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A drawing pad for kids to draw on.', category: 'Art Supplies' },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
