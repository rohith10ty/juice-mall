import React from 'react';
import { 
  FiFeather, 
  FiSlash, 
  FiSun, 
  FiZap, 
  FiRefreshCw, 
  FiHeart 
} from 'react-icons/fi';
import { SectionHeading } from '../components/SectionHeading';

export const Benefits = () => {
  const benefitsList = [
    {
      id: 1,
      title: '100% Raw Cold-Pressed',
      desc: 'Hydraulic zero-heat pressing preserves delicate living enzymes and antioxidants.',
      stat: '0% Heat Degradation',
      icon: <FiFeather />,
    },
    {
      id: 2,
      title: 'Zero Added Sugars',
      desc: 'Every single drop comes purely from fresh fruit and roots. Never diluted.',
      stat: '100% Pure Fruit',
      icon: <FiSlash />,
    },
    {
      id: 3,
      title: 'Pressed Daily at 4:30 AM',
      desc: 'Batches are cold-extracted every dawn and immediately blast-chilled to 3°C.',
      stat: 'Dawn Extracted',
      icon: <FiSun />,
    },
    {
      id: 4,
      title: 'Fast Icy Express Delivery',
      desc: 'Dispatched in insulated thermal cooler pouches to arrive refreshingly chilled in < 45 min.',
      stat: '< 45 Mins',
      icon: <FiZap />,
    },
    {
      id: 5,
      title: 'Eco Circular Glass',
      desc: '100% recyclable amber glass bottles with a bottle-return cashback program.',
      stat: 'Zero Plastic',
      icon: <FiRefreshCw />,
    },
    {
      id: 6,
      title: 'Nutritionist Formulated',
      desc: 'Co-formulated by functional nutritionists to maximize cellular bioavailability.',
      stat: 'Clinical Grade',
      icon: <FiHeart />,
    },
  ];

  return (
    <section id="benefits" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="WHY JUICE MALL"
          title="Engineered For"
          highlight="Pure Living Energy"
          subtitle="Why wellness enthusiasts, athletes, and doctors choose Juice Mall every morning."
        />

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] hover:border-[#790D16] transition-all duration-200 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-[#F5EFE1] dark:bg-[#2A171B] text-[#790D16] dark:text-[#E5D3AF]">
                    {item.icon}
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border border-[#E5D3AF] bg-[#E5D3AF]/20 text-[#790D16] dark:text-[#E5D3AF]">
                    {item.stat}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1E0D10] dark:text-[#F5EFE1]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#5C4549] dark:text-[#E5D3AF]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
