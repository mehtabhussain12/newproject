import React from 'react';
import { Milk, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600/10 p-2 rounded-full">
                <Milk className="w-6 h-6 text-red-600" />
              </div>
              <span className="font-bold text-xl">Lassi Lab</span>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting premium lassi experiences with a perfect blend of tradition and innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-red-600 transition-colors">Menu</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Lassi Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@lassilab.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Monday - Friday: 8am - 9pm</li>
              <li>Saturday: 9am - 9pm</li>
              <li>Sunday: 10am - 8pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Lassi Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;