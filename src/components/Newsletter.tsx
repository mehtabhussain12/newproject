import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <section className="py-20 bg-red-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get 10% Off Your First Order
          </h2>
          <p className="text-red-100 mb-8">
            Join our newsletter and discover the latest flavors, exclusive offers, and Lassi Lab updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 text-white placeholder-red-200 border-2 border-white/20 focus:border-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="btn-ripple bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

          <p className="text-red-200 text-sm mt-4">
            By subscribing, you agree to receive marketing emails from Lassi Lab.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;