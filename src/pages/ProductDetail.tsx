import { useParams, Link } from 'react-router-dom';

const products = [
  // Books
  { id: 1, name: 'Storybook', price: 19.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', description: 'A beautiful storybook for kids.', category: 'Books' },
  { id: 2, name: 'Adventure Book', price: 24.99, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f', description: 'An exciting adventure book for kids.', category: 'Books' },
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
  const productId = id ? parseInt(id) : 0;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto p-4 min-h-[60vh] flex items-center justify-center">
        <div className="text-center animate-fadeIn">
          <h2 className="text-2xl font-bold text-gray-700">Product not found</h2>
          <Link 
            to="/products" 
            className="mt-4 inline-block bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 animate-scaleUp">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-pink-500">{product.name}</h1>
          <p className="text-2xl text-pink-400 font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <div className="pt-6">
            <button 
              className="w-full md:w-auto bg-pink-400 text-white px-8 py-3 rounded-full hover:bg-pink-500 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
