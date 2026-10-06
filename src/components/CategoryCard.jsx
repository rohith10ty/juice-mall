import React from 'react';
import { motion } from 'framer-motion';

export const CategoryCard = ({ category, isSelected, onSelect }) => {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(category.id)}
      className={`group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl transition-all duration-200 min-w-[120px] sm:min-w-[140px] border ${
        isSelected
          ? 'bg-[#790D16] text-[#F5EFE1] dark:bg-[#E5D3AF] dark:text-[#13090B] border-[#790D16] shadow-md'
          : 'bg-white dark:bg-[#1C0F12] text-[#1E0D10] dark:text-[#F5EFE1] border-[#E5D3AF] dark:border-[#3D2026] hover:border-[#790D16]'
      }`}
    >
      {/* Category Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-2.5 transition-transform duration-200 group-hover:scale-105 ${
          isSelected
            ? 'bg-white/20'
            : 'bg-[#F5EFE1] dark:bg-[#2A171B]'
        }`}
      >
        {category.icon}
      </div>

      {/* Category Name */}
      <span className="text-xs sm:text-sm font-bold tracking-tight text-center">
        {category.name}
      </span>

      {/* Tagline / Count */}
      <span
        className={`text-[10px] mt-0.5 ${
          isSelected
            ? 'text-[#E5D3AF] dark:text-[#790D16]'
            : 'text-[#5C4549] dark:text-[#AEC4D4]'
        }`}
      >
        {category.count} Blends
      </span>
    </motion.button>
  );
};

export default CategoryCard;
