// Framer Motion Animation Variants & Helper Utilities

export const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: custom.delay || 0,
    },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: custom.delay || 0,
    },
  }),
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: custom.delay || 0,
    },
  }),
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: custom.delay || 0,
    },
  }),
};

export const badgePulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
