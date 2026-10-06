import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';
import { CategoryCard } from '../components/CategoryCard';
import { SectionHeading } from '../components/SectionHeading';
import { scrollTo } from '../hooks/useLenis';

export const Categories = ({ selectedCategory, onSelectCategory }) => {
  const handleSelect = (categoryId) => {
    onSelectCategory(categoryId);
    scrollTo('#menu');
  };

  return (
    <section id="categories" className="py-10 md:py-12 bg-white/40 dark:bg-[#1C0F12]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CURATED PALETTES"
          title="Find Your"
          highlight="Signature Flavor"
          subtitle="Explore our vibrant spectrum of cold-pressed blends, designed for energy and hydration."
        />

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
        >
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              isSelected={selectedCategory === cat.id}
              onSelect={handleSelect}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
