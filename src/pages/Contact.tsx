import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
      // Reset form
      (e.target as HTMLFormElement).reset();
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h1 className="text-3xl font-bold text-pink-500 mb-8 text-center">Contact Us</h1>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-pink-500 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="text-pink-400" size={20} />
                <span>contact@kidscorner.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="text-pink-400" size={20} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="text-pink-400" size={20} />
                <span>123 Kids Street, Toytown, TY 12345</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-pink-500 mb-6">Store Hours</h2>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: 11:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-pink-500 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending' || formStatus === 'sent'}
              className={`
                w-full bg-pink-400 text-white px-6 py-3 rounded-full 
                flex items-center justify-center gap-2
                transform transition-all duration-300 
                ${formStatus === 'sending' || formStatus === 'sent' 
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:bg-pink-500 hover:scale-105 hover:shadow-lg'
                }
              `}
            >
              {formStatus === 'sending' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  Sending...
                </>
              ) : formStatus === 'sent' ? (
                <>
                  Message Sent ✓
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>

            {formStatus === 'error' && (
              <p className="text-red-500 text-center mt-2">
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 