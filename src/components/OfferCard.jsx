import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiShoppingBag, FiTag } from 'react-icons/fi';
import { useCart } from '../hooks/useCart';

export const OfferCard = ({ offer }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddOffer = () => {
    addToCart({
      id: offer.id,
      name: offer.title,
      price: offer.price,
      calories: 280,
      volume: offer.itemsCount,
      color: '#790D16',
      categoryName: 'Special Combo',
      badge: offer.badge,
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&auto=format&fit=crop&q=80',
      ingredients: offer.juices
    }, 1);

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const isMain = offer.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-3xl p-6 md:p-7 flex flex-col justify-between border transition-all duration-200 ${
        isMain
          ? 'md:col-span-2 lg:col-span-2 bg-[#1E0D10] text-[#F5EFE1] border-[#790D16] shadow-md'
          : 'bg-white dark:bg-[#1C0F12] text-[#1E0D10] dark:text-[#F5EFE1] border-[#E5D3AF] dark:border-[#3D2026]'
      }`}
    >
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 z-10 mb-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#790D16] text-[#F5EFE1] flex items-center gap-1">
            <FiTag className="text-xs" /> {offer.badge}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#E5D3AF]/40 text-[#790D16] dark:text-[#E5D3AF]">
            {offer.discount}
          </span>
        </div>

        <span className={`text-xs font-semibold ${isMain ? 'text-[#E5D3AF]' : 'text-[#5C4549] dark:text-[#AEC4D4]'}`}>
          {offer.itemsCount}
        </span>
      </div>

      {/* Body: Title, Description & Included Flavors */}
      <div className="my-3 z-10">
        <h3 className={`text-xl sm:text-2xl font-black tracking-tight mb-2 ${isMain ? 'text-[#F5EFE1]' : 'text-[#1E0D10] dark:text-[#F5EFE1]'}`}>
          {offer.title}
        </h3>

        <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isMain ? 'text-[#E5D3AF]/90' : 'text-[#5C4549] dark:text-[#E5D3AF]/80'}`}>
          {offer.description}
        </p>

        {/* Included Juice Pills */}
        <div className="flex flex-wrap gap-1.5">
          {offer.juices.map((juice, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-0.5 rounded-lg text-xs font-medium border ${
                isMain
                  ? 'bg-[#2A171B] text-[#E5D3AF] border-[#3D2026]'
                  : 'bg-[#F5EFE1] dark:bg-[#2A171B] text-[#790D16] dark:text-[#E5D3AF] border-[#E5D3AF]'
              }`}
            >
              ✓ {juice}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Price & Claim Deal Button */}
      <div className="flex items-center justify-between pt-4 border-t border-[#E5D3AF]/40 dark:border-[#3D2026] mt-3">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-black text-[#790D16] dark:text-[#E5D3AF]">
            ₹{offer.price}
          </span>
          <span className={`text-xs line-through ${isMain ? 'text-[#E5D3AF]/60' : 'text-[#5C4549]/60'}`}>
            ₹{offer.originalPrice}
          </span>
        </div>

        <button
          onClick={handleAddOffer}
          className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            isAdded
              ? 'bg-[#550910] text-[#F5EFE1]'
              : 'bg-[#790D16] hover:bg-[#550910] text-[#F5EFE1]'
          }`}
        >
          {isAdded ? (
            <>
              <FiCheck className="text-sm" /> Added
            </>
          ) : (
            <>
              <FiShoppingBag className="text-sm" /> Claim Deal
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default OfferCard;
