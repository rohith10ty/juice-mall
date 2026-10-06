import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiShoppingBag } from 'react-icons/fi';
import { SectionHeading } from '../components/SectionHeading';
import { useCart } from '../hooks/useCart';

export const BuildYourJuice = () => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Builder Options
  const bases = [
    { id: 'pomegranate', name: 'Ruby Pomegranate', price: 95, image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=200&auto=format&fit=crop&q=80' },
    { id: 'almond', name: 'Almond Milk Silk', price: 110, image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=200&auto=format&fit=crop&q=80' },
    { id: 'coconut', name: 'Tender Coconut Mist', price: 85, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=200&auto=format&fit=crop&q=80' },
    { id: 'apple', name: 'Ivory Green Apple', price: 90, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=200&auto=format&fit=crop&q=80' },
  ];

  const fruits = [
    { id: 'cherry', name: 'Tart Black Cherry', price: 45, image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=200&auto=format&fit=crop&q=80' },
    { id: 'mango', name: 'Alphonso Velvet Mango', price: 40, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=200&auto=format&fit=crop&q=80' },
    { id: 'raspberry', name: 'Mountain Raspberry', price: 45, image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=200&auto=format&fit=crop&q=80' },
    { id: 'blueberry', name: 'Acai Blueberry', price: 50, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=200&auto=format&fit=crop&q=80' },
    { id: 'bloodorange', name: 'Blood Orange', price: 35, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&auto=format&fit=crop&q=80' },
    { id: 'watermelon', name: 'Crisp Watermelon', price: 30, image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=200&auto=format&fit=crop&q=80' },
  ];

  const boosters = [
    { id: 'saffron', name: 'Kashmiri Saffron', price: 40 },
    { id: 'cardamom', name: 'Green Cardamom', price: 20 },
    { id: 'chia', name: 'Organic Chia', price: 25 },
    { id: 'protein', name: 'Plant Protein (15g)', price: 45 },
    { id: 'spirulina', name: 'Blue Spirulina', price: 35 },
    { id: 'vanilla', name: 'Pure Vanilla', price: 25 },
  ];

  const sizes = [
    { id: 'regular', name: 'Regular (350ml)', extraPrice: 0, label: '350ml' },
    { id: 'large', name: 'Large (500ml)', extraPrice: 40, label: '500ml' },
  ];

  // Selection States
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  const [selectedFruits, setSelectedFruits] = useState([fruits[0], fruits[1]]);
  const [selectedBoosters, setSelectedBoosters] = useState([boosters[0]]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  // Dynamic Price Calculation
  const fruitsCost = selectedFruits.reduce((sum, f) => sum + f.price, 0);
  const boostersCost = selectedBoosters.reduce((sum, b) => sum + b.price, 0);
  const totalPrice = selectedBase.price + fruitsCost + boostersCost + selectedSize.extraPrice;

  const toggleFruit = (fruit) => {
    if (selectedFruits.some((f) => f.id === fruit.id)) {
      if (selectedFruits.length > 1) {
        setSelectedFruits(selectedFruits.filter((f) => f.id !== fruit.id));
      }
    } else {
      if (selectedFruits.length < 3) {
        setSelectedFruits([...selectedFruits, fruit]);
      }
    }
  };

  const toggleBooster = (booster) => {
    if (selectedBoosters.some((b) => b.id === booster.id)) {
      setSelectedBoosters(selectedBoosters.filter((b) => b.id !== booster.id));
    } else {
      if (selectedBoosters.length < 3) {
        setSelectedBoosters([...selectedBoosters, booster]);
      }
    }
  };

  const handleAddToCart = () => {
    const customProduct = {
      id: `custom-${Date.now()}`,
      name: 'Custom Artisanal Blend',
      price: totalPrice,
      calories: 150,
      volume: selectedSize.label,
      badge: 'Custom Blend',
      image: selectedBase.image,
      categoryName: 'Custom Blend',
      ingredients: [
        selectedBase.name,
        ...selectedFruits.map((f) => f.name),
        ...selectedBoosters.map((b) => b.name),
      ],
    };

    addToCart(customProduct, 1, {
      base: selectedBase.name,
      fruits: selectedFruits.map((f) => f.name),
      boosters: selectedBoosters.map((b) => b.name),
      size: selectedSize.name,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section id="build-juice" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CUSTOM BLEND"
          title="Build Your"
          highlight="Personalized Bottle"
          subtitle="Select your cold-pressed base, organic fruits, and active boosters. Handcrafted fresh to order."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Options */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Step 1: Base */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026]">
              <h3 className="text-base font-bold text-[#1E0D10] dark:text-[#F5EFE1] mb-3 flex items-center justify-between">
                <span>1. Select Liquid Base</span>
                <span className="text-xs text-[#5C4549] dark:text-[#AEC4D4] font-normal">Choose 1</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {bases.map((base) => {
                  const isSelected = selectedBase.id === base.id;
                  return (
                    <button
                      key={base.id}
                      onClick={() => setSelectedBase(base)}
                      className={`p-3 rounded-2xl border text-left transition-all flex flex-col gap-2 ${
                        isSelected
                          ? 'border-[#790D16] bg-[#790D16]/10 dark:bg-[#790D16]/25 ring-2 ring-[#790D16]'
                          : 'border-[#E5D3AF]/60 dark:border-[#3D2026] bg-[#F5EFE1]/40 dark:bg-[#2A171B]'
                      }`}
                    >
                      <img src={base.image} alt={base.name} className="w-full h-16 object-cover rounded-xl" />
                      <div>
                        <span className="block text-xs font-bold text-[#1E0D10] dark:text-[#F5EFE1] line-clamp-1">
                          {base.name}
                        </span>
                        <span className="text-xs text-[#790D16] dark:text-[#E5D3AF] font-bold">
                          ₹{base.price}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Fruits */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026]">
              <h3 className="text-base font-bold text-[#1E0D10] dark:text-[#F5EFE1] mb-3 flex items-center justify-between">
                <span>2. Pick Fruits</span>
                <span className="text-xs text-[#5C4549] dark:text-[#AEC4D4] font-normal">Up to 3</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {fruits.map((fruit) => {
                  const isSelected = selectedFruits.some((f) => f.id === fruit.id);
                  return (
                    <button
                      key={fruit.id}
                      onClick={() => toggleFruit(fruit)}
                      className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-[#790D16] bg-[#790D16]/10 dark:bg-[#790D16]/25 ring-2 ring-[#790D16]'
                          : 'border-[#E5D3AF]/60 dark:border-[#3D2026] bg-[#F5EFE1]/40 dark:bg-[#2A171B]'
                      }`}
                    >
                      <img src={fruit.image} alt={fruit.name} className="w-10 h-10 object-cover rounded-xl shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs font-bold text-[#1E0D10] dark:text-[#F5EFE1] truncate">
                          {fruit.name}
                        </span>
                        <span className="text-[11px] text-[#5C4549] dark:text-[#AEC4D4]">
                          +₹{fruit.price}
                        </span>
                      </div>
                      {isSelected && <FiCheck className="text-[#790D16] dark:text-[#E5D3AF] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Boosters & Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026]">
                <h3 className="text-base font-bold text-[#1E0D10] dark:text-[#F5EFE1] mb-3">
                  3. Boosters
                </h3>
                <div className="space-y-2">
                  {boosters.map((booster) => {
                    const isSelected = selectedBoosters.some((b) => b.id === booster.id);
                    return (
                      <button
                        key={booster.id}
                        onClick={() => toggleBooster(booster)}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs font-semibold ${
                          isSelected
                            ? 'border-[#790D16] bg-[#790D16]/10 text-[#790D16] dark:text-[#E5D3AF]'
                            : 'border-[#E5D3AF]/60 dark:border-[#3D2026] text-[#1E0D10] dark:text-[#F5EFE1]'
                        }`}
                      >
                        <span>{booster.name}</span>
                        <span>+₹{booster.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#1E0D10] dark:text-[#F5EFE1] mb-3">
                    4. Bottle Size
                  </h3>
                  <div className="space-y-2">
                    {sizes.map((size) => {
                      const isSelected = selectedSize.id === size.id;
                      return (
                        <button
                          key={size.id}
                          onClick={() => setSelectedSize(size)}
                          className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs font-bold ${
                            isSelected
                              ? 'border-[#790D16] bg-[#790D16]/10 text-[#790D16] dark:text-[#E5D3AF]'
                              : 'border-[#E5D3AF]/60 dark:border-[#3D2026] text-[#1E0D10] dark:text-[#F5EFE1]'
                          }`}
                        >
                          <span>{size.name}</span>
                          <span>{size.extraPrice > 0 ? `+₹${size.extraPrice}` : 'Standard'}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5D3AF]/60 dark:border-[#3D2026] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#5C4549] block">Total</span>
                    <span className="text-2xl font-black text-[#790D16] dark:text-[#E5D3AF]">₹{totalPrice}</span>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      isAdded
                        ? 'bg-[#550910] text-[#F5EFE1]'
                        : 'bg-[#790D16] hover:bg-[#550910] text-[#F5EFE1]'
                    }`}
                  >
                    {isAdded ? 'Added to Bag!' : 'Add Custom Bottle'}
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Summary Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="rounded-3xl p-6 bg-white dark:bg-[#1C0F12] border border-[#E5D3AF] dark:border-[#3D2026] shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#790D16] dark:text-[#E5D3AF] mb-4">
                Selected Recipe
              </h4>

              <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 border border-[#E5D3AF]/40">
                <img
                  src={selectedBase.image}
                  alt="Custom juice preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 text-xs border-b border-[#E5D3AF]/60 dark:border-[#3D2026] pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-[#5C4549] dark:text-[#AEC4D4]">Base:</span>
                  <span className="font-bold text-[#1E0D10] dark:text-[#F5EFE1]">{selectedBase.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C4549] dark:text-[#AEC4D4]">Fruits:</span>
                  <span className="font-bold text-[#1E0D10] dark:text-[#F5EFE1] text-right">
                    {selectedFruits.map((f) => f.name).join(', ')}
                  </span>
                </div>
                {selectedBoosters.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-[#5C4549] dark:text-[#AEC4D4]">Boosters:</span>
                    <span className="font-bold text-[#1E0D10] dark:text-[#F5EFE1] text-right">
                      {selectedBoosters.map((b) => b.name).join(', ')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#5C4549] dark:text-[#AEC4D4]">Volume:</span>
                  <span className="font-bold text-[#1E0D10] dark:text-[#F5EFE1]">{selectedSize.label}</span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  isAdded
                    ? 'bg-[#550910] text-[#F5EFE1]'
                    : 'bg-[#790D16] hover:bg-[#550910] text-[#F5EFE1]'
                }`}
              >
                {isAdded ? (
                  <>
                    <FiCheck className="text-base" /> Added!
                  </>
                ) : (
                  <>
                    <FiShoppingBag className="text-base" /> Add To Bag (₹{totalPrice})
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuildYourJuice;
