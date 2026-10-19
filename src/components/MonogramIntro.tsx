import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface MonogramIntroProps {
  onComplete: () => void;
  isDark: boolean;
}

export const MonogramIntro: React.FC<MonogramIntroProps> = ({ onComplete, isDark }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Auto-advance after 2.3 seconds
    const timer = setTimeout(() => {
      handleDismiss();
    }, 2300);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleDismiss}
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer select-none ${
            isDark ? 'bg-[#121212] text-[#F7F4ED]' : 'bg-[#F7F4ED] text-[#242424]'
          }`}
          role="dialog"
          aria-label="Monogram Intro"
        >
          {/* Skip button top right */}
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              className="text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded border border-[#B69A68]/30 hover:border-[#B69A68] hover:text-[#B69A68] transition-colors"
            >
              Skip Intro (ESC)
            </button>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Monogram Seal Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-36 h-36 flex items-center justify-center"
            >
              {/* Outer delicate architectural frame */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Rotating decorative geometric square */}
                <motion.rect
                  x="10"
                  y="10"
                  width="80"
                  height="80"
                  fill="none"
                  stroke="#B69A68"
                  strokeWidth="0.8"
                  strokeOpacity="0.4"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 45 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
                {/* Fixed border */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#B69A68"
                  strokeWidth="0.6"
                  strokeDasharray="2 2"
                  strokeOpacity="0.5"
                />
                {/* Fine champagne gold line tracing */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="#B69A68"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </svg>

              {/* AR Monogram Typography */}
              <div className="relative z-10 flex items-center justify-center font-serif text-4xl font-bold tracking-tight text-[#B69A68]">
                <motion.span
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  A
                </motion.span>
                <motion.span
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="italic ml-0.5 text-[#F7F4ED] dark:text-[#F7F4ED]"
                  style={{ color: isDark ? '#F7F4ED' : '#242424' }}
                >
                  R
                </motion.span>
              </div>
            </motion.div>

            {/* Subtle Title and Discipline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 text-center"
            >
              <h1 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#B69A68]">
                Aman Raj
              </h1>
              <p className="mt-1 text-xs text-neutral-400 font-mono tracking-wider">
                Full-Stack · AI Systems · Technical L&D
              </p>
            </motion.div>

            {/* Fine champagne gold progress line */}
            <motion.div
              className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-[#B69A68] to-transparent w-48"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
