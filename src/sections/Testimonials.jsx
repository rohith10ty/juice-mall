import React, { useRef } from 'react';
import { testimonials } from '../data/testimonials';
import { TestimonialCard } from '../components/TestimonialCard';
import { SectionHeading } from '../components/SectionHeading';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <SectionHeading
            badge="VERIFIED CUSTOMER LOVE"
            title="Real Stories,"
            highlight="Unfiltered Energy"
            subtitle="Read what wellness coaches, athletes, and doctors say about Juice Mall."
            align="left"
            className="mb-0"
          />

          {/* Carousel Buttons */}
          <div className="flex items-center gap-2.5 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] text-[#790D16] dark:text-[#E5D3AF] hover:bg-[#790D16] hover:text-[#F5EFE1] flex items-center justify-center transition-all shadow-sm"
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] text-[#790D16] dark:text-[#E5D3AF] hover:bg-[#790D16] hover:text-[#F5EFE1] flex items-center justify-center transition-all shadow-sm"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
        >
          {testimonials.map((test) => (
            <TestimonialCard key={test.id} testimonial={test} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
