"use client";
import React, { useState, useId } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  hoverColor: string;
  url?: string;
}

const Button = ({ children, className, hoverColor, url }: Props) => {
  const [rotateDirection, setRotateDirection] = useState<number>(0);
  const [scale, setScale] = useState<number>(0.1);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const uniqueId = useId();

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

  return (
    <Link
      href={url ? url : "/"}
      target={url?.startsWith("https://") ? "_blank" : "_self"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "w-28 h-8 bg-white shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]   rounded-xl flex items-center justify-center text-white border-1 relative overflow-hidden cursor-pointer",
        className
      )}
    >
      <motion.div
        exit={{}}
        transition={{ delay: 3 }}
        className={`${
          isHovered ? "text-white" : "text-gray-500"
        } z-10 text-xs flex gap-1.5 pointer-events-none`}
      >
        {children}
      </motion.div>

      <motion.svg
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
            <stop offset="0.299596" stopColor={hoverColor} />
            <stop offset="0.424879" stopOpacity="0" />
          </motion.radialGradient>
        </defs>
      </motion.svg>
    </Link>
  );
};

export default Button;
