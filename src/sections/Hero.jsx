import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { scrollTo } from '../hooks/useLenis';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center pt-24 lg:pt-28 pb-14 overflow-hidden bg-[#F5EFE1] dark:bg-[#13090B]"
    >
      {/* Full-bleed background image - 100% opacity, unblurred */}
      <img
        src="/images/hero-bg.webp"
        alt="Cold-pressed fresh mango citrus juice splash with ice and fruits"
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-center pointer-events-none transition-opacity duration-300"
        loading="eager"
      />

      {/* Dark mode atmospheric gradient overlay so text is stunningly legible in dark mode */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#13090B]/95 via-[#13090B]/70 to-[#13090B]/20 dark:block hidden pointer-events-none transition-opacity duration-500" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-xl lg:max-w-2xl flex flex-col justify-center">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#790D16] text-[#F5EFE1] border border-transparent dark:border-[#E5D3AF]/40 shadow-lg mb-4 sm:mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5D3AF] animate-pulse" />
            100% Raw • Cold Pressed Daily
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1E0D10] dark:text-[#F5EFE1] leading-[1.03] transition-colors duration-300"
          >
            FRESHNESS <br />
            YOU CAN <br />
            <span className="text-[#790D16] dark:text-[#E5D3AF]">
              TASTE & FEEL.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#3D2026] dark:text-[#E5D3AF]/90 font-medium leading-relaxed max-w-lg transition-colors duration-300"
          >
            Cold-pressed organic fruit elixirs and artisanal almond milks. Extracted daily at dawn with zero heat, zero pasteurization, and zero preservatives.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5"
          >
            <button
              onClick={() => scrollTo('#menu')}
              className="flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#790D16] hover:bg-[#550910] text-[#F5EFE1] shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              <span>Explore Menu</span>
              <FiArrowRight className="text-base" />
            </button>

            <button
              onClick={() => scrollTo('#build-juice')}
              className="flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/95 dark:bg-[#1C0F12]/95 text-[#1E0D10] dark:text-[#F5EFE1] border-2 border-[#790D16] dark:border-[#E5D3AF] hover:bg-white dark:hover:bg-[#2A171B] hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <span>Custom Blend</span>
            </button>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-8 sm:mt-10 flex items-center gap-8 pt-5 border-t border-[#790D16]/30 dark:border-[#E5D3AF]/30 max-w-md transition-colors duration-300"
          >
            <div>
              <span className="block text-xl sm:text-2xl font-black text-[#1E0D10] dark:text-[#F5EFE1]">
                100%
              </span>
              <span className="text-xs text-[#5C4549] dark:text-[#AEC4D4] font-bold">
                Pure Raw Fruit
              </span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-[#790D16] dark:text-[#E5D3AF]">
                4.9★
              </span>
              <span className="text-xs text-[#5C4549] dark:text-[#AEC4D4] font-bold">
                Verified Reviews
              </span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-[#1E0D10] dark:text-[#F5EFE1]">
                45m
              </span>
              <span className="text-xs text-[#5C4549] dark:text-[#AEC4D4] font-bold">
                Chilled Delivery
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
