import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { galleryItems } from '../data/gallery';
import { SectionHeading } from '../components/SectionHeading';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-10 md:py-14 relative bg-white/40 dark:bg-[#1C0F12]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="COMMUNITY & LIFESTYLE"
          title="Captured Moments in"
          highlight="Pure Vitality"
          subtitle="Join 45,000+ juice lovers following our daily morning rituals. Tag @juicemall on Instagram."
        />

        {/* Clean, Uniform High-Resolution Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-[#E5D3AF] dark:border-[#3D2026] aspect-[4/3] bg-[#F5EFE1]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Minimal Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-5 text-[#F5EFE1]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold bg-[#790D16] px-3 py-1 rounded-full text-[#F5EFE1]">
                    <FaInstagram className="text-[#E5D3AF]" /> @juicemall
                  </span>
                  <span className="text-xs font-semibold text-[#E5D3AF]">
                    ♥ {item.likes}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-[#E5D3AF] uppercase tracking-widest block mb-0.5">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#F5EFE1]">{item.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Instagram Button */}
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white dark:bg-[#1C0F12] text-[#1E0D10] dark:text-[#F5EFE1] border border-[#E5D3AF] dark:border-[#3D2026] hover:bg-[#790D16] hover:text-[#F5EFE1] transition-all"
          >
            <FaInstagram className="text-[#790D16] dark:text-[#E5D3AF] text-sm" /> Follow @juicemall
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
