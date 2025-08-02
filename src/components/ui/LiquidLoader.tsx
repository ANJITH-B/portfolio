'use client';

import { motion } from 'framer-motion';

export default function LiquidLoader() {
  return (
    <div className="flex items-center justify-center h-[400px]  relative">
      <svg className="absolute w-0 h-0">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix values=" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0  0 0 0 20 -10 " /> 
        </filter>
      </svg>

       <div className="relative w-[320px] h-[80px]" style={{ filter: 'url(#gooey)' }}>
        {/* Static bubbles */}
        <span className="absolute w-20 h-20 rounded-full bg-white  shadow-[inset_0_0_1px_1px_#000] left-0 top-0" />
        <span className="absolute w-20 h-20 rounded-full bg-white shadow-[inset_0_0_1px_1px_#000] left-[120px] top-0" />
        <span className="absolute w-20 h-20 rounded-full bg-white shadow-[inset_0_0_1px_1px_#000] left-[240px] top-0" />

        {/* Animated liquid bubble */}
        <motion.span
          className="absolute w-20 h-20 rounded-full bg-gradient-to-tr shadow-[inset_0_0_1px_1px_#000] from-gray-100 to-white top-0"
          animate={{
            x: ['-20px', '120px', '260px', '120px', '-20px'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
