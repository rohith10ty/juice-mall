import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { useCart } from '../hooks/useCart';
import confetti from 'canvas-confetti';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
    clearCart
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  const applyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'FRESH20' || code === 'JUICE20') {
      setDiscountPercent(20);
      setPromoSuccess('20% Discount applied!');
      setPromoError('');
    } else if (code === 'VIP50') {
      setDiscountPercent(50);
      setPromoSuccess('VIP 50% Discount applied!');
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "FRESH20"');
      setPromoSuccess('');
    }
  };

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const deliveryFee = subtotal > 400 || subtotal === 0 ? 0 : 49;
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleCheckout = () => {
    setIsOrdered(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#790D16', '#E5D3AF', '#F5EFE1', '#AEC4D4']
    });
    setTimeout(() => {
      clearCart();
      setIsOrdered(false);
      setIsCartOpen(false);
    }, 3500);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-[#F5EFE1] dark:bg-[#1C0F12] border-l border-[#E5D3AF] dark:border-[#3D2026] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#E5D3AF]/60 dark:border-[#3D2026] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#790D16]/10 text-[#790D16] dark:text-[#E5D3AF] flex items-center justify-center text-lg font-bold">
                    <FiShoppingBag />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#1E0D10] dark:text-[#F5EFE1]">
                      Your Fresh Bag
                    </h3>
                    <p className="text-xs text-[#5C4549] dark:text-[#AEC4D4]">
                      {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close cart"
                  className="w-9 h-9 rounded-full bg-[#E5D3AF]/40 dark:bg-[#2A171B] text-[#790D16] dark:text-[#E5D3AF] hover:bg-[#790D16] hover:text-[#F5EFE1] flex items-center justify-center transition-colors"
                >
                  <FiX className="text-lg" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {isOrdered ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#790D16]/15 text-[#790D16] dark:text-[#E5D3AF] flex items-center justify-center text-4xl shadow-inner">
                      <FiCheckCircle />
                    </div>
                    <h4 className="text-2xl font-black text-[#1E0D10] dark:text-[#F5EFE1]">
                      Order Placed Successfully!
                    </h4>
                    <p className="text-sm text-[#5C4549] dark:text-[#E5D3AF]/80 max-w-xs">
                      Our kitchen is cold-pressing your blends right now. Estimated arrival in 35 minutes!
                    </p>
                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-[#790D16]/10 text-[#790D16] dark:text-[#E5D3AF]">
                      Order #JM-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                  </motion.div>
                ) : cart.length === 0 ? (
                  <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-[#E5D3AF]/30 dark:bg-[#2A171B] text-[#790D16] dark:text-[#E5D3AF] flex items-center justify-center text-3xl">
                      🍷
                    </div>
                    <h4 className="text-xl font-bold text-[#1E0D10] dark:text-[#F5EFE1]">
                      Your bag is empty
                    </h4>
                    <p className="text-xs text-[#5C4549] dark:text-[#E5D3AF]/70 max-w-xs">
                      Explore our artisanal cold-pressed menu or build your custom blend to get started.
                    </p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-white/80 dark:bg-[#2A171B]/80 border border-[#E5D3AF]/60 dark:border-[#3D2026] flex items-center justify-between gap-3 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm shrink-0 bg-[#E5D3AF]/40"
                        >
                          {item.emoji || '🍷'}
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#1E0D10] dark:text-[#F5EFE1] line-clamp-1">
                            {item.name}
                          </h5>
                          <span className="text-xs text-[#5C4549] dark:text-[#AEC4D4] block">
                            ₹{item.price} each • {item.volume || '350 ml'}
                          </span>
                          {item.customDetails && (
                            <span className="text-[10px] text-[#790D16] dark:text-[#E5D3AF] font-medium block">
                              Custom: {item.customDetails.base} + {item.customDetails.fruits?.join(', ')}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <div className="flex items-center rounded-lg bg-[#F5EFE1] dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] p-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-[#790D16] dark:text-[#E5D3AF] hover:bg-[#E5D3AF]/40 rounded"
                          >
                            <FiMinus className="text-[10px]" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#1E0D10] dark:text-[#F5EFE1]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#790D16] dark:text-[#E5D3AF] hover:bg-[#E5D3AF]/40 rounded"
                          >
                            <FiPlus className="text-[10px]" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                          className="text-[#5C4549] hover:text-[#790D16] transition-colors text-xs"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Checkout Summary */}
              {cart.length > 0 && !isOrdered && (
                <div className="p-6 border-t border-[#E5D3AF]/60 dark:border-[#3D2026] bg-white/40 dark:bg-[#13090B]/50 space-y-4">
                  {/* Promo Code Input */}
                  <form onSubmit={applyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (try FRESH20)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl text-xs bg-white dark:bg-[#2A171B] border border-[#E5D3AF] dark:border-[#3D2026] text-[#1E0D10] dark:text-[#F5EFE1] focus:outline-none focus:ring-2 focus:ring-[#790D16] uppercase tracking-wider"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#790D16] text-[#F5EFE1] hover:bg-[#550910] transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                  {promoSuccess && <p className="text-xs text-[#790D16] dark:text-[#E5D3AF] font-semibold">{promoSuccess}</p>}
                  {promoError && <p className="text-xs text-red-600 font-semibold">{promoError}</p>}

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-[#5C4549] dark:text-[#E5D3AF]/80">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-[#1E0D10] dark:text-[#F5EFE1]">₹{subtotal}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#790D16] dark:text-[#E5D3AF] font-semibold">
                        <span>Discount ({discountPercent}%)</span>
                        <span>-₹{discountAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Icy Express Delivery</span>
                      <span>{deliveryFee === 0 ? <span className="text-[#790D16] dark:text-[#E5D3AF] font-bold">FREE</span> : `₹${deliveryFee}`}</span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-[#1E0D10] dark:text-[#F5EFE1] pt-2 border-t border-[#E5D3AF]/60 dark:border-[#3D2026]">
                      <span>Total Amount</span>
                      <span className="text-lg text-[#790D16] dark:text-[#E5D3AF]">₹{finalTotal}</span>
                    </div>
                  </div>

                  {/* Checkout Action */}
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#790D16] hover:bg-[#550910] text-[#F5EFE1] shadow-lg shadow-[#790D16]/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Proceed To Express Checkout</span>
                    <FiArrowRight className="text-base" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
