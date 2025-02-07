import React from 'react';
import { Leaf, Sparkles, Beaker } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: '100% Natural Ingredients',
      description: 'Only the freshest, highest quality ingredients make it into our lassi.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'No Artificial Flavors',
      description: 'Pure, authentic taste without any artificial additives.'
    },
    {
      icon: <Beaker className="w-6 h-6" />,
      title: 'Unique Fusion Flavors',
      description: 'Traditional recipes meet modern innovation in our signature blends.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=600&h=800"
                alt="Lassi Collection"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-red-600 font-bold">20+ Flavors</p>
                <p className="text-sm text-gray-600">Handcrafted Daily</p>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:pl-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="text-red-600 block">Lassi Lab?</span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              At Lassi Lab, we blend centuries-old traditions with modern innovation to create the perfect lassi experience. Every glass is a testament to our commitment to quality and authenticity.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;