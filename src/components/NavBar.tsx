import React from 'react';
import { Menu, ShoppingCart, Milk } from 'lucide-react';

interface NavBarProps {
  onCartClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onCartClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6 text-red-600" />
          </button>
          
          <div className="flex items-center space-x-8">
            <div className="flex items-center gap-2 text-red-600">
              <div className="bg-red-50 p-2 rounded-full">
                <Milk className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl hidden sm:inline">Lassi Lab</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#menu" className="text-gray-600 hover:text-red-600 transition-colors">Menu</a>
              <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-red-600 transition-colors">Contact</a>
            </div>
          </div>

          <button 
            onClick={onCartClick}
            className="p-2 relative"
          >
            <ShoppingCart className="w-6 h-6 text-red-600" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;