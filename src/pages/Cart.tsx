import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  // Example cart items - in a real app, this would come from state management
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Storybook",
      price: 19.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
    },
    {
      id: 5,
      name: "Building Blocks",
      price: 14.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b"
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h1 className="text-3xl font-bold text-pink-500 mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link 
            to="/products"
            className="inline-block bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-pink-500">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button 
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button 
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                    title="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total:</span>
              <span className="text-pink-500">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <Link 
                to="/products"
                className="text-pink-500 hover:text-pink-600 transition-colors"
              >
                ← Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
