import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiCheckCircle } from 'react-icons/fi';

export const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#1C0F12]/90 backdrop-blur-xl border border-[#E5D3AF]/60 dark:border-[#3D2026] hover:shadow-xl transition-all duration-300 min-w-[300px] sm:min-w-[360px] max-w-[400px]"
    >
      <div>
        {/* Rating Stars & Verified Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1 text-[#790D16] dark:text-[#E5D3AF]">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FiStar key={i} className="fill-[#790D16] dark:fill-[#E5D3AF] text-sm" />
            ))}
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#E5D3AF]/30 text-[#790D16] dark:text-[#E5D3AF] border border-[#E5D3AF]/60">
            <FiCheckCircle className="text-xs" /> Verified Buyer
          </span>
        </div>

        {/* Highlight Quote Title */}
        <h4 className="text-base font-bold text-[#1E0D10] dark:text-[#F5EFE1] mb-2">
          {testimonial.highlight}
        </h4>

        {/* Review Text */}
        <p className="text-sm text-[#5C4549] dark:text-[#E5D3AF]/80 leading-relaxed italic">
          {testimonial.text}
        </p>
      </div>

      {/* User Info & Purchased Blend */}
      <div className="mt-6 pt-5 border-t border-[#E5D3AF]/40 dark:border-[#3D2026] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-11 h-11 rounded-full object-cover border-2 border-[#790D16]"
            loading="lazy"
          />
          <div>
            <h5 className="text-sm font-bold text-[#1E0D10] dark:text-[#F5EFE1]">
              {testimonial.name}
            </h5>
            <p className="text-xs text-[#5C4549] dark:text-[#AEC4D4]/80">
              {testimonial.role}
            </p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#790D16]/10 text-[#790D16] dark:text-[#E5D3AF] border border-[#790D16]/25">
          {testimonial.juice}
        </span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
