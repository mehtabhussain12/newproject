import React, { useState } from 'react';
import { Menu, ShoppingCart, Star, ChevronRight, Milk, Instagram, Facebook, Twitter } from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CustomizeLassi from './components/CustomizeLassi';
import InfluencerSection from './components/InfluencerSection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <NavBar onCartClick={() => setIsCartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <main>
        <Hero />
        <CustomizeLassi />
        <InfluencerSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;