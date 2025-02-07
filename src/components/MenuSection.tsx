import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'classic', name: 'Classic' },
    { id: 'premium', name: 'Premium' },
    { id: 'seasonal', name: 'Seasonal' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Mango Paradise',
      description: 'Sweet Alphonso mangoes blended with creamy yogurt',
      price: 199,
      category: 'premium',
      image: 'https://www.allrecipes.com/thmb/gZ3H84By0Akh1GgWrqDV_Zu2O1M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indian-Lassi-4x3-1-2000-02cd65d95cb447e48e374bd8884be481.jpg',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Berry Bliss',
      description: 'Mixed berries with honey-sweetened yogurt',
      price: 249,
      category: 'premium',
      image: 'https://somethingiscooking.com/wp-content/uploads/2017/04/Lassi-5.jpg',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Classic Rose',
      description: 'Traditional rose-flavored lassi with cardamom',
      price: 499,
      category: 'classic',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/lassi-recipe-1.jpg',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Mango Paradise',
      description: 'Sweet Alphonso mangoes blended with creamy yogurt',
      price: 199,
      category: 'premium',
      image: 'https://www.allrecipes.com/thmb/gZ3H84By0Akh1GgWrqDV_Zu2O1M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indian-Lassi-4x3-1-2000-02cd65d95cb447e48e374bd8884be481.jpg',
      rating: 4.9
    },
    {
      id: 5,
      name: 'Berry Bliss',
      description: 'Mixed berries with honey-sweetened yogurt',
      price: 249,
      category: 'premium',
      image: 'https://somethingiscooking.com/wp-content/uploads/2017/04/Lassi-5.jpg',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Classic Rose',
      description: 'Traditional rose-flavored lassi with cardamom',
      price: 499,
      category: 'Seasonal',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/lassi-recipe-1.jpg',
      rating: 4.7
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Signature Blends
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium lassi drinks, made with the finest ingredients
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="hover-card group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-red-600">RS {item.price}</span>
                  <button className="btn-ripple bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors flex items-center gap-2 group">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;