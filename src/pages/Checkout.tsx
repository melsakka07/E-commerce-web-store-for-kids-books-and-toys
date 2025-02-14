import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h1 className="text-3xl font-bold text-pink-500 mb-8">Checkout</h1>
      
      <form className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-colors"
            placeholder="Enter your email address"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="block text-gray-700 font-medium">
            Shipping Address
          </label>
          <textarea
            id="address"
            name="address"
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-colors"
            placeholder="Enter your shipping address"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="card" className="block text-gray-700 font-medium">
            Card Number
          </label>
          <input
            type="text"
            id="card"
            name="card"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-colors"
            placeholder="Enter your card number"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="expiry" className="block text-gray-700 font-medium">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-colors"
              placeholder="MM/YY"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="cvv" className="block text-gray-700 font-medium">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-colors"
              placeholder="123"
            />
          </div>
        </div>

        <div className="flex justify-between items-center pt-6">
          <Link 
            to="/cart"
            className="text-pink-500 hover:text-pink-600 transition-colors"
          >
            ← Back to Cart
          </Link>
          <button
            type="submit"
            className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Complete Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
