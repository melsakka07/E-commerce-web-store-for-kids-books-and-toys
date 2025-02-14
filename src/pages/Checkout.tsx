import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full border rounded py-2 px-3" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border rounded py-2 px-3" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input type="text" className="w-full border rounded py-2 px-3" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
