import React from 'react';

export const JuiceBottleVisual = ({ 
  color = '#790D16', 
  liquidGradient = ['#790D16', '#E5D3AF'],
  glowColor = 'rgba(121, 13, 22, 0.5)',
  name = 'CRIMSON NECTAR',
  subtitle = 'COLD PRESSED',
  volume = '350 ML',
  size = 'md', // 'sm', 'md', 'lg', 'hero'
  className = '',
  showAura = true,
  floating = true,
}) => {
  const sizeMap = {
    sm: { width: 140, height: 260 },
    md: { width: 190, height: 350 },
    lg: { width: 240, height: 440 },
    hero: { width: 320, height: 580 },
  };

  const { width, height } = sizeMap[size] || sizeMap.md;
  const gradientId = `liquid-grad-${name.replace(/\s+/g, '-').toLowerCase()}-${Math.random().toString(36).substring(2, 7)}`;
  const capId = `cap-grad-${Math.random().toString(36).substring(2, 7)}`;

  return (
    <div className={`relative inline-flex items-center justify-center ${className} ${floating ? 'animate-float-gentle' : ''}`}>
      {/* Background radial aura glow */}
      {showAura && (
        <div 
          className="absolute inset-0 rounded-full filter blur-3xl opacity-60 dark:opacity-75 pointer-events-none transition-all duration-700 -z-10"
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, rgba(0,0,0,0) 70%)`,
            transform: 'scale(1.3)'
          }}
        />
      )}

      {/* SVG Bottle with realistic glass reflections, juice meniscus, and typography */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 240 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl transition-transform duration-500"
      >
        <defs>
          {/* Juice Liquid Gradient */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={liquidGradient[0] || color} />
            <stop offset="60%" stopColor={liquidGradient[0] || color} stopOpacity="0.95" />
            <stop offset="100%" stopColor={liquidGradient[1] || '#E5D3AF'} />
          </linearGradient>

          {/* Brushed Almond Gold Brass Cap Gradient */}
          <linearGradient id={capId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9B58B" />
            <stop offset="35%" stopColor="#E5D3AF" />
            <stop offset="70%" stopColor="#F5EFE1" />
            <stop offset="100%" stopColor="#9C8255" />
          </linearGradient>

          {/* Glass Highlight Linear Gradient */}
          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="15%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.45" />
          </linearGradient>

          {/* Label Gradient */}
          <linearGradient id="labelBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5EFE1" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#E5D3AF" stopOpacity="0.98" />
          </linearGradient>
        </defs>

        {/* Bottle Cap */}
        <g id="BottleCap">
          {/* Cap ridges */}
          <rect x="94" y="12" width="52" height="28" rx="6" fill={`url(#${capId})`} />
          <line x1="102" y1="14" x2="102" y2="38" stroke="#790D16" strokeWidth="1.5" strokeOpacity="0.35" />
          <line x1="110" y1="14" x2="110" y2="38" stroke="#790D16" strokeWidth="1.5" strokeOpacity="0.35" />
          <line x1="120" y1="14" x2="120" y2="38" stroke="#790D16" strokeWidth="1.5" strokeOpacity="0.35" />
          <line x1="130" y1="14" x2="130" y2="38" stroke="#790D16" strokeWidth="1.5" strokeOpacity="0.35" />
          <line x1="138" y1="14" x2="138" y2="38" stroke="#790D16" strokeWidth="1.5" strokeOpacity="0.35" />
          {/* Neck ring */}
          <rect x="90" y="40" width="60" height="8" rx="4" fill="#C9B58B" />
        </g>

        {/* Outer Glass Bottle Body Silhouette */}
        <path
          d="M 98 48 
             L 142 48 
             C 144 58, 144 80, 148 95 
             C 156 125, 204 150, 204 185 
             L 204 415 
             C 204 438, 185 450, 160 450 
             L 80 450 
             C 55 450, 36 438, 36 415 
             L 36 185 
             C 36 150, 84 125, 92 95 
             C 96 80, 96 58, 98 48 Z"
          fill="rgba(245, 239, 225, 0.05)"
          stroke="rgba(229, 211, 175, 0.4)"
          strokeWidth="3.5"
          className="dark:stroke-[#E5D3AF]/30"
        />

        {/* Inner Juice Liquid Fill */}
        <path
          d="M 96 110 
             C 106 120, 134 120, 144 110 
             C 152 135, 196 155, 196 190 
             L 196 410 
             C 196 430, 180 442, 158 442 
             L 82 442 
             C 60 442, 44 430, 44 410 
             L 44 190 
             C 44 155, 88 135, 96 110 Z"
          fill={`url(#${gradientId})`}
        />

        {/* Liquid Wave / Meniscus Surface */}
        <ellipse cx="120" cy="115" rx="26" ry="7" fill={liquidGradient[0] || color} fillOpacity="0.9" />
        <ellipse cx="120" cy="113" rx="24" ry="5" fill="#E5D3AF" fillOpacity="0.4" />

        {/* Bottle Minimalist Artisanal Label */}
        <g id="BottleLabel">
          {/* Label Card */}
          <rect 
            x="52" 
            y="210" 
            width="136" 
            height="160" 
            rx="12" 
            fill="url(#labelBg)" 
            stroke="rgba(121, 13, 22, 0.15)"
            strokeWidth="1"
            className="filter drop-shadow-md"
          />
          {/* Micro top badge */}
          <rect x="80" y="222" width="80" height="14" rx="7" fill="#790D16" fillOpacity="0.12" />
          <text 
            x="120" 
            y="232" 
            textAnchor="middle" 
            fill="#790D16" 
            fontSize="8" 
            fontWeight="800" 
            letterSpacing="1"
            fontFamily="Outfit, sans-serif"
          >
            {subtitle}
          </text>

          {/* Brand Logo & Name */}
          <text 
            x="120" 
            y="256" 
            textAnchor="middle" 
            fill="#790D16" 
            fontSize="10" 
            fontWeight="900" 
            letterSpacing="2.5"
            fontFamily="Outfit, sans-serif"
          >
            JUICE MALL
          </text>

          {/* Separator line with fruit dot */}
          <line x1="72" y1="266" x2="168" y2="266" stroke="#C9B58B" strokeWidth="1" />
          <circle cx="120" cy="266" r="3" fill="#790D16" />

          {/* Juice Flavor Name */}
          <text 
            x="120" 
            y="292" 
            textAnchor="middle" 
            fill="#1E0D10" 
            fontSize="11" 
            fontWeight="900" 
            letterSpacing="0.8"
            fontFamily="Outfit, sans-serif"
          >
            {name.length > 15 ? name.substring(0, 14) + '..' : name}
          </text>

          <text 
            x="120" 
            y="306" 
            textAnchor="middle" 
            fill="#790D16" 
            fontSize="7.5" 
            fontWeight="600" 
            letterSpacing="0.5"
            fontFamily="Outfit, sans-serif"
          >
            100% ORGANIC & RAW
          </text>

          {/* Bottom stats / volume pill */}
          <rect x="75" y="325" width="90" height="24" rx="6" fill="#790D16" />
          <text 
            x="120" 
            y="341" 
            textAnchor="middle" 
            fill="#F5EFE1" 
            fontSize="9" 
            fontWeight="800" 
            letterSpacing="1"
            fontFamily="Outfit, sans-serif"
          >
            {volume} • NO SUGAR
          </text>
        </g>

        {/* Realistic Vertical Glass Specular Highlight (Curved Left Edge) */}
        <path
          d="M 50 190 
             C 50 160, 88 138, 95 110 
             L 100 110 
             C 93 138, 56 160, 56 190 
             L 56 410 
             C 56 422, 64 430, 75 434 
             L 70 438 
             C 52 434, 50 422, 50 410 Z"
          fill="#FFFFFF"
          fillOpacity="0.4"
        />

        {/* Right Edge Rim Light */}
        <path
          d="M 190 190 
             L 190 410 
             C 190 420, 182 430, 170 435 
             L 174 438 
             C 188 432, 194 420, 194 410 
             L 194 190 Z"
          fill="#FFFFFF"
          fillOpacity="0.25"
        />

        {/* Small Condensation Droplets */}
        <circle cx="68" cy="180" r="2.5" fill="#E5D3AF" fillOpacity="0.8" />
        <circle cx="70" cy="195" r="1.8" fill="#FFFFFF" fillOpacity="0.7" />
        <circle cx="172" cy="175" r="2" fill="#E5D3AF" fillOpacity="0.8" />
        <circle cx="178" cy="230" r="2.2" fill="#FFFFFF" fillOpacity="0.7" />
        <circle cx="62" cy="385" r="2.2" fill="#FFFFFF" fillOpacity="0.7" />
      </svg>
    </div>
  );
};

export default JuiceBottleVisual;
