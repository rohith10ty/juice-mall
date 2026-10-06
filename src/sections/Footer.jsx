import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { scrollTo } from '../hooks/useLenis';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#13090B] text-[#F5EFE1] relative overflow-hidden pt-16 pb-12 border-t border-[#3D2026]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Brand Tagline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#3D2026] items-center">
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#F5EFE1] mb-2">
              Freshly squeezed. <span className="text-[#E5D3AF]">Never boring.</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#AEC4D4] max-w-md leading-relaxed">
              Subscribe to our morning dispatch for seasonal recipes and 20% off your first cold-press order.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                required
                className="flex-1 px-4 py-3 rounded-full bg-[#1C0F12] border border-[#3D2026] text-xs sm:text-sm text-[#F5EFE1] placeholder-[#AEC4D4]/50 focus:outline-none focus:ring-2 focus:ring-[#790D16]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#790D16] hover:bg-[#550910] text-[#F5EFE1] flex items-center justify-center gap-2 transition-all shrink-0"
              >
                {subscribed ? (
                  <>
                    <FiCheck className="text-base" /> Subscribed!
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <FiArrowRight />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Col 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E5D3AF] mb-3">
              Artisanal Menu
            </h4>
            <ul className="space-y-2 text-xs text-[#F5EFE1]/80">
              <li><button onClick={() => scrollTo('#menu')} className="hover:text-[#E5D3AF] transition-colors">Ruby Elixirs</button></li>
              <li><button onClick={() => scrollTo('#menu')} className="hover:text-[#E5D3AF] transition-colors">Almond & Gold</button></li>
              <li><button onClick={() => scrollTo('#menu')} className="hover:text-[#E5D3AF] transition-colors">Frost Mist</button></li>
              <li><button onClick={() => scrollTo('#featured')} className="hover:text-[#E5D3AF] transition-colors">Ivory Detox</button></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#AEC4D4] mb-3">
              Experiences
            </h4>
            <ul className="space-y-2 text-xs text-[#F5EFE1]/80">
              <li><button onClick={() => scrollTo('#build-juice')} className="hover:text-[#AEC4D4] transition-colors">Custom Blend</button></li>
              <li><button onClick={() => scrollTo('#offers')} className="hover:text-[#AEC4D4] transition-colors">Cleanse Boxes</button></li>
              <li><button onClick={() => scrollTo('#offers')} className="hover:text-[#AEC4D4] transition-colors">Combo Packs</button></li>
              <li><button onClick={() => scrollTo('#about')} className="hover:text-[#AEC4D4] transition-colors">Our Story</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E5D3AF] mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#F5EFE1]/80">
              <li><button onClick={() => scrollTo('#about')} className="hover:text-[#E5D3AF] transition-colors">Philosophy</button></li>
              <li><button onClick={() => scrollTo('#testimonials')} className="hover:text-[#E5D3AF] transition-colors">Reviews</button></li>
              <li><button onClick={() => scrollTo('#gallery')} className="hover:text-[#E5D3AF] transition-colors">Gallery</button></li>
              <li><button onClick={() => scrollTo('#contact')} className="hover:text-[#E5D3AF] transition-colors">Contact HQ</button></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#AEC4D4] mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-2.5">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#1C0F12] border border-[#3D2026] hover:bg-[#790D16] text-[#F5EFE1] flex items-center justify-center transition-colors text-sm">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#1C0F12] border border-[#3D2026] hover:bg-[#790D16] text-[#F5EFE1] flex items-center justify-center transition-colors text-sm">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#1C0F12] border border-[#3D2026] hover:bg-[#790D16] text-[#F5EFE1] flex items-center justify-center transition-colors text-sm">
                <FaYoutube />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#1C0F12] border border-[#3D2026] hover:bg-[#790D16] text-[#F5EFE1] flex items-center justify-center transition-colors text-sm">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Oversized Clean Brand Typography Banner */}
        <div className="pt-6 pb-2 text-center select-none overflow-hidden">
          <span className="text-[12vw] font-black tracking-tighter text-[#1C0F12] leading-none block">
            JUICEMALL
          </span>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 border-t border-[#3D2026] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#AEC4D4]/70">
          <p>© {new Date().getFullYear()} JUICE MALL Artisanal Co. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#hero" className="hover:text-[#E5D3AF] transition-colors">Privacy</a>
            <a href="#hero" className="hover:text-[#E5D3AF] transition-colors">Terms</a>
            <a href="#hero" className="hover:text-[#E5D3AF] transition-colors">Bottle Returns</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
