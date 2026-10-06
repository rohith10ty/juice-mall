import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiStar, FiEye, FiCheck } from 'react-icons/fi';
import { useCart } from '../hooks/useCart';

export const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-3xl p-5 bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] hover:border-[#790D16] dark:hover:border-[#E5D3AF]/50 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
    >
      {/* Top Bar: Badge & Volume */}
      <div className="flex items-center justify-between gap-2 z-10 mb-3">
        {product.badge ? (
          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-[#F5EFE1] bg-[#790D16]">
            {product.badge}
          </span>
        ) : (
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF]">
            {product.categoryName}
          </span>
        )}

        <span className="text-xs font-semibold text-[#5C4549] dark:text-[#AEC4D4]">
          {product.volume}
        </span>
      </div>

      {/* Product Image Container */}
      <div 
        className="relative my-2 w-full h-56 rounded-2xl overflow-hidden bg-[#F5EFE1] dark:bg-[#13090B] cursor-pointer flex items-center justify-center border border-[#E5D3AF]/40 dark:border-[#3D2026]"
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick View Button */}
        <div className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#790D16] text-[#F5EFE1] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#550910] transition-colors"
          >
            <FiEye className="text-sm" /> Quick View
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="z-10 flex flex-col gap-2.5 mt-3">
        {/* Rating and Reviews */}
        <div className="flex items-center gap-1.5 text-xs">
          <div className="flex items-center gap-1 text-[#790D16] dark:text-[#E5D3AF] font-bold">
            <FiStar className="fill-[#790D16] dark:fill-[#E5D3AF] text-xs" />
            <span>{product.rating}</span>
          </div>
          <span className="text-[#5C4549] dark:text-[#AEC4D4]/80">
            ({product.reviewsCount})
          </span>
        </div>

        {/* Title and Subtitle */}
        <div>
          <h3 className="text-lg font-bold text-[#1E0D10] dark:text-[#F5EFE1] group-hover:text-[#790D16] dark:group-hover:text-[#E5D3AF] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-[#5C4549] dark:text-[#E5D3AF]/70 line-clamp-1 mt-0.5">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Add to Cart Button */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E5D3AF]/40 dark:border-[#3D2026] mt-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-[#790D16] dark:text-[#E5D3AF]">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs line-through text-[#5C4549]/60 dark:text-[#E5D3AF]/40">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              isAdded
                ? 'bg-[#550910] text-[#F5EFE1]'
                : 'bg-[#790D16] text-[#F5EFE1] hover:bg-[#550910]'
            }`}
          >
            {isAdded ? (
              <>
                <FiCheck className="text-sm" /> Added
              </>
            ) : (
              <>
                <FiPlus className="text-sm font-bold" /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
