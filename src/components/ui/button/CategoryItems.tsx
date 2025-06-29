'use client'
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface IconProps {
  viewBox: string;
  width: number | string;
  height: number | string;
  d: string;
  src: string;
  href: string;
}
interface Props {
  icon: IconProps;
  index: number;
}

const CategoryItem: React.FC<Props> = ({ icon, index }) => {
  const { scrollYProgress } = useScroll();
  const path = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [rotateDirection, setRotateDirection] = useState<number>(0);
  const [scale, setScale] = useState<number>(0.1);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHoverStart = () => setScale(2050);
  const handleHoverEnd = () => setScale(0.1);

  const calculateAngle = (
    e: React.MouseEvent<HTMLAnchorElement>,
    rect: DOMRect
  ) => {
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    return Math.atan2(y, x) * (180 / Math.PI);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const angle = calculateAngle(e, rect);
    setRotateDirection(angle + 50);
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const angle = calculateAngle(e, rect);
    setRotateDirection(angle + 50);
    setIsHovered(false);
  };

  const uniqueId = `radialGradient-${index}`;

  return (
    <Link
      key={index}
      href={icon?.href}
      id={`divid${index}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full md:w-1/6 bg-[#fff] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] shadow-red-100 h-10 border-[#FFDBDB] rounded-2xl flex items-center justify-center text-white border-2 relative overflow-hidden cursor-pointer"
    >
      <p className="text-white mix-blend-difference z-10 text-sm">Youtube</p>

      <motion.svg
        key={index}
        animate={{ rotate: rotateDirection + 98 }}
        className="absolute md:w-32 lg:w-36"
        transition={{ duration: 0, ease: "easeInOut" }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        width="446"
        height="446"
        viewBox="0 0 446 446"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="446" height="446" fill={`url(#${uniqueId})`} />
        <defs>
          <motion.radialGradient
            id={uniqueId}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            animate={{
              gradientTransform: `translate(96.5 95.5) rotate(44.7259) scale(${scale})`,
            }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
          >
            <stop offset="0.299596"  stopColor="#ff0000"/>
            <stop offset="0.424879" stopOpacity="0" />
          </motion.radialGradient>
        </defs>
      </motion.svg>
    </Link>
  );
};

export default CategoryItem;