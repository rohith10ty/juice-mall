import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { ThemeToggle } from './ThemeToggle';
import { useCart } from '../hooks/useCart';
import { scrollTo } from '../hooks/useLenis';

export const Navbar = ({ onSearchOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  // Correct sequential order matching exact page top-to-bottom layout
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Categories', href: '#categories' },
    { name: 'Menu', href: '#menu' },
    { name: 'Featured', href: '#featured' },
    { name: 'Offers', href: '#offers' },
    { name: 'Build Blend', href: '#build-juice' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-[#F5EFE1]/95 dark:bg-[#13090B]/95 backdrop-blur-xl border-b border-[#E5D3AF] dark:border-[#3D2026] shadow-sm'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          
          {/* Logo with high-contrast pill container */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 focus:outline-none shrink-0 bg-white/95 dark:bg-[#1C0F12]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5D3AF] dark:border-[#3D2026] shadow-sm hover:scale-105 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-[#790D16] text-[#F5EFE1] flex items-center justify-center text-sm shadow-md shadow-[#790D16]/30">
              🍷
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-[#1E0D10] dark:text-[#F5EFE1] group-hover:text-[#790D16] dark:group-hover:text-[#E5D3AF] transition-colors leading-none">
                JUICE<span className="text-[#790D16] dark:text-[#E5D3AF] font-extrabold">MALL</span>
              </span>
              <span className="text-[7.5px] sm:text-[8px] uppercase tracking-widest font-bold text-[#5C4549] dark:text-[#AEC4D4] mt-0.5">
                Cold Pressed • Raw
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Single horizontal line with no wrapping */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/95 dark:bg-[#1C0F12]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5D3AF] dark:border-[#3D2026] shadow-sm whitespace-nowrap flex-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1E0D10] dark:text-[#F5EFE1] hover:text-[#790D16] dark:hover:text-[#E5D3AF] hover:bg-[#E5D3AF]/40 dark:hover:bg-[#2A171B] transition-all shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Compact Navigation Links for Large Tablets / Laptops */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1 bg-white/95 dark:bg-[#1C0F12]/95 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[#E5D3AF] dark:border-[#3D2026] shadow-sm whitespace-nowrap flex-nowrap">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#1E0D10] dark:text-[#F5EFE1] hover:text-[#790D16] dark:hover:text-[#E5D3AF] hover:bg-[#E5D3AF]/40 transition-all shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons: High-contrast pill container */}
          <div className="flex items-center gap-1.5 bg-white/95 dark:bg-[#1C0F12]/95 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[#E5D3AF] dark:border-[#3D2026] shadow-sm shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => {
                scrollTo('#menu');
                if (onSearchOpen) onSearchOpen();
              }}
              aria-label="Search drinks"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#1E0D10] dark:text-[#F5EFE1] hover:text-[#790D16] dark:hover:text-[#E5D3AF] hover:bg-[#E5D3AF]/40 dark:hover:bg-[#2A171B] transition-colors"
            >
              <FiSearch className="text-base" />
            </button>

            {/* Cart Button with Animated Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Bag"
              className="relative w-8 h-8 rounded-full flex items-center justify-center bg-[#790D16] text-[#F5EFE1] hover:bg-[#550910] hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#790D16]/30"
            >
              <FiShoppingBag className="text-sm" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={totalItems}
                  className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#E5D3AF] text-[#790D16] text-[9px] font-black flex items-center justify-center shadow-md"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Light / Dark Mode Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-[#1E0D10] dark:text-[#F5EFE1] hover:bg-[#E5D3AF]/40 dark:hover:bg-[#2A171B] focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#F5EFE1]/98 dark:bg-[#13090B]/98 backdrop-blur-2xl border-b border-[#E5D3AF] dark:border-[#3D2026] shadow-2xl p-5 lg:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-bold text-[#1E0D10] dark:text-[#F5EFE1] hover:text-[#790D16] dark:hover:text-[#E5D3AF] py-2 px-3 rounded-xl hover:bg-[#E5D3AF]/30 dark:hover:bg-[#2A171B] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#5C4549] dark:text-[#AEC4D4]">→</span>
                </a>
              ))}
              <div className="pt-3 border-t border-[#E5D3AF]/60 dark:border-[#3D2026] flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C4549] dark:text-[#AEC4D4]">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
