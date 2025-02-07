import React, { useState } from 'react';
import { Share2, Heart, TrendingUp, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface CustomLassi {
  base: string;
  twist: string;
  sweetness: string;
  name: string;
}

const CustomizeLassi: React.FC = () => {
  const [step, setStep] = useState(1);
  const [customLassi, setCustomLassi] = useState<CustomLassi>({
    base: '',
    twist: '',
    sweetness: '',
    name: '',
  });

  const bases = [
    { id: 'mango', name: 'Mango', color: 'bg-yellow-400', icon: '🥭' },
    { id: 'strawberry', name: 'Strawberry', color: 'bg-red-400', icon: '🍓' },
    { id: 'classic', name: 'Classic', color: 'bg-white', icon: '🥛' },
    { id: 'chocolate', name: 'Chocolate', color: 'bg-brown-500', icon: '🍫' },
  ];

  const twists = [
    { id: 'honey', name: 'Honey', icon: '🍯' },
    { id: 'basil', name: 'Basil Seeds', icon: '🌱' },
    { id: 'dryfruits', name: 'Dry Fruits', icon: '🥜' },
    { id: 'icecream', name: 'Ice Cream', icon: '🍦' },
  ];

  const sweetnessLevels = [
    { id: 'low', name: 'Low', icon: '🍯' },
    { id: 'medium', name: 'Medium', icon: '🍯🍯' },
    { id: 'high', name: 'High', icon: '🍯🍯🍯' },
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleShare = () => {
    alert(`🎉 Your ${customLassi.name || 'Lassi'} has been created! Share on social media.`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-white min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-3xl w-full"
      >
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Customize Your Lassi</h2>

        {/* Step Indicator */}
        <div className="flex justify-between mb-6">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                step >= num ? 'bg-red-600 text-white' : 'bg-gray-300'
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Steps */}
        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">Choose Your Base</h3>
              <div className="grid grid-cols-2 gap-4">
                {bases.map((base) => (
                  <button
                    key={base.id}
                    onClick={() => setCustomLassi({ ...customLassi, base: base.id })}
                    className={`p-6 rounded-xl shadow-md transition-all ${
                      customLassi.base === base.id ? 'bg-red-500 text-white' : 'bg-white'
                    }`}
                  >
                    <div className="text-4xl">{base.icon}</div>
                    <p>{base.name}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">Add a Twist</h3>
              <div className="grid grid-cols-2 gap-4">
                {twists.map((twist) => (
                  <button
                    key={twist.id}
                    onClick={() => setCustomLassi({ ...customLassi, twist: twist.id })}
                    className={`p-6 rounded-xl shadow-md transition-all ${
                      customLassi.twist === twist.id ? 'bg-red-500 text-white' : 'bg-white'
                    }`}
                  >
                    <div className="text-4xl">{twist.icon}</div>
                    <p>{twist.name}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">Select Sweetness Level</h3>
              <div className="flex gap-4">
                {sweetnessLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setCustomLassi({ ...customLassi, sweetness: level.id })}
                    className={`flex-1 p-6 rounded-xl shadow-md transition-all ${
                      customLassi.sweetness === level.id ? 'bg-red-500 text-white' : 'bg-white'
                    }`}
                  >
                    {level.icon} {level.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">Name Your Creation</h3>
              <input
                type="text"
                value={customLassi.name}
                onChange={(e) => setCustomLassi({ ...customLassi, name: e.target.value })}
                placeholder="Give your lassi a name..."
                className="w-full p-4 border-2 border-gray-300 rounded-lg"
              />
              <button onClick={handleShare} className="mt-4 w-full p-4 bg-red-600 text-white rounded-lg">
                <Share2 className="inline-block mr-2" /> Share Your Lassi
              </button>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button onClick={handleBack} disabled={step === 1} className="px-6 py-3 bg-gray-300 rounded-full">Back</button>
          <button onClick={handleNext} className="px-6 py-3 bg-red-600 text-white rounded-full">{step === 4 ? 'Create' : 'Next'}</button>
        </div>
      </motion.div>
    </section>
  );
};

export default CustomizeLassi;
