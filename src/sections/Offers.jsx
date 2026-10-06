import React from 'react';
import { offers } from '../data/offers';
import { OfferCard } from '../components/OfferCard';
import { SectionHeading } from '../components/SectionHeading';

export const Offers = () => {
  return (
    <section id="offers" className="py-10 md:py-14 relative bg-white/40 dark:bg-[#1C0F12]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="SPECIAL CURATIONS & BUNDLES"
          title="Curated Combos &"
          highlight="Cleanse Boxes"
          subtitle="Stock your fridge with our high-value bundles. Formulated for couples, cleanse weeks, and fitness goals."
        />

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
