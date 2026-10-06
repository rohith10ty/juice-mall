import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiPlus, FiMinus, FiStar, FiHeart } from 'react-icons/fi';
import { useCart } from '../hooks/useCart';

export const QuickViewModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setIsAdded(false);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-[#F5EFE1] dark:bg-[#1C0F12] rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#E5D3AF] dark:border-[#3D2026] max-h-[90vh] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white dark:bg-[#2A171B] text-[#790D16] dark:text-[#E5D3AF] hover:bg-[#790D16] hover:text-[#F5EFE1] flex items-center justify-center transition-colors shadow-sm"
            >
              <FiX className="text-lg" />
            </button>

            {/* Left Side: Real Product Photo */}
            <div className="md:w-1/2 p-6 flex flex-col items-center justify-center bg-white dark:bg-[#13090B]">
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-[#E5D3AF]/60 dark:border-[#3D2026]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF]">
                <span>{product.volume}</span> • <span>{product.calories} KCAL</span> • <span>GLASS BOTTLE</span>
              </div>
            </div>

            {/* Right Side: Product Details */}
            <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
              <div>
                {/* Badge and Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-[#F5EFE1] bg-[#790D16]">
                    {product.badge || product.categoryName}
                  </span>
                  <div className="flex items-center gap-1 text-[#790D16] dark:text-[#E5D3AF] text-xs font-bold">
                    <FiStar className="fill-[#790D16] dark:fill-[#E5D3AF]" />
                    <span>{product.rating}</span>
                    <span className="text-[#5C4549] dark:text-[#AEC4D4]/80 font-normal">({product.reviewsCount})</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-[#1E0D10] dark:text-[#F5EFE1]">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold text-[#790D16] dark:text-[#E5D3AF] mb-3">
                  {product.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C4549] dark:text-[#E5D3AF]/80 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Key Benefits */}
                <div className="mb-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF] mb-2">
                    Key Health Benefits
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.benefits.map((b, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-[#2A171B] text-[#1E0D10] dark:text-[#F5EFE1] border border-[#E5D3AF] dark:border-[#3D2026]"
                      >
                        <FiHeart className="text-[#790D16] dark:text-[#E5D3AF] text-xs" /> {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#790D16] dark:text-[#E5D3AF] mb-1">
                    Ingredients
                  </h4>
                  <p className="text-xs text-[#5C4549] dark:text-[#E5D3AF]/90">
                    {product.ingredients.join(' • ')}
                  </p>
                </div>
              </div>

              {/* Purchase Footer */}
              <div className="pt-4 border-t border-[#E5D3AF]/60 dark:border-[#3D2026] flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-[#790D16] dark:text-[#E5D3AF]">
                    ₹{product.price * quantity}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs line-through text-[#5C4549]/60 dark:text-[#E5D3AF]/40">
                      ₹{product.originalPrice * quantity}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* Quantity */}
                  <div className="flex items-center rounded-full bg-white dark:bg-[#2A171B] border border-[#E5D3AF] dark:border-[#3D2026] p-0.5">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[#790D16] dark:text-[#E5D3AF] hover:bg-[#E5D3AF]/40"
                    >
                      <FiMinus className="text-xs" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-[#1E0D10] dark:text-[#F5EFE1]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[#790D16] dark:text-[#E5D3AF] hover:bg-[#E5D3AF]/40"
                    >
                      <FiPlus className="text-xs" />
                    </button>
                  </div>

                  {/* Add */}
                  <button
                    onClick={handleAddToCart}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      isAdded
                        ? 'bg-[#550910] text-[#F5EFE1]'
                        : 'bg-[#790D16] text-[#F5EFE1] hover:bg-[#550910]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <FiCheck className="inline text-sm mr-1" /> Added!
                      </>
                    ) : (
                      'Add To Bag'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
