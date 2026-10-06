import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Categories } from './sections/Categories';
import { Menu } from './sections/Menu';
import { FeaturedJuice } from './sections/FeaturedJuice';
import { Offers } from './sections/Offers';
import { BuildYourJuice } from './sections/BuildYourJuice';
import { About } from './sections/About';
import { Benefits } from './sections/Benefits';
import { Testimonials } from './sections/Testimonials';
import { Gallery } from './sections/Gallery';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { ScrollToTop } from './components/ScrollToTop';
import { useCart } from './hooks/useCart';

function AppContent() {
  useLenis();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { toastMessage } = useCart();

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EFE1] dark:bg-[#13090B] text-[#1E0D10] dark:text-[#F5EFE1] font-outfit selection:bg-[#790D16] selection:text-[#F5EFE1] transition-colors duration-300 overflow-x-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 px-4 py-2.5 rounded-2xl bg-[#790D16] text-[#F5EFE1] text-xs font-bold shadow-xl border border-[#E5D3AF]/40">
          {toastMessage}
        </div>
      )}

      {/* Global Navigation */}
      <Navbar onSearchOpen={() => setSelectedCategory('all')} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <Menu
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={handleQuickView}
        />
        <FeaturedJuice />
        <Offers />
        <BuildYourJuice />
        <About />
        <Benefits />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Slide-over Cart & Quick View Modal */}
      <CartDrawer />
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
      />

      {/* Floating Back to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
