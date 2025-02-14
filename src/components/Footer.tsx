const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">About Us</h3>
            <p className="text-gray-600">
              Yara's Kids' Corner is your one-stop shop for quality children's books and toys.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-600 hover:text-pink-500 transition-colors">Products</a></li>
              <li><a href="/cart" className="text-gray-600 hover:text-pink-500 transition-colors">Cart</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/products?category=books" className="text-gray-600 hover:text-pink-500 transition-colors">Books</a></li>
              <li><a href="/products?category=toys" className="text-gray-600 hover:text-pink-500 transition-colors">Toys</a></li>
              <li><a href="/products?category=educational" className="text-gray-600 hover:text-pink-500 transition-colors">Educational</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: contact@kidscorner.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Kids Street</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Yara's Kids' Corner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
