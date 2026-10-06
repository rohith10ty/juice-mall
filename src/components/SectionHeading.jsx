import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  badge = 'JUICE MALL',
  title = '',
  highlight = '',
  subtitle = '',
  align = 'center', // 'left', 'center'
  className = '',
}) => {
  const isLeft = align === 'left';

  return (
    <div className={`mb-10 md:mb-14 ${isLeft ? 'text-left' : 'text-center'} ${className}`}>
      {/* Small top label */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#790D16]/10 text-[#790D16] dark:text-[#E5D3AF] border border-[#790D16]/20 dark:border-[#E5D3AF]/30 mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#790D16] dark:bg-[#E5D3AF]" />
          {badge}
        </motion.div>
      )}

      {/* Massive Editorial Headline with SOLID minimal colors */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E0D10] dark:text-[#F5EFE1] leading-[1.15]"
      >
        {title}{' '}
        {highlight && (
          <span className="text-[#790D16] dark:text-[#E5D3AF]">
            {highlight}
          </span>
        )}
      </motion.h2>

      {/* Supporting Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-3 text-sm sm:text-base text-[#5C4549] dark:text-[#E5D3AF]/80 font-normal leading-relaxed ${isLeft ? 'max-w-xl' : 'max-w-xl mx-auto'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
