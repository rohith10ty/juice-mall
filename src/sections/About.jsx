import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const values = [
    {
      num: '01',
      title: 'Farm Fresh Harvest',
      desc: 'Sourced directly from certified regenerative organic orchards at peak ripeness.',
    },
    {
      num: '02',
      title: 'Zero Preservatives',
      desc: 'Zero chemicals, zero thermal pasteurization, zero added sugars, and zero water dilution.',
    },
    {
      num: '03',
      title: 'Made Daily at Dawn',
      desc: 'Cold-extracted at 4:30 AM every morning and delivered fresh in temperature-controlled glass.',
    },
    {
      num: '04',
      title: 'Hydraulic Cold Pressed',
      desc: '15,000 lbs of gentle hydraulic pressure protects living enzymes and vital micronutrients.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real Photography */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E5D3AF] dark:border-[#3D2026] bg-[#F5EFE1]">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=85"
                alt="Fresh organic fruit harvest"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Clean Editorial Values */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#790D16] dark:text-[#E5D3AF] mb-2 block">
              Our Craft
            </span>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1E0D10] dark:text-[#F5EFE1] leading-tight">
              Fresh from fruit, <br />
              <span className="text-[#790D16] dark:text-[#E5D3AF]">
                straight to your body.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#5C4549] dark:text-[#E5D3AF]/80 leading-relaxed">
              We started Juice Mall to deliver pure, unpasteurized, cold-pressed vitality. No concentrates, no added sugars, no compromises.
            </p>

            {/* 4 Clean Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {values.map((v) => (
                <div key={v.num} className="flex items-start gap-3">
                  <span className="text-xl font-black text-[#790D16] dark:text-[#E5D3AF]">
                    {v.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1E0D10] dark:text-[#F5EFE1]">
                      {v.title}
                    </h4>
                    <p className="text-xs text-[#5C4549] dark:text-[#E5D3AF]/70 mt-0.5">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
