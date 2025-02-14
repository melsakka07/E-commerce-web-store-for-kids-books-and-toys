import React from 'react';

const Cart = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Cart items will be dynamically loaded here */}
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default Cart;
