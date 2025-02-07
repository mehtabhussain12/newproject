import React, { useEffect, useRef } from 'react';
import { ChevronRight, Star, Milk } from 'lucide-react';
import lassi from '../images/lassi.png';
const Hero: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-splash');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      {/* Parallax Background */}
      <div ref={heroRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white"></div>
        <svg className="absolute bottom-0 text-red-50 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-400 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div ref={logoRef} className="inline-block mb-8">
              <div className="flex items-center gap-3 text-red-700">
                <div className="bg-red-50 p-3 rounded-full transform hover:scale-110 transition-transform">
                  <Milk className="w-12 h-12" />
                </div>
                <span className="font-bold text-4xl">Lassi Lab</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-500 hover:scale-105">
              Discover the Art of
              <span className="text-red-600 block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Premium Lassi
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Experience the perfect blend of tradition and innovation with our artisanal lassi creations. Made fresh daily with premium ingredients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-ripple bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-105">
                Order Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-ripple bg-white text-red-600 px-8 py-3 rounded-full font-semibold border-2 border-red-600 hover:bg-red-50 transition-all duration-300 transform hover:scale-105">
                View Menu
              </button>
            </div>
          </div>

          <div className="flex-1 relative transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <img src={lassi} alt="" />
              <div className="absolute inset-0  rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;