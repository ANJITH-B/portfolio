"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Position } from "./types";
import { menuTextExit } from "../animations/variant";
import { TMenuItem } from "@/lib/types";

interface PropsList {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onClick: () => void;
  subListContent: React.ReactNode;
  subList: TMenuItem;
}

const List = ({
  children,
  setPosition,
  onClick,
  subListContent,
}: PropsList) => {
  const ref = useRef<HTMLLIElement>(null);

  const getPosition = () => {
    if (!ref.current) return;
    const { height } = ref.current.getBoundingClientRect();
    setPosition({ height, opacity: 1, top: ref.current.offsetTop });
  };

  const handleClick = () => {
    onClick();
    setTimeout(() => {
      getPosition();
    }, 300);
  };

  return (
    <motion.li
      onClick={handleClick}
      whileHover={{ x: 7 }}
      exit={menuTextExit}
      ref={ref}
      onMouseEnter={getPosition}
      className="relative z-10 block cursor-pointer px-3  py-1.5 md:px-5 md:pl-2 md:py-1 text-xs font-questrial
      text-gray-500 hover:text-white mix-blend-difference md:text-lg"
    >
      {children}
      {subListContent ? subListContent : null}
    </motion.li>
  );
};

export default List;
