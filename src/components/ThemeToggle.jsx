import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative flex items-center justify-between p-1 w-14 h-8 rounded-full bg-[#E5D3AF]/40 dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#790D16]/50 ${className}`}
    >
      <span className="sr-only">Toggle Theme</span>
      <div className="flex items-center justify-center w-5 h-5 text-[#790D16] text-xs">
        <FiSun />
      </div>
      <div className="flex items-center justify-center w-5 h-5 text-[#AEC4D4] text-xs">
        <FiMoon />
      </div>
      
      {/* Sliding Knob */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        className={`absolute top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center ${
          isDark 
            ? 'left-7 bg-[#790D16] text-[#E5D3AF] border border-[#E5D3AF]/30' 
            : 'left-1 bg-[#F5EFE1] text-[#790D16] border border-[#E5D3AF]'
        }`}
      >
        {isDark ? <FiMoon className="text-xs" /> : <FiSun className="text-xs" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
