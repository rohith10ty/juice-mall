import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { juices } from '../data/juices';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';

export const Menu = ({ selectedCategory, onSelectCategory, onQuickView }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const tabs = [
    { id: 'all', label: 'All Favorites' },
    { id: 'crimson-elixirs', label: 'Ruby Elixirs' },
    { id: 'golden-almond', label: 'Almond & Gold' },
    { id: 'frost-mist', label: 'Frost Mist' },
    { id: 'pure-detox', label: 'Ivory Detox' },
    { id: 'smoothies', label: 'Velvet Silk' },
    { id: 'protein', label: 'Protein Luxe' },
    { id: 'refreshers', label: 'Hydra Glaze' },
  ];

  const filteredProducts = useMemo(() => {
    return juices
      .filter((juice) => {
        const matchesCategory =
          selectedCategory === 'all' || juice.category === selectedCategory;
        const matchesSearch =
          juice.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          juice.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          juice.ingredients.some((ing) =>
            ing.toLowerCase().includes(searchQuery.toLowerCase())
          );
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'calories') return a.calories - b.calories;
        if (sortBy === 'rating') return b.rating - a.rating;
        return b.reviewsCount - a.reviewsCount;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="menu" className="py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="HANDCRAFTED ARTISANAL MENU"
          title="Fresh Favorites &"
          highlight="Daily Pressed Elixirs"
          subtitle="Zero artificial sweeteners, no heat pasteurization, and no added water. Simply pure unadulterated vitality."
        />

        {/* Filter Bar: Category Tabs & Search/Sort */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Scrollable Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#790D16] text-[#F5EFE1] dark:bg-[#E5D3AF] dark:text-[#13090B] shadow-sm'
                    : 'bg-white dark:bg-[#1C0F12] text-[#1E0D10] dark:text-[#F5EFE1] hover:bg-[#E5D3AF]/40 border border-[#E5D3AF] dark:border-[#3D2026]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-60">
              <FiSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-[#790D16] dark:text-[#E5D3AF] text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pomegranate, almond..."
                className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] text-[#1E0D10] dark:text-[#F5EFE1] placeholder-[#5C4549]/70 focus:outline-none focus:ring-2 focus:ring-[#790D16]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-[#5C4549]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-full text-xs font-semibold bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] text-[#1E0D10] dark:text-[#F5EFE1] focus:outline-none focus:ring-2 focus:ring-[#790D16]"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="calories">Lowest Calories</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-14 text-center space-y-3">
            <h3 className="text-lg font-bold text-[#1E0D10] dark:text-[#F5EFE1]">
              No blends match "{searchQuery}"
            </h3>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#790D16] text-[#F5EFE1]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
