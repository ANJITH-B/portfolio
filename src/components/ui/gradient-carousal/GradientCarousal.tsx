"use client";
import React from "react";
import { motion } from "framer-motion";

 

export const GradientCarousal = ( ) => {
  return (
    <div className="w-full h-72  relative overflow-hidden border-2">
      <div className="p-10">
        <p className="text-black font-bold text-lg">Magic Flow</p>
      </div>
      <motion.div
        className="absolute opacity-60"
        animate={{
          x: [-100, 200, 220, -100],
          y: [0, -300, 100, 0],
          rotate: [360, 300, 200, 210, 100, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Svg />
      </motion.div>
      <motion.div
        className="absolute opacity-60"
        animate={{
          x: [-100, , 220, -100],
          y: [0, -300, 100, 0],
          rotate: [360, 200, 100, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Svg />
      </motion.div>
      <motion.div
        className="absolute opacity-50"
        initial={{ x: 100, y: -200 }}
        animate={{ rotate: [0, 100, 200, 300, 360] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Svg />
      </motion.div>
    </div>
  );
};

const Svg = () => {
  return (
    <svg
      width="1771"
      height="2257"
      className="w-[600px] h-[600px]"
      viewBox="0 0 1771 2257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_64_95)">
        <path
          d="M1549.67 818.664C1549.67 1138.8 1599.99 2038 1232.53 2038C865.075 2038 219 1138.8 219 818.664C219 498.529 516.882 219 884.337 219C1264.69 485.209 1549.67 498.529 1549.67 818.664Z"
          fill="url(#paint0_radial_64_95)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_64_95"
          x="0.5"
          y="0.5"
          width="1770"
          height="2256"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="109.25"
            result="effect1_foregroundBlur_64_95"
          />
        </filter>
        <radialGradient
          id="paint0_radial_64_95"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(959.188 1097.1) rotate(122.946) scale(931.806 2323.3)"
        >
          <stop stopColor="#344559" />
          <stop offset="1" stopColor="#B2C9D7" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};
