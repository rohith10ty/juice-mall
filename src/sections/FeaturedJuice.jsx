import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiShoppingBag, FiShield, FiZap, FiActivity } from 'react-icons/fi';
import { useCart } from '../hooks/useCart';

export const FeaturedJuice = () => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const featured = {
    id: 'crimson-nectar',
    name: 'Crimson Velvet Nectar',
    subtitle: 'Wild Pomegranate, Black Cherry & Cardamom',
    price: 219,
    originalPrice: 259,
    calories: 128,
    volume: '350 ml',
    rating: 4.96,
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=800&auto=format&fit=crop&q=85',
    categoryName: 'Ruby Elixirs',
    ingredients: ['Pomegranate', 'Black Cherry', 'Red Beetroot', 'Raw Vanilla', 'Cardamom'],
  };

  const handleAdd = () => {
    addToCart(featured, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  return (
    <section id="featured" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Real High-Res Photography */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-[#E5D3AF] dark:border-[#3D2026] bg-[#F5EFE1]">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#790D16] text-[#F5EFE1]">
                  Signature Blend
                </span>
              </div>
            </div>

            {/* Right Column: Clean Editorial Breakdown */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#790D16] dark:text-[#E5D3AF] mb-2 block">
                Spotlight Feature
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#1E0D10] dark:text-[#F5EFE1] leading-tight">
                Crimson Velvet Nectar
              </h2>
              <p className="text-sm font-semibold text-[#790D16] dark:text-[#E5D3AF] mt-1">
                Zero Added Sugar • 128 kcal • Cold-Pressed Daily
              </p>

              <p className="mt-4 text-sm text-[#5C4549] dark:text-[#E5D3AF]/80 leading-relaxed max-w-lg">
                Crafted with ruby pomegranate, tart dark cherries, and green cardamom to support microvascular flow and deep cellular radiance.
              </p>

              {/* 3 Clean Value Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg">
                <div className="p-3 rounded-xl bg-[#F5EFE1] dark:bg-[#13090B] border border-[#E5D3AF] dark:border-[#3D2026]">
                  <FiActivity className="text-[#790D16] dark:text-[#E5D3AF] text-lg mb-1" />
                  <h5 className="text-xs font-bold text-[#1E0D10] dark:text-[#F5EFE1]">Nitric Oxide</h5>
                  <p className="text-[10px] text-[#5C4549] dark:text-[#AEC4D4]">Microvascular surge</p>
                </div>
                <div className="p-3 rounded-xl bg-[#F5EFE1] dark:bg-[#13090B] border border-[#E5D3AF] dark:border-[#3D2026]">
                  <FiShield className="text-[#790D16] dark:text-[#E5D3AF] text-lg mb-1" />
                  <h5 className="text-xs font-bold text-[#1E0D10] dark:text-[#F5EFE1]">Punicalagins</h5>
                  <p className="text-[10px] text-[#5C4549] dark:text-[#AEC4D4]">Antioxidant defense</p>
                </div>
                <div className="p-3 rounded-xl bg-[#F5EFE1] dark:bg-[#13090B] border border-[#E5D3AF] dark:border-[#3D2026]">
                  <FiZap className="text-[#790D16] dark:text-[#E5D3AF] text-lg mb-1" />
                  <h5 className="text-xs font-bold text-[#1E0D10] dark:text-[#F5EFE1]">Cardamom</h5>
                  <p className="text-[10px] text-[#5C4549] dark:text-[#AEC4D4]">Digestive ease</p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="mt-7 pt-5 border-t border-[#E5D3AF]/60 dark:border-[#3D2026] flex items-center gap-6 w-full">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#790D16] dark:text-[#E5D3AF]">
                    ₹219
                  </span>
                  <span className="text-xs line-through text-[#5C4549]/60 dark:text-[#E5D3AF]/40 font-semibold">
                    ₹259
                  </span>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    isAdded
                      ? 'bg-[#550910] text-[#F5EFE1]'
                      : 'bg-[#790D16] hover:bg-[#550910] text-[#F5EFE1]'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <FiCheck className="text-base" /> Added!
                    </>
                  ) : (
                    <>
                      <FiShoppingBag className="text-base" /> Add To Bag
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJuice;
