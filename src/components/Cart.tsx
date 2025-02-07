import React from 'react';
import { X, ShoppingCart } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay with blur effect */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Cart panel */}
      <div 
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white/90 backdrop-blur-md shadow-xl transform transition-all duration-500 ease-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-50 p-2 rounded-full">
                <ShoppingCart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Your Cart</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
            >
              <X className="w-6 h-6 text-gray-500 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="bg-red-50 p-4 rounded-full inline-block mb-4">
                <ShoppingCart className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <button 
                onClick={onClose}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors transform hover:scale-105 duration-300"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;